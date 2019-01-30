import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { organizationProfileReducer, organizationState } from './organizationReducer';
import { routerReducer } from 'react-router-redux'

export interface State {  
  memberReducer : memberState;
  organizationProfileReducer: organizationState;
};

export const reducers = combineReducers({
  memberReducer,
  organizationProfileReducer,
  routing: routerReducer
});
