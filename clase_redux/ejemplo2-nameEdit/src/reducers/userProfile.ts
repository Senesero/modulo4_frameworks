import { actionsEnums } from '../common/actionsEnums';

export interface UserProfileState {
    firstname: string;
}

const defaultUserState = (): UserProfileState => ({
    firstname: 'John Doe',
})

export const userProfileReducer = (state = defaultUserState(), action): UserProfileState => {
    switch (action.type) {
        case actionsEnums.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action.payload);
    }
    return state;
}

const handleUserProfileAction = (state: UserProfileState, firstname: string): UserProfileState => ({
    ...state,
    firstname: firstname,
})