import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { expenseCategoryReducer, ExpenseCategoryState } from './expense-category.reducer';
import { expenseReducer, ExpenseState } from './expense.reducer';
import { settingsReducer, SettingsState } from './settings.reducer';

export interface State {
  Settings: any;
  expenses: ExpenseState;
  expenseCategories: ExpenseCategoryState;
  settings: SettingsState;
}

export const reducers: ActionReducerMap<State> = {
  expenses: expenseReducer,
  expenseCategories: expenseCategoryReducer,
  settings: settingsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
