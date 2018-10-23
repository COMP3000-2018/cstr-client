import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content";
import { withRouter } from "react-router-dom";
import { access } from "fs";
import uuidv4 from "uuid/v4";

import config from "../Config";
import fhirTemplates from "../fhirTemplates";

class Main extends Component {
  constructor(props) {
    super(props);

    const savedCurrentlySelected = localStorage.getItem("currentlySelected");

    this.state = {
      currentlySelected: savedCurrentlySelected
        ? savedCurrentlySelected
        : "Story"
    };

    this.changeCurrentlySelected(this.state.currentlySelected);
  }

  componentDidMount() {
    const queryStrings = this.retrieveQueryStrings(window.location.href);

    if (queryStrings.get("launch") && queryStrings.get("iss")) {
      // it's an initial launch, behave appropriately
      fetch(
        `${config.AUTH_API_ENDPOINT}/ehr_launch?launch=${queryStrings.get(
          "launch"
        )}&iss=${queryStrings.get("iss")}`
      )
        .then(res => res.json())
        .then(({ sso_redirect }) => (window.location = sso_redirect));

      return;
    }

    if (
      !this.state.jwt &&
      queryStrings.get("code") &&
      queryStrings.get("state")
    ) {
      // we've launched now. time to get some goodies
      fetch(
        `${config.AUTH_API_ENDPOINT}/retrieve_token?code=${queryStrings.get(
          "code"
        )}`
      )
        .then(res => res.json())
        .then(({ access_token }) =>
          this.setState({ jwt: access_token }, () => {
            this.createNewPatient();
          })
        );
      return;
    }
  }

  createNewPatient() {
    const newPatient = fhirTemplates.patient;
    const newPatientId = uuidv4();

    newPatient.entry[0].fullUrl = `Patient/${newPatientId}`;
    newPatient.entry[0].request.url = `Patient/${newPatientId}`;
    newPatient.entry[0].resource.id = newPatientId;

    const body = { patient: newPatient };

    fetch(`${config.GOODIES_API_ENDPOINT}/patient?token=${this.state.jwt}`, {
      method: "POST",
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ patientId: newPatientId });
      });
  }

  retrieveQueryStrings(url) {
    const splitUrl = url.split("?");

    if (splitUrl.length < 2) {
      return new Map();
    }

    const rawQueryStringAndFragment = splitUrl.slice(-1)[0];
    const rawQueryString = rawQueryStringAndFragment.split("#")[0];

    const keyValuePairs = rawQueryString.split("&");

    const pairsContainer = keyValuePairs.reduce((pairsContainer, pair) => {
      const splitPair = pair.split("=");

      if (splitPair.length === 1) {
        splitPair.push("true");
      }

      pairsContainer.set(splitPair[0], splitPair[1]);

      return pairsContainer;
    }, new Map());

    return pairsContainer;
  }

  changeCurrentlySelected(currentlySelected) {
    localStorage.setItem("currentlySelected", currentlySelected);

    this.setState({ currentlySelected }, () => {
      switch (this.state.currentlySelected) {
        case "Glasgow Coma Scale":
          this.props.history.push("gcs");
          break;
        case "Physical Examination":
          this.props.history.push("charts");
          break;
        case "Case Story":
          this.props.history.push("story");
          break;
        case "Discussion Starters":
          this.props.history.push("discussion");
          break;
        default:
          this.props.history.push(`/${this.state.currentlySelected}`);
      }
    });
  }

  render() {
    const sidebarItems = [
      {
        name: "History",
        icon: "fa-history",
        category: "charts"
      },
      {
        name: "Physical",
        icon: "fa-chart-bar",
        category: "charts"
      },
      {
        name: "Investigations",
        icon: "fa-search",
        category: "charts"
      },
      {
        name: "ANZBA",
        icon: "fa-star",
        category: "app"
      },
      {
        name: "GCS",
        icon: "fa-star",
        category: "app"
      },
      {
        name: "Lund-Browder",
        icon: "fa-star",
        category: "app"
      },
      {
        name: "Story",
        icon: "fa-book",
        category: "story"
      },
      {
        name: "Discussion",
        icon: "fa-tasks",
        category: "story"
      }
    ];

    return (
      <React.Fragment>
        <Sidebar
          changeCurrentlySelected={newSelection =>
            this.changeCurrentlySelected(newSelection)
          }
          currentlySelected={this.state.currentlySelected}
          items={sidebarItems}
        />
        {this.state.jwt && <Content jwt={this.state.jwt} />}
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
