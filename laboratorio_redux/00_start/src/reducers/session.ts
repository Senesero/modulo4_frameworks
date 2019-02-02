import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';

export interface sessionState {
  organization: string;
  member: MemberEntity;
}

const defaultSessionState = (): sessionState => ({
  organization: 'lemoncode',
  member: {
    id: 1,
    login: 'login',
  }
})

export const sessionProfileReducer = (state = defaultSessionState(), action): sessionState => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION:
      return handleOrganizationProfileAction(state, action.payload);
    case actionsEnums.UPDATE_MEMBER:
      return handleMemberProfileAction(state, action.payload);
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
