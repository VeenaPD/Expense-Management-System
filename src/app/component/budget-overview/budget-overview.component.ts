import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss']
})
export class BudgetOverviewComponent implements OnInit {

  public budgetChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right'
    },
    plugins: {
      dataLabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public budgetChartData: number[] = [900, 400];
  public budgetChartType: ChartType = 'pie';
  public budgetChartLegend = true;
  public budgetChartPlugins = [pluginDataLabels];
  public budgetChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
