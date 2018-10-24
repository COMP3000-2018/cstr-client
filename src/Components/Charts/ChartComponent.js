import React, { Component } from 'react';
import BloodChart from './BloodChart.js';
import Collapse from '../Accordion/Collapse.jsx';
import Panel from '../Accordion/Panel.jsx';
import BarSeries from './BarChart.js';
import Progress from '../../Progress.js';
require('../Accordion/collapse.css');

class ChartComponent extends Component {
    render() {
        let unlocked = Progress.Discovered;
        let Charts = [];
        
        // Check if nothing is there
        let nothingThere = true;
        for (var key in unlocked) {
             if (unlocked[key]) nothingThere = false;
        };
        
        if (nothingThere) {
            // No data yet
            Charts.push(<i>Nothing here at the moment. Collect data from the story to see them here.</i>);            
        } else {        
            // Build accordion menu based on what user has collected
            if (unlocked.BloodPressure)
                Charts.push(<Panel header="Blood Pressure" headerClass="discussion-panels" visibility><BloodChart/></Panel>);
            if (unlocked.HeartRate)
                Charts.push(<Panel header="Heart Rate" headerClass="discussion-panels"><BarSeries x={[80,161]} title= {'Heart Rate'} pick={1} data={140}/></Panel>);
            if (unlocked.OxygenSaturation)
                Charts.push(<Panel header="Oxygen Saturation" headerClass="discussion-panels"><BarSeries x={[85,101]} title= {'Oxygen saturation'} pick={0} data={100}/></Panel>);
            if (unlocked.Temperature)
                Charts.push(<Panel header="Temperature" headerClass="discussion-panels"><BarSeries x={[34,43]} title= {'Temperature'} pick={1} data={35}/></Panel>);
            if (unlocked.Weight)
                Charts.push(<Panel header="Weight" headerClass="discussion-panels"><BarSeries x={[50,101]} title= {'Weight'} pick={1}  data={75}/></Panel>);
            
            // Wrap in necessary parent
            Charts = <Collapse accordion={true}>{Charts}</Collapse>;
        }
    
        return(
            
            <div>
                <h1>Test Results</h1>
                {Charts}
            </div>
        );
    }

}

export default ChartComponent;
