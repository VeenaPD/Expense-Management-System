import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';

import * as expenseActions from '../actions/expense.actions';
import { Expense } from '../models/Expense';

export interface ExpenseState extends EntityState<Expense> {};

export const expenseEntityAdapter = createEntityAdapter<Expense>({
  selectId:(e) => {
    return e.id
  },
  sortComparer:(e1,e2) => {
    return e1.date.getMilliseconds() - e2.date.getMilliseconds()
  }
})
const initialState: ExpenseState = expenseEntityAdapter.getInitialState();

export function expenseReducer(state = initialState, action: expenseActions.ExpenseActionType): ExpenseState{
  switch(action.type) {
    case expenseActions.ADD_EXPENSE_ACTION: {
      let exp = state.entities[action.payload];
      let update: Update<Expense> = {
        id: exp.id,
        changes:{isDeleted:!exp.isDeleted}
      }
      return expenseEntityAdapter.updateMany([update],{...state})
    }
    case expenseActions.UPDATE_EXPENSE_ACTION: {
      let update: Update<Expense> = {
        id: action.payload.id,
        changes: {...action.payload}
      }
      return expenseEntityAdapter.updateOne(update, {...state})
    }
    default: {
      return state;
    }
  }

}
