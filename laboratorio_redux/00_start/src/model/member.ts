export interface MemberEntity {
  id: number;
  login?: string;
  avatar_url?: string;
  name?: string;
  company?: string;
  location?: string;
  bio?: string;
  blog?: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: '',
  avatar_url: '',
  name: '',
  company: '',
  location: '',
  bio: '',
  blog: '',
});
