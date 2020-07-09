import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { GanttChartComponent } from './charts/gantt-chart/gantt-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DonutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    GanttChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
