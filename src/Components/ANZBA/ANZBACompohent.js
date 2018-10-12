import React, { Component } from 'react';

class ANZBAComponent extends Component {
    render() {
        return(
            <div>
                <td onClick={()=> window.open("https://anzba.org.au/care/referral-criteria/", "_blank")}><h1>ANZBA refferal criteria</h1></td>
            </div>

        );
    }
}

export default ANZBAComponent;