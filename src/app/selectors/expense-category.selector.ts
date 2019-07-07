import { createSelector } from '@ngrx/store';

import { State } from '../reducers';
import { expenseCategoryAdapter } from '../reducers/expense-category.reducer';

export const expenseCategorySelector = (s: State) => s.expenseCategories;
const selectAllExpenseCategorySelector = createSelector(expenseCategorySelector,expenseCategoryAdapter.getSelectors().selectAll);

export const getAllExpenseCategoriesNotDeleted = createSelector(
  selectAllExpenseCategorySelector,
  categories => {
    return categories.filter(e => !e.isDeleted);
  }
);
