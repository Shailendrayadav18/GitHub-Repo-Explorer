const express = require("express");

const router = express.Router();

const {
  fetchGithubProfile,
} = require("../controllers/githubController");

router.get("/:username", fetchGithubProfile);

module.exports = router;