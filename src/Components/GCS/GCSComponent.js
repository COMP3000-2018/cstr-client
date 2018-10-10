import React, { Component } from 'react';

class GCSComponent extends Component {
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
                                <input type="radio" id="E4" name="E" value="E4" />
                                <label for="E4">Spontaneously (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="E3" name="E" value="E3" />
                                <label for="E3">To Verbal Command (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="E2" name="E" value="E2" />
                                <label for="E2">To Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="E1" name="E" value="E1" />
                                <label for="E1">No Eye Opening (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="E1c" name="E" value="E1c" />
                                <label for="E1c">Not assessable (+1c)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="V5" name="V" value="V5" />
                                <label for="V5">Oriented (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="V4" name="V" value="V4" />
                                <label for="V4">Confused (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="V3" name="V" value="V3" />
                                <label for="V3">Innapropriate Words (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="V2" name="V" value="V2" />
                                <label for="V2">Incomprehensible Sounds (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="V1" name="V" value="V1" />
                                <label for="V1">No Verbal Response (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="V1t" name="V" value="V1t" />
                                <label for="V1t">Incubated (+1t)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="M6" name="M" value="M6"/>
                                <label for="M6">Obeys Commands (+6)</label>
                            </div>
                            <div>
                                <input type="radio" id="M5" name="M" value="M5" />
                                <label for="M5">Localises Pain (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="M4" name="M" value="M4" />
                                <label for="M4">Withdrawal From Pain (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="M3" name="M" value="M3" />
                                <label for="M3">Flexion to Pain (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="M2" name="M" value="M2" />
                                <label for="M2">Extension to Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="M1" name="M" value="M1" />
                                <label for="M1">No Motor Response (+1)</label>
                            </div>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <h3>GCS Score: <h2 id='score'>15 points</h2></h3>
                        </td>
                        <td>
                            <h3>GCS Breakdown: <h2 id='detailedScore'>E4V5M6</h2></h3>
                        </td>
                    </tr>
                </table>
            </div>

        );
    }
}

export default GCSComponent;