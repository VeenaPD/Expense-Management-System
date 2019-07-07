import { createSelector } from '@ngrx/store';

import { State } from '../reducers';

export const settingsSelector = (state: State) => state.settings;
export const getTotalBudgetSelector = createSelector(settingsSelector, (s) => s.budget);
