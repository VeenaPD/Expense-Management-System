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

  getTotalBudget(){
    return this.store.select(getTotalBudgetSelector)
  }
  updateBudget(newBudget){
    this.store.dispatch(new UpdateBudgetAction(newBudget));
  }
}
