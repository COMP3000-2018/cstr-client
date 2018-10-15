import React, { Component } from 'react';

class ANZBAComponent extends Component {
    render() {
        return(
            <div>
                <h1>ANZBA Referral Criteria</h1>
            
                <i>Refer patient if any of the following criteria match:</i>
                <ul className="referralCriteria">
                    <div><input type="checkbox"/>Burns greater than 10% Total Body Surface Area (TBSA)</div>
                    <div><input type="checkbox"/>Burns greater than 5% TBSA in children</div>
                    <div><input type="checkbox"/>Full Thickness burns greater than 5% TBSA</div>
                    <div><input type="checkbox"/>Burns of Special Areas – Face, Hands, Feet, Genitadiva, Perineum, Major Joints and circumferential divmb or chest burns</div>
                    <div><input type="checkbox"/>Burns with inhalation injury</div>
                    <div><input type="checkbox"/>Electrical burns</div>
                    <div><input type="checkbox"/>Chemical burns</div>
                    <div><input type="checkbox"/>Burns with pre-existing illness</div>
                    <div><input type="checkbox"/>Burns associated with major trauma</div>
                    <div><input type="checkbox"/>Burns at the extremes of age – young children and the elderly.</div>
                    <div><input type="checkbox"/>Burn injury in pregnant women</div>
                    <div><input type="checkbox"/>Non-accidental burns</div>
                </ul>
        
                <i>Source: ANZBA. (n.d.). ANZBA Referral Criteria. Retrieved October 13, 2018, from <a href="https://anzba.org.au/care/referral-criteria/">https://anzba.org.au/care/referral-criteria/</a></i>
            </div>

        );
    }
}

export default ANZBAComponent;