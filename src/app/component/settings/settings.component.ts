import { Component, OnInit, Input } from '@angular/core';
import { ExpenseCategory } from 'src/app/models/ExpenseCategory';
import { SettingsService } from 'src/app/services/settings.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  budget;
  newCategoryName:string = '';
  constructor(public expenseCatService:ExpenseCategoryService,public settingsService:SettingsService,public expenseService:ExpenseService) { }
  /**
   * onInit subscribes for current budget
   */
  ngOnInit() {
    this.getCurrentBudget().subscribe(b => {
      this.budget = b;
    })
  }
  /**
   * Fetch all expense categories
   */
  getExpenseCategories(){
    return this.expenseCatService.getAllExpenseCategories()
  }
  /**
   * Fetch current budget
   */
  getCurrentBudget(){
    return this.settingsService.getTotalBudget()
  }
  /**
   * Adds expense category
   * @param name
   */
  addExpenseCategory(name:string){
    this.expenseCatService.addExpenseCategory(name);
  }
  /**
   * Removes expense category
   * @param id expenseId
   */
  removeExpenseCategory(id:string){
    this.expenseCatService.removeExpenseCategory(id);
  }
  /**
   * Update budget value
   */
  onUpdateBudget(){
    console.log(this.budget);
    this.settingsService.updateBudget(parseInt(this.budget));
  }
  /**
   * Add new expense category
   */
  onAddExpenseCategory(){
    console.log(this.newCategoryName);
    this.expenseCatService.addExpenseCategory(this.newCategoryName);
    this.newCategoryName = '';
  }
  /**
   * Remove expense category
   * @param id  expenseCategoryId
   */
  onRemoveExpenseCategory(id:string){
    this.expenseCatService.removeExpenseCategory(id);
  }
}
