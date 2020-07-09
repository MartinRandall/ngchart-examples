import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarChartComponent} from './charts/bar-chart/bar-chart.component';
import {DonutChartComponent} from './charts/donut-chart/donut-chart.component';
import {RadarChartComponent} from './charts/radar-chart/radar-chart.component';
import {PieChartComponent} from './charts/pie-chart/pie-chart.component';
import {ScatterChartComponent} from './charts/scatter-chart/scatter-chart.component';
import {GanttChartComponent} from './charts/gantt-chart/gantt-chart.component';


const routes: Routes = [
  {
    path: 'bar-chart',
    component: BarChartComponent
  },
  {
    path: 'donut-chart',
    component: DonutChartComponent
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: 'scatter-chart',
    component: ScatterChartComponent
  },
  {
    path: 'gantt-chart',
    component: GanttChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
