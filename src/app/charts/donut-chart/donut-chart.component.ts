import {Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {

  donutChartData: Chart.ChartDataSets[] = [{
    data: [120, 150, 180, 90]
  }];
  donutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  donutChartOptions: Chart.ChartOptions = {
    responsive: true
  };
  donutChartType: Chart.ChartType = 'doughnut';
}
