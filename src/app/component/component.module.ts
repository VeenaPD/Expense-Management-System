import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from '../app-routing.module';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { CategorySplitComponent } from './category-split/category-split.component';
import { ExpenseDetailsComponent } from './expenses/expense-details.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import {MomentModule} from 'ngx-moment'

@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseDetailsComponent,
    HomeComponent,
    BudgetOverviewComponent,
    CategorySplitComponent,
    SettingsComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    NgxDatatableModule,
    AppRoutingModule,
    MomentModule
  ]
})
export class ComponentModule {}
