import React, { Component } from 'react';

class ANZBAComponent extends Component {
    render() {
        return(
            <div>
                <h1>ANZBA Referral Criteria</h1>
            
                <i>Refer patient if any of the following criteria match:</i>
                <ul className="referralCriteria">
                    <li>Burns greater than 10% Total Body Surface Area (TBSA)</li>
                    <li>Burns greater than 5% TBSA in children</li>
                    <li>Full Thickness burns greater than 5% TBSA</li>
                    <li>Burns of Special Areas – Face, Hands, Feet, Genitalia, Perineum, Major Joints and circumferential limb or chest burns</li>
                    <li>Burns with inhalation injury</li>
                    <li>Electrical burns</li>
                    <li>Chemical burns</li>
                    <li>Burns with pre-existing illness</li>
                    <li>Burns associated with major trauma</li>
                    <li>Burns at the extremes of age – young children and the elderly.</li>
                    <li>Burn injury in pregnant women</li>
                    <li>Non-accidental burns</li>
                </ul>
        
                <i>Source: <a href="https://anzba.org.au/care/referral-criteria/">https://anzba.org.au/care/referral-criteria/</a></i>
            </div>

        );
    }
}

export default ANZBAComponent;