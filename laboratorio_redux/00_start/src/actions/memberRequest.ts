import { actionsEnums } from '../common/actionsEnums';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model/member';

export const memberRequestCompleted = (member: MemberEntity) => {
  return {
    type: actionsEnums.UPDATE_MEMBER,
    payload: member
  }
}

export const memberRequest = (member: string) => (dispatcher) => {
  const promise = memberAPI.getMember(member);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}
