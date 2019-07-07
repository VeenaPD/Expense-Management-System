import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { expenseCategoryReducer, ExpenseCategoryState } from './expense-category.reducer';
import { expenseReducer, ExpenseState } from './expense.reducer';
import { settingsReducer, SettingsState } from './settings.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({keys: ['expenses','expenseCategories','settings'],rehydrate:true})(reducer);
}
export interface State {
  expenses: ExpenseState;
  expenseCategories: ExpenseCategoryState;
  settings: SettingsState;
}

export const reducers: ActionReducerMap<State> = {
  expenses: expenseReducer,
  expenseCategories: expenseCategoryReducer,
  settings: settingsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
