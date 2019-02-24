export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  name: '',
  company: '',
  blog: '',
  location: '',
  bio: ''
});