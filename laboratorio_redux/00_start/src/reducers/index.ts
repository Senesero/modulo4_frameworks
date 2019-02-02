import { combineReducers} from 'redux';
import { membersReducer, membersState } from './membersReducer';
import { sessionProfileReducer, sessionState } from './session';
import { routerReducer } from 'react-router-redux'

export interface State {  
  membersReducer : membersState;
  sessionProfileReducer: sessionState;
};

export const reducers = combineReducers({
  membersReducer,
  sessionProfileReducer,
  routing: routerReducer
});
