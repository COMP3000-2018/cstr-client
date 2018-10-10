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

      render() {
        return (
          <XYPlot xDomain={[85, 100]} yDomain={[-1, 1]} width={300} height={80}>
          <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="25%" stopColor="#fb3d32"/>
            <stop offset="25%" stopColor="#ffdc39" />
            <stop offset="75%" stopColor="#ffdc39"/>
            <stop offset="75%" stopColor="#fb3d32" />
          </linearGradient>
        </GradientDefs>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <HorizontalBarSeries color={'url(#CoolGradient)'} data={[{x: 100, y: 1}]} />
            <MarkSeries
            color={'black'}
            data={[{x: 100, y: 1}]}
            />
          </XYPlot>
        );
      }
    }

export default BarChart;
