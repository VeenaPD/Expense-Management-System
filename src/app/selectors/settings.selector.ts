import { createSelector } from '@ngrx/store';

import { State } from '../reducers';

export const settingsSelector = (state: State) => state.Settings;
export const getTotalBudgetSelector = createSelector(settingsSelector, (s) => s.budget);
