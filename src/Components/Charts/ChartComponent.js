import React, { Component } from 'react';
import BloodChart from './BloodChart.js';
import Collapse from '../Accordion/Collapse.jsx';
import Panel from '../Accordion/Panel.jsx';
import BarSeries from './BarChart.js';
require('../Accordion/collapse.css');

class ChartComponent extends Component {
    render() {
        return(
            <div>
                <h1>Test Results</h1>
                                <Collapse accordion={true}>
                    <Panel header="Blood Pressure" headerClass="discussion-panels">
                        <BloodChart/>
                    </Panel>
                    <Panel header="Heart Rate" headerClass="discussion-panels">
                        <BarSeries x={[80,160]} title= {'Heart Rate'} pick={1} data={140}/>
                    </Panel>
                    <Panel header="Oxygen Saturation" headerClass="discussion-panels">
                        <BarSeries x={[85,100]} title= {'Oxygen saturation'} pick={0} data={100}/>
                    </Panel>
                    <Panel header="Temperature" headerClass="discussion-panels">
                        <BarSeries x={[34,42]} title= {'Temperature'} pick={1} data={35}/>
                    </Panel>
                    <Panel header="Weight" headerClass="discussion-panels">
                        <BarSeries x={[50,100]} title= {'Weight'} pick={1}  data={75}/>
                    </Panel>
                  </Collapse>
            </div>
        );
    }

}

export default ChartComponent;
