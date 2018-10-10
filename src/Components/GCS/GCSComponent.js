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
                                <input type="radio" id="huey" name="drone" value="huey" checked />
                                <label for="huey">Spontaneously (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="dewey" name="drone" value="dewey" />
                                <label for="dewey">To Verbal Command (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">To Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">No Eye Opening (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Not assessable (+1c)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="huey" name="drone" value="huey" checked />
                                <label for="huey">Oriented (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="dewey" name="drone" value="dewey" />
                                <label for="dewey">Confused (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Innapropriate Words (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Incomprehensible Sounds (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">No Verbal Response (+1)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Incubated (+1t)</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="radio" id="huey" name="drone" value="huey" checked />
                                <label for="huey">Obeys Commands (+6)</label>
                            </div>
                            <div>
                                <input type="radio" id="dewey" name="drone" value="dewey" />
                                <label for="dewey">Localises Pain (+5)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Withdrawal From Pain (+4)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Flexion to Pain (+3)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">Extension to Pain (+2)</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="louie" />
                                <label for="louie">No Motor Response (+1)</label>
                            </div>
                        </td>
                    </tr>
                </table>
                <h2>GCS Score: </h2>
            </div>

        );
    }
}

export default GCSComponent;