import { createSelector } from '@ngrx/store';

import { State } from '../reducers';
import { expenseCategoryAdapter } from '../reducers/expense-category.reducer';
/**
 * 
 * @param s State
 */
export const expenseCategorySelector = (s: State) => s.expenseCategories;


export const selectAllExpenseCategorySelector = createSelector(expenseCategorySelector,expenseCategoryAdapter.getSelectors().selectAll);

export const getAllExpenseCategoriesNotDeleted = createSelector(
  selectAllExpenseCategorySelector,
  categories => {
    return categories.filter(e => !e.isDeleted);
  }
);
export const getExpenseCategoryById = (id:string) => createSelector(expenseCategorySelector,state => state.entities[id]);
