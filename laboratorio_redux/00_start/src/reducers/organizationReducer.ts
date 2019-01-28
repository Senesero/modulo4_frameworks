import { actionsEnums } from '../common/actionsEnums';

export interface organizationState {
  organization: string;
}

const defaultOrganizationState = (): organizationState => ({
  organization: 'lemoncode',
})

export const organizationProfileReducer = (state = defaultOrganizationState(), action): organizationState => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION:
      return handleOrganizationProfileAction(state, action.payload);
  }
  return state;
}

const handleOrganizationProfileAction = (state: organizationState, organization: string): organizationState => ({
  ...state,
  organization: organization,
})
