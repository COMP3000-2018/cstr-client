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
          <XYPlot
          xDomain={[85, 100]} yDomain={[-1, 1]} width={600} height={200}
          >
          <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="red" stopOpacity={0.7} />
            <stop offset="100%" stopColor="green" stopOpacity={0.8} />
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
