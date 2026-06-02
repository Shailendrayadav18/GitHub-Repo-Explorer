const cache = require("../cache/githubCache");

const {
  getGithubProfile,
} = require("../services/githubService");

const fetchGithubProfile = async (
  req,
  res
) => {
  try {
    const { username } = req.params;

    const page =
      Number(req.query.page) || 1;

    const perPage =
      Number(req.query.perPage) || 10;

    const cacheKey = `${username}-${page}-${perPage}`;

    const cached =
      cache.get(cacheKey);

    if (cached) {
      return res.status(200).json({
        success: true,
        cached: true,
        data: cached,
      });
    }

    const data =
      await getGithubProfile(
        username,
        page,
        perPage
      );

    cache.set(cacheKey, data);

    res.status(200).json({
      success: true,
      cached: false,
      data,
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: "GitHub user not found",
      });
    }

    if (error.response?.status === 403) {
      return res.status(403).json({
        success: false,
        message:
          "GitHub API rate limit exceeded",
      });
    }

    if (
      error.code === "ECONNABORTED"
    ) {
      return res.status(504).json({
        success: false,
        message:
          "GitHub request timed out",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  fetchGithubProfile,
};