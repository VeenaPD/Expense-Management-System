import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';

import * as expenseCategoryActions from '../actions/expense-category.actions';
import { ExpenseCategory } from '../models/ExpenseCategory';

export interface ExpenseCategoryState extends EntityState<ExpenseCategory> {};

export const expenseCategoryAdapter = createEntityAdapter<ExpenseCategory> ({
  selectId: (e) => {
    return e.id
  }
})
const initialState: ExpenseCategoryState = expenseCategoryAdapter.getInitialState({});

export function expenseCategoryReducer(state = initialState, action: expenseCategoryActions.ExpenseCategoryActionType): ExpenseCategoryState {
  switch(action.type){
    case expenseCategoryActions.ADD_EXPENSE_CATEGORY: {
      return expenseCategoryAdapter.addOne(action.payload, {...state})
    }
    case expenseCategoryActions.REMOVE_EXPENSE_CATEGORY: {
      let cat = state.entities[action.payload];
      let update: Update<ExpenseCategory> = {
        id: action.payload,
        changes: {isDeleted:!cat.isDeleted }
      }
      return expenseCategoryAdapter.updateOne(update,{...state})
    }
    default: {
      return state;
    }
  }
}
