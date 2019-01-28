import * as apiModel from '../../api/model';
import * as vm from './viewModel';

const mapMemberFromMdelToVm = (member: apiModel.MemberEntity): vm.MemberEntity => (
    {
        id: member.id,
        avatarUrl: member.avatar_url,
        name: member.login,
    }
)

export const mapMemberListFromMdelToVm = (memberList: apiModel.MemberEntity[]): vm.MemberEntity[] => (
    // memberList.map((member) => mapMemberFromMdelToVm(member))
    memberList.map(mapMemberFromMdelToVm)
)