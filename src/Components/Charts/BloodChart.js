import React, { Component } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
  MarkSeries,
  Hint
} from 'react-vis';

class BloodChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null
        };
        this._rememberValue = this._rememberValue.bind(this);
        this._forgetValue = this._forgetValue.bind(this);
      }
    
      _forgetValue() {
        this.setState({
          value: null
        });
      }
    
      _rememberValue(value) {
        this.setState({value});
      }

    render() {
        const {value} = this.state;
        return (
          <XYPlot xDomain={[35, 105]} yDomain={[65, 195]} width={300} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <AreaSeries
                       color={'#fb3d32'}
                       data={[
                         {x: 40, y: 70},
                         {x: 40, y: 190},
                         {x: 100, y: 190},
                         {x: 100, y: 70}
                       ]}
                     />
                     <AreaSeries
                     color={'#ffdc39'}
                       data={[
                         {x: 40, y: 70},
                         {x: 40, y: 140},
                         {x: 90, y: 140},
                         {x: 90, y: 70}
                       ]}
                     />
                     <AreaSeries
                     color={'#3ab451'}
                       data={[
                         {x: 40, y: 70},
                         {x: 40, y: 120},
                         {x: 80, y: 120},
                         {x: 80, y: 70}
                       ]}
                     />
                     <AreaSeries
                       color={'#005798'}
                       data={[
                         {x: 40, y: 70},
                         {x: 40, y: 90},
                         {x: 60, y: 90},
                         {x: 60, y: 70}
                       ]}
                     />
            <XAxis />
            <YAxis />
            <MarkSeries
            onValueMouseOver={this._rememberValue}
            onValueMouseOut={this._forgetValue}
            color={'black'}
            data={[{x: 70, y: 120}]}
            />
            {value ? (
          <Hint value={value}>
            <div className="rv-hint__content">
              {`(${value.x}, ${value.y})`}
              <br />
              {`blood pressure`}
            </div>
          </Hint>
        ) : null}
        </XYPlot>
        );
      }
    }

export default BloodChart;
