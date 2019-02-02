import { actionsEnums } from '../common/actionsEnums';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const memberRequest = (organization: string) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(organization);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}
