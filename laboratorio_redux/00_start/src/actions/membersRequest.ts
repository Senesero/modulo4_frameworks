import { actionsEnums } from '../common/actionsEnums';
import { memberAPI } from '../api/member';
import { MemberEntity, } from '../model/member';
import { updateTotalElements } from './sessionChange';

export const membersRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBERS_REQUEST_COMPLETED,
    payload: members
  }
}

export const clearMembers = () => {
  return {
    type: actionsEnums.MEMBERS_REQUEST_COMPLETED,
    payload: []
  }
}

export const membersRequest = (organization: string, currentPage: number, perPage: number) => (dispatcher) => {
  let promise = memberAPI.getNumMembers(organization);

  promise.then(
    (data) => {
      dispatcher(updateTotalElements(data.length))
    }
  );

  promise = memberAPI.getAllMembers(organization, currentPage, perPage);

  promise.then(
    (data) => {
      console.log(data)
      dispatcher(membersRequestCompleted(data))
    }
  ).catch((error) => { dispatcher(clearMembers()) });

  return promise;
}
