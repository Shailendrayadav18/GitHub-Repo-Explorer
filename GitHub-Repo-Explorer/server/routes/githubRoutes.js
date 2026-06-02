const router = require("express").Router();

const {
  fetchGithubData,
} = require("../controllers/githubController");

router.get("/:username", fetchGithubData);

module.exports = router;