import { MemberEntity } from '../api/model';
import { actionDefs } from '../const';

export interface MemberListState {
    memberList: MemberEntity[];
}

interface BaseAction {
    type: string;
    payload: any;
}

const createDefaultState = () => ({
    memberList: [],
});

export const memberListReducer = (state: MemberListState = createDefaultState(), action: BaseAction): MemberListState => {
    switch (action.type) {
        case actionDefs.FETCH_MEMBERS_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
    }

    return state;
}

const handleFetchMembersCompleted = (state: MemberListState, memberList: MemberEntity[]): MemberListState => ({
    ...state,
    memberList,
});
