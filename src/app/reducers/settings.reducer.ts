import * as settingsActions from '../actions/settings.actions';
import { Settings } from '../models/Settings';

export interface SettingsState extends Settings{};

const initialState: SettingsState = {
  budget: 1000,
  updatedAt: new Date()
}

export function settingsReducer(state = initialState, action: settingsActions.SettingsActionType): SettingsState {
  switch (action.type) {
    case settingsActions.UPDATE_BUDGET: {
      return {
        ...state,
        budget: action.payload,
        updatedAt: new Date()
      };
    }
    default: {
      return state;
    }
  }

}
