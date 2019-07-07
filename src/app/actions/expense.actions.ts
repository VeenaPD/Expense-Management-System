import { Action } from '@ngrx/store';

import { Expense } from '../models/Expense';

export const ADD_EXPENSE_ACTION = '[EXPENSE] ADD_EXPENSE_ACTION';
export const TOGGLE_EXPENSE_ACTION = '[EXPENSE] TOGGLE_EXPENSE_ACTION';
export const UPDATE_EXPENSE_ACTION = '[EXPENSE] UPDATE_EXPENSE_ACTION';

export class AddExpenseAction implements Action {
  readonly type = ADD_EXPENSE_ACTION;
  constructor(public payload: Expense){ }
}
export class ToggleExpenseAction implements Action {
  readonly type = TOGGLE_EXPENSE_ACTION;
  constructor(public payload: string){ }
}
export class UpdateExpenseAction implements Action {
  readonly type = UPDATE_EXPENSE_ACTION;
  constructor(public payload: Expense){ }
}

export type ExpenseActions =
AddExpenseAction |
ToggleExpenseAction |
UpdateExpenseAction;
