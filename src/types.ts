export type UserType = {
  avatar_url?: string;
  name?: string;
  login?: string;
  followers?: number;
  following?: number;
  public_repos?: string;
  created_at: string;
  html_url?: string;
};

export type RepoType = {
  html_url: string;
  full_name: string;
  language: string;
  forks: number;
  stargazers_count: number;
  name: string;
};

export type EventsType = {
  actor: {
    avatar_url: string;
    login: string;
  };
  type: string;
  created_at: number;
  repo: {
    name: string;
  };
};
