import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/Expense';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import {take} from 'rxjs/operators'
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expenseList: Expense[];

  constructor(public expenseService: ExpenseService,public expenseCat:ExpenseCategoryService,public settingsService:SettingsService) { }

  ngOnInit() {
        
  }
  getAllExpenses(){
    return this.expenseService.getAllExpenses();
  }
  getCurrentBudget(){
    return this.settingsService.getTotalBudget();
  }
  getTotalExpenses(){
    return this.expenseService.getTotalExpenses();
  }
  getExpenseCategorised(){
    return this.expenseService.getAllExpensesGroupByCategory();
  }

}
