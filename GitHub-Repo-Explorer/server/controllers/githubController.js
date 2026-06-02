const cache = require("../cache/githubCache");

const {
  getUser,
  getRepos,
} = require("../services/githubService");

exports.fetchGithubData = async (req, res) => {
  const { username } = req.params;

  const cached = cache.get(username);

  if (cached) {
    return res.json(cached);
  }

  try {
    const user = await getUser(username);
    const repos = await getRepos(username);

    const response = {
      user,
      repos,
    };

    cache.set(username, response);

    res.json(response);
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (err.response?.status === 403) {
      return res.status(403).json({
        message: "GitHub rate limit exceeded",
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};