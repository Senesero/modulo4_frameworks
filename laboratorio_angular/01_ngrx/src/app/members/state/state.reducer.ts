import * as fromRoot from '../../state/app.state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface MembersState {
    organization: string;
}

export interface State extends fromRoot.State {
    members: MembersState;
}

const initialState: MembersState = {
    organization: 'Lemoncode',
};

const getMembersFeatureState = createFeatureSelector<MembersState>('members');

export const getOrganization = createSelector(
    getMembersFeatureState,
    (state) => state.organization
);

export const reducer = (state: MembersState = initialState, action): MembersState => {
    switch (action.type) {
        case 'ORGANIZATION_CODE':
            return {
                ...state,
                organization: action.payload
            };
        default:
            return state;
    }
};
