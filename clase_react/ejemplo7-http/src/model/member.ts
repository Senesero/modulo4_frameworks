export interface MemberEntity {
    id: number;
    login: string;
    avatar_url: string;
}

// Patron Factory
export const createEmptyMember = (): MemberEntity => ({
    id: -1,
    login: "",
    avatar_url: ""
});
