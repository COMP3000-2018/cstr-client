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
        fetch(`http://localhost:1989/patients/`).then(response => {
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
        return "Being a small town, you are working as the hospital doctor and also a GP. Nathan is a 2nd year carpentry apprentice who lives with his brother just out of Barcaldine. He smokes 20 cigarettes a day and has done since he was 14 years old. He is also a regular marijuana smoker. He states that he drinks alcohol only socially. Nathan is normally well with no medical conditions. He had a tetanus booster when he started his apprenticeship at age 15. You last saw him 6 weeks ago with a cigarette lighter burn to his forearm. It is being managed conservatively."
    }
    
    render() {
    const { loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }
    
    return(
        <div>
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
