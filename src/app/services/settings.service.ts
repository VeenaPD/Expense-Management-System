import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UpdateBudgetAction } from '../actions/settings.actions';
import { State } from '../reducers';
import { getTotalBudgetSelector } from '../selectors/settings.selector';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(public store: Store<State>) { }
  /**
  Get total budget of user by getTotalBudgetSelector
   */
  getTotalBudget(){
    return this.store.select(getTotalBudgetSelector)
  }
   /**
  Update budget of user by dispatching updateBudgetAction
  @param newBudget number
   */
  updateBudget(newBudget){
    this.store.dispatch(new UpdateBudgetAction(newBudget));
  }
}
