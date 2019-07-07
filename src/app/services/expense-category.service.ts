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

  addExpenseCategory(name){
    let category: ExpenseCategory = {
      name,
      isDeleted: false,
      id: v4()
    }
    this.store.dispatch(new AddExpenseCategoryAction(category));
  }
  removeExpenseCategory(id) {
    this.store.dispatch(new RemoveExpenseCategoryAction(id));
  }
  getAllExpenseCategories(){
    return this.store.select(selectAllExpenseCategorySelector);
  }
  getAllExpenseCategoriesNotDeleted(){
    return this.store.select(getAllExpenseCategoriesNotDeleted);
  }
  getExpenseCategoryById(id:string){
    return this.store.select(getExpenseCategoryById(id))
  }
}
