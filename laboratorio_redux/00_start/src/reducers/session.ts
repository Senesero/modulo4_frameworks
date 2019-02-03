import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';

export interface sessionState {
  organization: string;
  member: MemberEntity;
  currentPage: number;
  perPage: number;
  totalElements: number;
  lastSearch: string;
}

const defaultSessionState = (): sessionState => ({
  organization: 'lemoncode',
  member: {
    id: 1,
    login: 'login',
  },
  currentPage: 1,
  perPage: 5,
  totalElements: 0,
  lastSearch: 'lemoncode',
})

export const sessionProfileReducer = (state = defaultSessionState(), action): sessionState => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION:
      return handleOrganizationProfileAction(state, action.payload);
    case actionsEnums.UPDATE_MEMBER:
      return handleMemberProfileAction(state, action.payload);
    case actionsEnums.UPDATE_CURRENT_PAGE:
      return handleCurrentPageProfileAction(state, action.payload);
    case actionsEnums.UPDATE_PERPAGE:
      return handlePerPageProfileAction(state, action.payload);
    case actionsEnums.UPDATE_TOTAL_ELEMENTS:
      return handleTotalPageProfileAction(state, action.payload);
    case actionsEnums.UPDATE_LOADING_DATA:
      return handleLastSearchProfileAction(state, action.payload);
  }

  return state;
}

const handleOrganizationProfileAction = (state: sessionState, organization: string): sessionState => ({
  ...state,
  organization: organization,
})

const handleMemberProfileAction = (state: sessionState, member: MemberEntity): sessionState => ({
  ...state,
  member: member,
})

const handleCurrentPageProfileAction = (state: sessionState, currentPage: number): sessionState => ({
  ...state,
  currentPage: currentPage,
})

const handlePerPageProfileAction = (state: sessionState, perPage: number): sessionState => ({
  ...state,
  perPage: perPage,
})

const handleTotalPageProfileAction = (state: sessionState, totalElements: number): sessionState => ({
  ...state,
  totalElements: totalElements
})

const handleLastSearchProfileAction = (state: sessionState, lastSearch: string): sessionState => ({
  ...state,
  lastSearch: lastSearch
})
