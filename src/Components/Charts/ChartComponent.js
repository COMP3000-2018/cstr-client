import React, { Component } from 'react';
import BloodChart from './BloodChart.js';
import BarSeries from './BarChart.js';

class ChartComponent extends Component {
    render() {
        return(
            <div><BloodChart/>
            <BarSeries/></div>
        );
    }

}

export default ChartComponent;
