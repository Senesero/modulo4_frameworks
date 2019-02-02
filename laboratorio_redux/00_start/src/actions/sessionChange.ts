import { actionsEnums } from '../common/actionsEnums'
import { MemberEntity } from '../model/member';

export const updateOrganization = (newOrganization: string) => ({
  type: actionsEnums.UPDATE_ORGANIZATION,
  payload: newOrganization,
});

export const updateMember = (newMember: MemberEntity) => ({
  type: actionsEnums.UPDATE_MEMBER,
  payload: newMember,
})


