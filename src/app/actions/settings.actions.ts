import { Action } from '@ngrx/store';

export const UPDATE_BUDGET = '[SETTINGS] UPDATE_BUDGET';

export class UpdateBudgetAction implements Action {
  readonly type = UPDATE_BUDGET;
  constructor(public payload: number) { }
}
export type SettingsActions = UpdateBudgetAction;
