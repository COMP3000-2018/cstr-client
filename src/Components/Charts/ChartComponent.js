import React, { Component } from 'react';
import BloodChart from './BloodChart.js';
import BarChart from './BarChart.js';

class ChartComponent extends Component {
    render() {
        return(
            <div><BloodChart/>
            <BarChart/></div>
        );
    }

}

export default ChartComponent;
