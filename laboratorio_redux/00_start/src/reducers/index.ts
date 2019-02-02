import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { sessionProfileReducer, sessionState } from './session';
import { routerReducer } from 'react-router-redux'

export interface State {  
  memberReducer : memberState;
  sessionProfileReducer: sessionState;
};

export const reducers = combineReducers({
  memberReducer,
  sessionProfileReducer,
  routing: routerReducer
});
