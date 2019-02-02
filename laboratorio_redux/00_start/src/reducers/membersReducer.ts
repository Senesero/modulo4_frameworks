import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity} from '../model/member';

export type membersState =  MemberEntity[];

export const membersReducer =  (state : membersState = [], action) => {
  switch (action.type) {
    case actionsEnums.MEMBERS_REQUEST_COMPLETED:
      return handleMembersRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleMembersRequestCompletedAction = (state : membersState, members) => {
  return members;
}
