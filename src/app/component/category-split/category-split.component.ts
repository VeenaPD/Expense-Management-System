import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ExpenseByCategory } from 'src/app/models/ExpenseByCategory';
import {getRandomColor} from '../../models/RandomColor'
@Component({
  selector: 'app-category-split',
  templateUrl: './category-split.component.html',
  styleUrls: ['./category-split.component.scss']
})
export class CategorySplitComponent implements OnInit {
  @Input('data') data:ExpenseByCategory[]
  isDataPresent:boolean;
   categorySplitChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right'
    },
    plugins: {
      dataLabels: {
        formatter: (value, ctx) => {
          const label = this.labels[ctx.dataIndex];
          console.log(ctx.dataIndex);
          return label;
        }
      }
    }
  };
   categorySplitChartData: number[] = [100];
   categorySplitChartType: ChartType = 'pie';
   categorySplitChartLegend = true;
   categorySplitChartPlugins = [pluginDataLabels];
   categorySplitChartColors = [
    {
      backgroundColor: [],
    },
  ];
  constructor() { }
  labels = [];
  ngOnInit() {
    console.log(this.data);
    this.setUpPieChart();
  }
  ngOnChanges(): void {
    this.setUpPieChart();
  }
  setUpPieChart(){
    if(this.data.length  === 0){
      this.isDataPresent = false;
      return;
    }
    this.isDataPresent = true;

    this.labels = [];
    this.categorySplitChartData = [];
    let colors = [{backgroundColor:[]}];
    this.data.forEach(ec => {
      this.labels.push(ec.category.name);
      this.categorySplitChartData.push(ec.total);
      colors[0].backgroundColor.push(getRandomColor());
    })
    this.categorySplitChartColors = colors;
  }

}
