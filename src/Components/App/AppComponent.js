import React, { Component } from 'react';

class AppComponent extends Component {
    render() {
        return(
            <div>
                <h1>Applications</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                    <tr>
                        <td>Glasgow Coma Scale</td>
                        <td><a href="https://www.google.com">https://www.mdcalc.com/glasgow-coma-scale-score-gcs</a></td>
                    </tr>
                    <tr>
                        <td>Lund-Browder Chart</td>
                        <td><a href="https://www.google.com">http://www.vicburns.org.au/wp-content/uploads/2016/06/poster4-paediatric-burns-assessment-ruler.pdf</a></td>
                    </tr>
                    <tr>
                        <td>ANZBA Guidelines</td>
                        <td><a href="https://www.google.com">http://anzba.org.au/care/allied-health-guidelines/</a></td>
                    </tr>
                </table>
            </div>

        );
    }
}

export default AppComponent;