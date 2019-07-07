import { groupBy } from 'lodash';

import { createSelector } from '@ngrx/store';

import { ExpenseByCategory } from '../models/ExpenseByCategory';
import { State } from '../reducers';
import { expenseEntityAdapter } from '../reducers/expense.reducer';

export const expensesSelector = (state: State) => state.expenses;

const selectAllExpenses = expenseEntityAdapter.getSelectors().selectAll;
export const getAllExpensesSelector = createSelector(expensesSelector, selectAllExpenses);

export const getAllExpensesNotDeleted = createSelector(getAllExpensesSelector, (expenses) => {
  return expenses.filter(exp => !exp.isDeleted)
});

export const getTotalExpenses = createSelector(getAllExpensesNotDeleted, (expenses) => {
  return expenses.reduce((total,expense) => {
    return expense.amount + total;
  }, 0);
});

export const getExpenseById = (id) => createSelector(expensesSelector,state => state.entities[id])

export const getExpensesByCategory = createSelector(getAllExpensesNotDeleted, (expenses) => {
  let expensesGroupedByCategory = groupBy(expenses, (e) => e.category.id);
  let result: ExpenseByCategory[] = [];
  for(let group in expensesGroupedByCategory){
    let expensesGroup = expensesGroupedByCategory[group];
    let totalValue = expensesGroup.reduce((total,exp) => exp.amount + total, 0)
    let item: ExpenseByCategory = {
      category: expensesGroup[0].category,
      total: totalValue
    }
    result.push(item);
  }
  return result;
});
