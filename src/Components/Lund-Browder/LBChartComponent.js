import React, { Component } from 'react';

class LBChartComponent extends Component {
    render() {
        return(
            <div id="LBChart">
                <h1>Lund-Browder Chart</h1>
                <table class="hiddenTable"> 
                    <tr>
                        <td>
                <img src="/Images/LBChart.png" /> 
                        </td>
                    <td>
                <table>
                    <tr>
                        <td>
                            <h3>Region</h3>
                        </td>
                        <td>
                            <h3>Partial Thickness (%)</h3>
                        </td>
                        <td>
                            <h3>Full Thickness (%)</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Head</p>
                        </td>
                        <td>
                            <p>3.5</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Neck</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>2</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Anterior Trunk</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>13</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Posterior Trunk</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>13</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Right Arm</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>10</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Left Arm</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>10</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Buttocks</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Genitalia</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Right Leg</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>7</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Left Leg</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p>7</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Total Burn</strong>
                        </td>
                        <td>
                            <strong>3.5</strong>
                        </td>
                        <td>
                            <strong>63</strong>
                        </td>
                    </tr>
                </table>
                    </td>
                </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <strong>Area</strong>
                        </td>
                        <td>
                            <strong>Age 0</strong>
                        </td>
                        <td>
                            <strong>Age 1</strong>
                        </td>
                        <td>
                            <strong>Age 5</strong>
                        </td>
                        <td>
                            <strong>Age 10</strong>
                        </td>
                        <td>
                            <strong>Age 15</strong>
                        </td>
                        <td>
                            <strong>Adult</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>A = half of head</strong>
                        </td>
                        <td>
                            <p>9.5</p>
                        </td>
                        <td>
                            <p>8.5</p>
                        </td>
                        <td>
                            <p>6.5</p>
                        </td>
                        <td>
                            <p>5.5</p>
                        </td>
                        <td>
                            <p>4.5</p>
                        </td>
                        <td>
                            <p>3.5</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>B = half of one thigh</strong>
                        </td>
                        <td>
                            <p>2.75</p>
                        </td>
                        <td>
                            <p>3.25</p>
                        </td>
                        <td>
                            <p>4</p>
                        </td>
                        <td>
                            <p>4.5</p>
                        </td>
                        <td>
                            <p>4.5</p>
                        </td>
                        <td>
                            <p>4.75</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>C = half of one lower leg</strong>
                        </td>
                        <td>
                            <p>2.5</p>
                        </td>
                        <td>
                            <p>2.5</p>
                        </td>
                        <td>
                            <p>2.75</p>
                        </td>
                        <td>
                            <p>3</p>
                        </td>
                        <td>
                            <p>3.25</p>
                        </td>
                        <td>
                            <p>3.5</p>
                        </td>
                    </tr>
                </table>
                <i>Source: Figure 2. The Lund and Browder Chart for calculation of TBSA... (n.d.). Retrieved October 13, 2018, from <a href="https://www.researchgate.net/figure/The-Lund-and-Browder-Chart-for-calculation-of-TBSA-Permission-to-reproduce-from_fig2_306034027">https://www.researchgate.net/figure/The-Lund-and-Browder-Chart-for-calculation-of-TBSA-Permission-to-reproduce-from_fig2_306034027</a></i>
            </div>
        );
    }

}

export default LBChartComponent;