import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { organizationProfileReducer, organizationState } from './organizationReducer';

export interface State {  
  memberReducer : memberState;
  organizationProfileReducer: organizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  organizationProfileReducer
});
