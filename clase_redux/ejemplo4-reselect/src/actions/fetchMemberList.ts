import { MemberEntity } from '../api/model';
import { actionDefs } from '../const';
import { fetchMemberList } from '../api';

export const fetchMemberListRequestStart = () => (dispatcher) => {
    const promise = fetchMemberList();

    promise.then((memberList) => {
        dispatcher(fetchMemberListCompleted(memberList))
    })
}

const fetchMemberListCompleted = (memberList: MemberEntity[]) => ({
    type: actionDefs.FETCH_MEMBERS_COMPLETED,
    payload: memberList,
})
