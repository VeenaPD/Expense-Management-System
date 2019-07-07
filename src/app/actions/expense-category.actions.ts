import { Action } from '@ngrx/store';

export enum ExpenseCategoryActionTypes {
  LoadExpenseCategorys = '[ExpenseCategory] Load ExpenseCategorys',
  
  
}

export class LoadExpenseCategorys implements Action {
  readonly type = ExpenseCategoryActionTypes.LoadExpenseCategorys;
}


export type ExpenseCategoryActions = LoadExpenseCategorys;
