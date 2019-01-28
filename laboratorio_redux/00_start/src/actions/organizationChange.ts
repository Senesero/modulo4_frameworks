import { actionsEnums } from '../common/actionsEnums'

export const updateOrganization = (newOrganization: string) => ({
  type: actionsEnums.UPDATE_ORGANIZATION,
  payload: newOrganization,
});

