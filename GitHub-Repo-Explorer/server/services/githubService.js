const axios = require("axios");

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
  headers: {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }),
  },
});

// Fetch GitHub user profile

const getUser = async (username) => {
  const response = await githubApi.get(`/users/${username}`);

  return {
    id: response.data.id,
    login: response.data.login,
    name: response.data.name,
    avatar_url: response.data.avatar_url,
    bio: response.data.bio,
    followers: response.data.followers,
    following: response.data.following,
    public_repos: response.data.public_repos,
    html_url: response.data.html_url,
    created_at: response.data.created_at,
  };
};

// Fetch repositories with pagination

const getRepos = async (
  username,
  page = 1,
  perPage = 10
) => {
  const response = await githubApi.get(
    `/users/${username}/repos`,
    {
      params: {
        page,
        per_page: perPage,
        sort: "updated",
      },
    }
  );

  return response.data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    defaultBranch: repo.default_branch,
    updatedAt: repo.updated_at,
    htmlUrl: repo.html_url,
  }));
};

// Fetch language statistics

const getLanguageStats = (repos) => {
  const stats = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    stats[repo.language] =
      (stats[repo.language] || 0) + 1;
  });

  return Object.entries(stats).map(
    ([language, count]) => ({
      language,
      count,
    })
  );
};

// Fetch complete profile data

const getGithubProfile = async (
  username,
  page = 1,
  perPage = 10
) => {
  const [user, repos] = await Promise.all([
    getUser(username),
    getRepos(username, page, perPage),
  ]);

  const languageStats =
    getLanguageStats(repos);

  return {
    user,
    repos,
    languageStats,
    pagination: {
      page,
      perPage,
      totalRepos: user.public_repos,
      hasMore:
        page * perPage < user.public_repos,
    },
  };
};

module.exports = {
  getUser,
  getRepos,
  getLanguageStats,
  getGithubProfile,
};