import React, { Component } from 'react';
import config from '../../Config';

class HistoryComponent extends Component {
    constructor(props) {
    super(props);

    this.state = {
      patientId: "MEDI7212-15-Patient",
      patientData: {},
      loading: true
    };
  }
    getResource() {
        return this.state.patientData.entry[0].resource
    }
    
    componentDidMount() {
        const { patientId } = this.state

        this.retrievePatient(patientId)
    }
    
    retrievePatient(patientId) {
        fetch(`${config.GOODIES_API_ENDPOINT}/patient/${patientId}?token=${this.props.jwt}`)
            .then(res => res.json())
            .then(patientData => this.setState({ patientData, loading: false}));
            //.then(res => alert(JSON.stringify(res)))
        // fetch(`/mock/patients/`).then(response => {
        //     return response.json();
        // })
        // .then(patientData => {
        //     this.setState({
        //         loading: false,
        //         patientData
        //     });
        // });
    }
    
    getName() {
        var name = this.getResource().name[0]
        return name.given + " " + name.family
    }
    
    getAge(birthdate) {
        //var birthDate = this.getResource().birthDate;
        var today = new Date();
        var birthDate = new Date(birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }
    
    getGender() {
        return this.getResource().gender
    }
    
    getAdditionalInfo() {
        var conditions = [];
        var entry = this.state.patientData.entry;
        for (var i=0; i < entry.length; i++) {
            if (entry[i].fullUrl.startsWith("Condition")) {
                conditions.push(entry[i].resource.code.coding[0].display)
            }
        }
        var result = "";
        var isFirst = true;
        for (var i=0; i < conditions.length; i++) {
            if (!isFirst) {
                result += ", "
            }
            result += conditions[i]
            isFirst = false;
        }
        return result
    }

    getDescription() {
        return <div>
            <p><strong>Past Medical History:</strong> Nil</p> 
            <p><strong>Vaccination history:</strong> Fully vaccinated as a child Tetanus booster 15 yo</p>
            <p><strong>Social History:</strong> - 2nd year carpentry apprentice, lives with brother - Cigarettes 20/day, since 14 yo - Marijuana – regular - Alcohol - social</p>
            <p><strong>Recent visits:</strong> 5/9/18: Presented with burn left forearm. States accidental burn from cigarette lighter. Conservative management.</p></div>
    }
    
    render() {
    const { loading } = this.state;

    if (loading) {
      return <div>
          <h1>Patient History</h1>
          Loading
        </div>;
    }

    const { birthDate, gender, name } = this.state.patientData;
    
    return(
        <div>
        <h1>Patient History - {`${name[0].given[0]} ${name[0].family}`}</h1>
        <h2>Info</h2>
        <div class="historyText"><b>Birthday</b> {birthDate}</div>
        <div class="historyText"><b>Gender:</b> {gender}</div>
        {/* <div class="historyText"><b>Additional Information:</b> {this.getAdditionalInfo()}</div>
        <h2>Description</h2>
        <div class="historyText">{this.getDescription()}</div> */}
        </div>
    );
    }

}

export default HistoryComponent;
