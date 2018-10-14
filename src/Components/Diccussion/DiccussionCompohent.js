import React, { Component } from 'react';
import Collapse from '../Accordion/Collapse.jsx';
import Panel from '../Accordion/Panel.jsx';
require('../Accordion/collapse.css');

class DiccussionComponent extends Component {
    constructor(){
        super()
        this.state = {
        x: "",
          datasets: [
            {
                id: 0,
                title: 'Discussion Points 1',
                selected: false,
                key: 'Discussion Points',
                x: <ul><li>Is there any significance in his previous burn?</li>
                <li>How are burns assessed with respect to thickness and total body surface area?</li>
                <li>What is the pathophysiology of the various types of burns?</li>
                <li>Does Nathan require additional protection against tetanus?</li>
                <li>Why is important to obtain IV access?</li>
                <li>What other management might you consider? Who else might you consult?</li>
                <li>When should a patient be transferred to a specialised burns unit?</li>
                <li>What is the purpose of the gladwrap? What other options are there for dressing a burn?</li></ul>
            },
            {
              id: 1,
              title: 'Discussion Points 2',
              selected: false,
              key: 'Discussion Points',
              x: <ul><li>What are the most common sources of burns in adults? What about children?</li>
              <li>How can the severity of a burn be judged?</li>
              <li>What are the immediate and longer term complications of a burn?</li>
              <li>What is appropriate first aid in a burned patient?</li>
              <li>What elements of the history are especially important here?</li>
              <li>Are any population groups more at risk of burn injury?</li></ul>
            }
          ]
        }
      }

    render() {
        return(
            <div>    
                <h1>Discussion Starters</h1>
                <Collapse accordion={true}>
                    <Panel header="Discussion Points 1" headerClass="discussion-panels">
                        <ol class="discussion-points">
                            <li>Is there any significance in his previous burn?</li>
                            <li>How are burns assessed with respect to thickness and total body surface area?</li>
                            <li>What is the pathophysiology of the various types of burns?</li>
                            <li>Does Nathan require additional protection against tetanus?</li>
                            <li>Why is important to obtain IV access?</li>
                            <li>What other management might you consider? Who else might you consult?</li>
                            <li>When should a patient be transferred to a specialised burns unit?</li>
                            <li>What is the purpose of the gladwrap? What other options are there for dressing a burn?</li>
                        </ol>
                    </Panel>
                    <Panel header="Discussion Points 2" headerClass="discussion-panels">
                           <ol class="discussion-points">
                                <li>What are the most common sources of burns in adults? What about children?</li>
                                <li>How can the severity of a burn be judged?</li>
                                <li>What are the immediate and longer term complications of a burn?</li>
                                <li>What is appropriate first aid in a burned patient?</li>
                                <li>What elements of the history are especially important here?</li>
                                <li>Are any population groups more at risk of burn injury?</li>
                            </ol> 
                    </Panel>
                  </Collapse>
            </div>
        );
    }

}

export default DiccussionComponent;
