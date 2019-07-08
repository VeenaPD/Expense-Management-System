import { v4 } from 'uuid';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    AddExpenseCategoryAction, RemoveExpenseCategoryAction
} from '../actions/expense-category.actions';
import { ExpenseCategory } from '../models/ExpenseCategory';
import { State } from '../reducers';
import { getAllExpenseCategoriesNotDeleted, selectAllExpenseCategorySelector, getExpenseCategoryById } from '../selectors/expense-category.selector';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  constructor(public store: Store<State>) { }
  /**
   * Add new expense category, by dispatching AddExpenseCategoryAction
   * @param name expenseCategoryName  
   */
  addExpenseCategory(name){
    let category: ExpenseCategory = {
      name,
      isDeleted: false,
      id: v4()
    }
    this.store.dispatch(new AddExpenseCategoryAction(category));
  }
  /**
   * Remove expense category, by dispatching RemoveExpenseCategoryAction
   * @param id expenseCategoryId 
   */
  removeExpenseCategory(id) {
    this.store.dispatch(new RemoveExpenseCategoryAction(id));
  }
  /**
   * Get all expense categories, by using selector selectAllExpenseCategorySelector
   */
  getAllExpenseCategories(){
    return this.store.select(selectAllExpenseCategorySelector);
  }
  /**
   * Get all expense categories not deleted by user, using selector getAllExpenseCategoriesNotDeleted
   */
  getAllExpenseCategoriesNotDeleted(){
    return this.store.select(getAllExpenseCategoriesNotDeleted);
  }
   /**
   * fetch expense category by id, using selector getExpenseCategoryById 
   * @param id expenseCategoryId
   */
  getExpenseCategoryById(id:string){
    return this.store.select(getExpenseCategoryById(id))
  }
}
