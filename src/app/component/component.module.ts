import { NgModule } from '@angular/core';
import { ExpenseDetailsComponent } from './expenses/expense-details.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { CategorySplitComponent } from './category-split/category-split.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/public_api';
import { SettingsComponent } from './settings/settings.component';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from '../app-routing.module';

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
    AppRoutingModule
  ]
})
export class ComponentModule {}
