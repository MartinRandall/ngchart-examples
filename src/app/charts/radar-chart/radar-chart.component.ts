import {Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
  radarChartData: Chart.ChartDataSets[] = [
    {
      data: [120, 130, 180, 70, 110],
      label: '2017'
    },
    {
      data: [90, 150, 200, 45, 120],
      label: '2018'
    }
  ];
  radarChartType: Chart.ChartType = 'radar';

}
