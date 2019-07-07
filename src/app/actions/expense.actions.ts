import { Action } from '@ngrx/store';

export enum ExpenseActionTypes {
  LoadExpenses = '[Expense] Load Expenses',
  
  
}

export class LoadExpenses implements Action {
  readonly type = ExpenseActionTypes.LoadExpenses;
}


export type ExpenseActions = LoadExpenses;
