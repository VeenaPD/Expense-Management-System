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
  /**
   * Fetch all user expenses using getAllExpenseSelector 
   */
  getAllExpenses() {
    return this.store.select(getAllExpensesSelector);
  }
  /**
   * Fetch all user expenses group by category using getExpenseByCategory selector 
   */
  getAllExpensesGroupByCategory(){
    return this.store.select(getExpensesByCategory)
  }
  /**
  * Fetch total expenses, using getTotalExpenses selector
   */
  getTotalExpenses(){
    return this.store.select(getTotalExpenses);
  }
  /**
   * Add expense method, addExpenseAction is dispatched
   * @params title, amount, category, date
   */
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
    /**
   * Update expense method, updateExpenseAction is dispatched
   * @param e Expense 
   */
  updateExpense(e: Expense) {
    let updateExpenseAction = new UpdateExpenseAction(e);
    this.store.dispatch(updateExpenseAction);
  }
  /**
   * Toggle expense method toggles expense state, removeExpenseAction is dispatched
   * @param exp string
   */
  toggleExpense(exp: string){
    let removeExpenseAction = new ToggleExpenseAction(exp);
    this.store.dispatch(removeExpenseAction);
  }
  /**
   * Fetch expense by Id using getExpenseById selector
   * @param id expenseId
   */
  getExpenseById(id:string){
    return this.store.select(getExpenseById(id))
  }

}
