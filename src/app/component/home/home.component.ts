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

  expenseList: Expense[] = [];

  constructor(public expenseService: ExpenseService,public expenseCat:ExpenseCategoryService,public settingsService:SettingsService) { }

  ngOnInit() {
        
  }
  /**
   * Fetch list of all expenses
   */
  getAllExpenses(){
    return this.expenseService.getAllExpenses();
  }
  /**
   * Fetch current budget
   */
  getCurrentBudget(){
    return this.settingsService.getTotalBudget();
  }
  /**
   * Get total expenses
   */
  getTotalExpenses(){
    return this.expenseService.getTotalExpenses();
  }
  /**
   * Fetch all expenses group by category
   */
  getExpenseCategorised(){
    return this.expenseService.getAllExpensesGroupByCategory();
  }

}
