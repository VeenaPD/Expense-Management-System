import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-category-split',
  templateUrl: './category-split.component.html',
  styleUrls: ['./category-split.component.scss']
})
export class CategorySplitComponent implements OnInit {
  public categorySplitChartOptions: ChartOptions = {
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
  public categorySplitChartData: number[] = [100, 80, 90];
  public categorySplitChartType: ChartType = 'pie';
  public categorySplitChartLegend = true;
  public categorySplitChartPlugins = [pluginDataLabels];
  public categorySplitChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
