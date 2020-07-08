import {Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  barChartData: Chart.ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A'
    },
    {
      data: [28, 48, 40, 19, 86, 27, 19],
      label: 'Series B'
    }
  ];
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartOptions: Chart.ChartOptions = {
    showLines: false,
    responsive: true
  };
  barChartLegend = true;
  barChartType: Chart.ChartType = 'bar';
}
