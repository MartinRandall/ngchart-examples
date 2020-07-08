import {Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  pieChartData: Chart.ChartDataSets[] = [
    {
      data: [120, 150, 180, 90]
    }
  ];
  pieChartType: Chart.ChartType  = 'pie';
}
