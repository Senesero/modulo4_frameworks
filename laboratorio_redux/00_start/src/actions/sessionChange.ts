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

export const updateTotalElements = (totalPage: number) => ({
  type: actionsEnums.UPDATE_TOTAL_ELEMENTS,
  payload: totalPage,
})

export const updateCurrentPage = (newCurrentPage: number) => ({
  type: actionsEnums.UPDATE_CURRENT_PAGE,
  payload: newCurrentPage,
})


export const updatePerPage = (newPerPage: number) => ({
  type: actionsEnums.UPDATE_PERPAGE,
  payload: newPerPage,
})

export const updateLastSearch = (lastSearch: string) => ({
  type: actionsEnums.UPDATE_LOADING_DATA,
  payload: lastSearch,
})




