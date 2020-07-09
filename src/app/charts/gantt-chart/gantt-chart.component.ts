import {Component} from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss']
})
export class GanttChartComponent  {

  scatterChartData: Chart.ChartDataSets[] =  [
    {
      backgroundColor: 'rgba(246,156,85,1)',
      borderColor: 'rgba(246,156,85,1)',
      fill: false,
      borderWidth : 15,
      pointRadius : 0,
      data: [
        {
          t: moment(),
          y: 'Req, Plan &  Setup'
        }, {
          t: moment().add(2, 'days'),
          y: 'Req, Plan &  Setup'
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
          t: moment().add(2, 'days'),
          y: 'Test Certify'
        }, {
          t: moment().add(5, 'days'),
          y: 'Test Certify'
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
          t: moment().add(5, 'days'),
          y: 'Req, Plan &  Setup'
        }, {
          t: moment().add(6, 'days'),
          y: 'Req, Plan &  Setup'
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
          t: moment().add(6, 'days'),
          y: 'Implementation'
        }, {
          t: moment().add(10, 'days'),
          y: 'Implementation'
        }
      ]
    }
  ];


  scatterChartLabels = ['Req, Plan &  Setup', 'Test Certify', 'Implementation', 'Validation', 'Approval'];
  scatterChartType: Chart.ChartType = 'line';
  scatterChartOptions: Chart.ChartOptions = {
    scales: {
      xAxes: [{
        type: 'time',
        position: 'bottom',

        time: {
          unit: 'day',
          min: moment().toISOString(),
          max: moment().add(10, 'days').toISOString(),
        },
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
