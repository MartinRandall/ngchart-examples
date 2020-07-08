import {Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent {
  scatterChartData: Chart.ChartDataSets[] =  [
    {
      backgroundColor: 'rgba(246,156,85,1)',
      borderColor: 'rgba(246,156,85,1)',
      fill: false,
      borderWidth : 15,
      pointRadius : 0,
      data: [
        {
          x: 0,
          y: 'January'
        }, {
          x: 3,
          y: 'January'
        }
      ]
    },
    {
      backgroundColor: 'rgba(208,255,154,1)',
      borderColor: 'rgba(208,255,154,1)',
      fill: false,
      borderWidth : 15,
      pointRadius : 0,
      data: [
        {
          x: 3,
          y: 'February'
        }, {
          x: 5,
          y: 'February'
        }
      ]
    },
    {
      backgroundColor: 'rgba(246,156,85,1)',
      borderColor: 'rgba(246,156,85,1)',
      fill: false,
      borderWidth : 15,
      pointRadius : 0,
      data: [
        {
          x: 5,
          y: 'January'
        }, {
          x: 10,
          y: 'January'
        }
      ]
    },
    {
      backgroundColor: 'rgba(208,255,154,1)',
      borderColor: 'rgba(208,255,154,1)',
      fill: false,
      borderWidth : 15,
      pointRadius : 0,
      data: [
        {
          x: 10,
          y: 'March'
        }, {
          x: 13,
          y: 'March'
        }
      ]
    }
  ];

  scatterChartLabels = ['January', 'February', 'March'];
  scatterChartType: Chart.ChartType = 'line';
  scatterChartOptions: Chart.ChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        type: 'category',
        position: 'left',
        offset: true
      }]
    },
    legend: {
      display: false
    },
    animation: {
      duration: 0
    }
  };



}
