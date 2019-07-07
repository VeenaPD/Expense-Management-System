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

  ngOnInit() {
    this.getCurrentBudget().subscribe(b => {
      this.budget = b;
    })
  }

  getExpenseCategories(){
    return this.expenseCatService.getAllExpenseCategories()
  }
  getCurrentBudget(){
    return this.settingsService.getTotalBudget()
  }
  addExpenseCategory(name:string){
    this.expenseCatService.addExpenseCategory(name);
  }
  removeExpenseCategory(id:string){
    this.expenseCatService.removeExpenseCategory(id);
  }
  onUpdateBudget(){
    console.log(this.budget);
    this.settingsService.updateBudget(parseInt(this.budget));
  }
  onAddExpenseCategory(){
    console.log(this.newCategoryName);
    this.expenseCatService.addExpenseCategory(this.newCategoryName);
    this.newCategoryName = '';
  }
  onRemoveExpenseCategory(id:string){
    this.expenseCatService.removeExpenseCategory(id);
  }
}
