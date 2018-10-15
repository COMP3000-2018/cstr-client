import React, { Component } from 'react';

class HistoryComponent extends Component {
    constructor(props) {
    super(props);

    this.state = {
      patientId: "",
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
        fetch(`http://cstr.uqcloud.net/mock/patients/`).then(response => {
            return response.json();
        })
        .then(patientData => {
            this.setState({
                loading: false,
                patientData
            });
        });
    }
    
    getName() {
        var name = this.getResource().name[0]
        return name.given + " " + name.family
    }
    
    getAge() {
        var birthDate = this.getResource().birthDate;
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
        return "Past Medical History: Nil Vaccination history: Fully vaccinated as a child Tetanus booster 15 yo Social History: - 2nd year carpentry apprentice, lives with brother - Cigarettes 20/day, since 14 yo - Marijuana – regular - Alcohol - social Recent visits: 5/9/18: Presented with burn left forearm. States accidental burn from cigarette lighter. Conservative management."
    }
    
    render() {
    const { loading } = this.state;

    if (loading) {
      return <div>
          <h1>Patient History</h1>
          Loading
        </div>;
    }
    
    return(
        <div>
        <h1>Patient History</h1>
        <div class="historyTitle">{this.getName()}</div>
        <div class="historySubtitle">Info</div>
        <div class="historyText"><b>Age:</b> {this.getAge()}</div>
        <div class="historyText"><b>Gender:</b> {this.getGender()}</div>
        <div class="historyText"><b>Additional Information:</b> {this.getAdditionalInfo()}</div>
        <div class="padder"> </div>
        <div class="historySubtitle">Description</div>
        <div class="historyText">{this.getDescription()}</div>
        </div>
    );
    }

}

export default HistoryComponent;
