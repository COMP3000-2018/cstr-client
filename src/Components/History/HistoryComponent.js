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
    
    render() {
    const { loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }
    
    return(
        <div>
        <h1>{this.getName()}</h1>
        <h2>Info</h2>
        <p>Age: {this.getAge()}</p>
        <p>Gender: {this.getGender()}</p>
        <p>Additional Information: {this.getAdditionalInfo()}</p>
        </div>
    );
    }

}

export default HistoryComponent;
