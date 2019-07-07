import { v4 } from 'uuid';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    AddExpenseAction, ToggleExpenseAction, UpdateExpenseAction
} from '../actions/expense.actions';
import { Expense } from '../models/Expense';
import { ExpenseCategory } from '../models/ExpenseCategory';
import { State } from '../reducers';
import {
    getAllExpensesNotDeleted, getExpensesByCategory, getTotalExpenses, getExpenseById, getAllExpensesSelector
} from '../selectors/expense.selector';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private store: Store<State>) { }

  getAllExpenses() {
    return this.store.select(getAllExpensesSelector);
  }
  getAllExpensesGroupByCategory(){
    return this.store.select(getExpensesByCategory)
  }
  getTotalExpenses(){
    return this.store.select(getTotalExpenses);
  }
  addExpense(title: string, amount: number, category: ExpenseCategory, date: Date = new Date()) {
    let e: Expense = {
      title,
      amount,
      category,
      date,
      isDeleted: false,
      id: v4()
    }
    let addExpenseAction = new AddExpenseAction(e);
    this.store.dispatch(addExpenseAction);
  }
  updateExpense(e: Expense) {
    let updateExpenseAction = new UpdateExpenseAction(e);
    this.store.dispatch(updateExpenseAction);
  }
  toggleExpense(exp: string){
    let removeExpenseAction = new ToggleExpenseAction(exp);
    this.store.dispatch(removeExpenseAction);
  }
  getExpenseById(id:string){
    return this.store.select(getExpenseById(id))
  }

}
