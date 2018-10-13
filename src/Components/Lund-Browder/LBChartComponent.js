import React, { Component } from 'react';

class LBChartComponent extends Component {
    render() {
        return(
            <div>
                <h1>Lund-Browder Chart</h1>
                <img id="LBChart" src="/Images/LBChart.png" />
                <br></br>
                <i>Source: Figure 2. The Lund and Browder Chart for calculation of TBSA... (n.d.). Retrieved October 13, 2018, from <a href="https://www.researchgate.net/figure/The-Lund-and-Browder-Chart-for-calculation-of-TBSA-Permission-to-reproduce-from_fig2_306034027">https://www.researchgate.net/figure/The-Lund-and-Browder-Chart-for-calculation-of-TBSA-Permission-to-reproduce-from_fig2_306034027</a></i>
            </div>
        );
    }

}

export default LBChartComponent;