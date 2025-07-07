export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  homepage: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  private: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`/api/github/repos/${username}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  
  return response.json();
}
