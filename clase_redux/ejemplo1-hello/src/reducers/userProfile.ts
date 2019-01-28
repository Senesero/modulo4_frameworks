export interface UserProfileState {
    firstname: string;
}

const defaultUserState = (): UserProfileState => ({
    firstname: 'John Doe',
})

export const userProfileReducer = (state = defaultUserState(), action) : UserProfileState => {
    return state;
}