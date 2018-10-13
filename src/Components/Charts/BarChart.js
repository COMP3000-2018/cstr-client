import React, { Component } from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    HorizontalBarSeries,
    MarkSeries,
    GradientDefs
  } from 'react-vis';

class BarChart extends Component {
  constructor(props){
    super(props)
    this.state = {
      xdom: this.props.x,
      Title: this.props.title,
      choice: this.props.pick,
      vale: this.props.data,
      colours: [{color:<linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
      <stop offset="10%" stopColor="red"/>
      <stop offset="100%" stopColor="green" />
    </linearGradient>},
    {color:<linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
    <stop offset="15%" stopColor="#fb3d32"/>
    <start offset="15%" stopColor="#ffdc39" />
    <stop offset="65%" stopColor="#ffdc39" />
    <start offset="65%" stopColor="#fb3d32" />
    <stop offset="100%" stopColor="#fb3d32"/>
  </linearGradient>}]
    }
  }

      // <div>{Title}</div>
      render() {
        const{xdom, Title,choice,vale, colours} = this.state
        return (
          <XYPlot xDomain={xdom} yDomain={[-1, 1]} width={300} height={80}>
          <GradientDefs>
          {colours[choice].color}
        </GradientDefs>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <HorizontalBarSeries color={'url(#CoolGradient)'} data={[{x: xdom[1], y: 1}]} />
            <MarkSeries
            color={'black'}
            data={[{x: vale, y: 1}]}
            />
          </XYPlot>
        );
      }
    }

export default BarChart;
