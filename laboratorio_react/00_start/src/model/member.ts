export interface MemberEntity {
  id?: number;
  login?: string;
  avatar_url?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: '',
  avatar_url: '',
  name: '',
  company: '',
  blog: '',
  location: '',
  bio: ''
});
