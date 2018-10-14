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
      <stop offset="0%" stopColor="#fb3d32"/>
      <stop offset="50%" stopColor="#ffdc39"/>
      <stop offset="100%" stopColor="#3ab451" />
    </linearGradient>},
        {color:<linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#fb3d32"/>
        <stop offset="33%" stopColor="#fb3d32"/>
        <stop offset="33%" stopColor="#ffdc39" />
        <stop offset="66%" stopColor="#ffdc39"/>
        <stop offset="66%" stopColor="#fb3d32"/>
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
