import React, { Component } from 'react';
import BloodChart from './BloodChart.js';
import Dropdown from './dropdown.js';
import BarSeries from './BarChart.js';

class ChartComponent extends Component {
    constructor(){
        super()
        this.state = {
        x: "",
          datasets: [
            {
                id: 0,
                title: 'Blood Pressure',
                selected: false,
                key: 'dataset',
                x: <BloodChart/>
            },
            {
              id: 1,
              title: 'Heart Rate',
              selected: false,
              key: 'datasets',
              x: <BarSeries x={[80,160]} title= {'Heart Rate'} pick={1} data={140}/>
            },
            {
              id: 2,
              title: 'Oxygen saturation',
              selected: false,
              key: 'datasets',
              x: <BarSeries x={[85,100]} title= {'Oxygen saturation'} pick={0} data={100}/>
            },
            {
              id: 3,
              title: 'Temperature',
              selected: false,
              key: 'datasets',
              x: <BarSeries x={[34,42]} title= {'Temperature'} pick={1} data={35}/>
            },
            {
              id: 4,
              title: 'Weight',
              selected: false,
              key: 'datasets',
              x: <BarSeries x={[50,100]} title= {'Weight'} pick={1}  data={75}/>
            }
          ]
        }
      }

    render() {
        return(
            <div>
                <h1>Test Results</h1>
                <Dropdown
            title="Select Data"
            list={this.state.datasets}
            content = {this.state.x}
          />
            </div>
        );
    }

}

export default ChartComponent;
