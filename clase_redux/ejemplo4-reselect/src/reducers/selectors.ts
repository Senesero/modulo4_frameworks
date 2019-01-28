import { createSelector } from 'reselect';
import { State } from '.';
import { MemberListState, memberListReducer } from './memberListReducer';

export const getMemberListReducer =
    (state: State) => state.memberListReducer;

export const getMemberList = createSelector(
    getMemberListReducer,
    (memberListReducer) => memberListReducer.memberList
);