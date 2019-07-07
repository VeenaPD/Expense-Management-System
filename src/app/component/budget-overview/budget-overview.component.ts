import { Component, OnInit, Input } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss']
})
export class BudgetOverviewComponent implements OnInit {
  @Input('budget') budget:number;
  @Input('expenses') expenses:number;
  public budgetChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      dataLabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  budgetChartData: number[] = [];
  budgetChartType: ChartType = 'pie';
  budgetChartLegend = false;
  budgetChartPlugins = [pluginDataLabels];
  budgetChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];
  lables = ['Expenses','Remaining Budget'];
  constructor() { }
  ngOnChanges(): void {
    this.onChanged();
  }
  ngOnInit() {
    this.onChanged();
  }


  private onChanged() {
    this.budgetChartData = [this.expenses, this.budget - this.expenses];
  }
}
