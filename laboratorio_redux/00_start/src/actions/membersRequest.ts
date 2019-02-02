import { actionsEnums } from '../common/actionsEnums';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model/member';

export const membersRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBERS_REQUEST_COMPLETED,
    payload: members
  }
}

export const membersRequest = (organization: string) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(organization);

  promise.then(
    (data) => dispatcher(membersRequestCompleted(data))
  );

  return promise;
}
