import React, { Component } from 'react';

class GCSComponent extends Component {
    calculate() {
        let totalScore = "";
        
        let EScore = 0;
        let VScore = 0;
        let MScore = 0;
        
        let ELabel = document.querySelector('input[name="E"]:checked') != null ? document.querySelector('input[name="E"]:checked').value: null;
        let VLabel = document.querySelector('input[name="V"]:checked') != null ? document.querySelector('input[name="V"]:checked').value: null;
        let MLabel = document.querySelector('input[name="M"]:checked') != null ? document.querySelector('input[name="M"]:checked').value: null;
        
        // If all are filled in, start calculating
        if (ELabel != null && VLabel != null && MLabel != null) {
            // Eye opening
            switch (ELabel) {
                case "E4":
                    EScore = 4;
                    break;
                case "E3":
                    EScore = 3;
                    break;
                case "E2":
                    EScore = 2;
                    break;
                case "E1":
                    EScore = 1;
                    break;
                case "E1c":
                    EScore = 1;
                    break;
                default:
                    totalScore = "ERROR";
            };
        
            // Verbal Response
            switch (VLabel) {
                case "V5":
                    VScore = 5;
                    break;
                case "V4":
                    VScore = 4;
                    break;
                case "V3":
                    VScore = 3;
                    break;
                case "V2":
                    VScore = 2;
                    break;
                case "V1":
                    VScore = 1;
                    break;
                case "V1t":
                    VScore = 1;
                    break;
                default:
                    totalScore = "ERROR";
            };
        
            // Motor Response
            switch (MLabel) {
                case "M6":
                    MScore = 6;
                    break;
                case "M5":
                    MScore = 5;
                    break;
                case "M4":
                    MScore = 4;
                    break;
                case "M3":
                    MScore = 3;
                    break;
                case "M2":
                    MScore = 2;
                    break;
                case "M1":
                    MScore = 1;
                    break;
                default:
                    totalScore = "ERROR";
            };
            
            if (totalScore != "ERROR") {
                totalScore = EScore + VScore + MScore;
            }
            
            document.getElementById("score").innerHTML = totalScore != "" ? totalScore + " points" : totalScore;
        
            document.getElementById('detailedScore').innerHTML = ELabel + VLabel + MLabel;
        }
        
    }
    
    render() {
        return(
            <div>
                <h1>Glasgow Coma Scale Calculator</h1>
                <table>
                    <tr>
                        <th>Eye Opening</th>
                        <th>Verbal Response</th>
                        <th>Motor Response</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="radio" id="E4" name="E" value="E4" onClick={this.calculate} />
                                <label for="E4">Spontaneously (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="E3" name="E" value="E3" onClick={this.calculate} />
                                <label for="E3">To Verbal Command (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="E2" name="E" value="E2" onClick={this.calculate} />
                                <label for="E2">To Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="E1" name="E" value="E1" onClick={this.calculate} />
                                <label for="E1">No Eye Opening (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="E1c" name="E" value="E1c" onClick={this.calculate} />
                                <label for="E1c">Not assessable (+1c)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="V5" name="V" value="V5" onClick={this.calculate} />
                                <label for="V5">Oriented (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="V4" name="V" value="V4" onClick={this.calculate} />
                                <label for="V4">Confused (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="V3" name="V" value="V3" onClick={this.calculate} />
                                <label for="V3">Innapropriate Words (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="V2" name="V" value="V2" onClick={this.calculate} />
                                <label for="V2">Incomprehensible Sounds (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="V1" name="V" value="V1" onClick={this.calculate} />
                                <label for="V1">No Verbal Response (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="V1t" name="V" value="V1t" onClick={this.calculate} />
                                <label for="V1t">Incubated (+1t)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="M6" name="M" value="M6" onClick={this.calculate} />
                                <label for="M6">Obeys Commands (+6)</label>
                            </div>
                            <div>
                                <input type="radio" id="M5" name="M" value="M5" onClick={this.calculate} />
                                <label for="M5">Localises Pain (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="M4" name="M" value="M4" onClick={this.calculate} />
                                <label for="M4">Withdrawal From Pain (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="M3" name="M" value="M3" onClick={this.calculate} />
                                <label for="M3">Flexion to Pain (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="M2" name="M" value="M2" onClick={this.calculate} />
                                <label for="M2">Extension to Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="M1" name="M" value="M1" onClick={this.calculate} />
                                <label for="M1">No Motor Response (+1)</label>
                            </div>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <h3>GCS Score: <h2 id='score'></h2></h3>
                        </td>
                        <td>
                            <h3>GCS Breakdown: <h2 id='detailedScore'></h2></h3>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default GCSComponent;