import { Action } from '@ngrx/store';
import { ExpenseCategory } from '../models/ExpenseCategory';

export const ADD_EXPENSE_CATEGORY = '[EXPENSE_CATEGORY] ADD_EXPENSE_CATEGORY';
export const REMOVE_EXPENSE_CATEGORY = '[EXPENSE_CATEGORY] REMOVE_EXPENSE_CATEGORY';

export class AddExpenseCategoryAction implements Action {
  readonly type = ADD_EXPENSE_CATEGORY;
  constructor(public payload: ExpenseCategory) { }
}

export class RemoveExpenseCategoryAction implements Action {
  readonly type = REMOVE_EXPENSE_CATEGORY;
  constructor(public payload: string) { }
}
export type ExpenseCategoryActionType =
AddExpenseCategoryAction |
RemoveExpenseCategoryAction;
