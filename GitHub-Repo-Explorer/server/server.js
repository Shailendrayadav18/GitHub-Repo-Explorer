require("dotenv").config();
const express = require("express");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(cors({
  origin: [
      "https://git-hub-repo-explorer-virid.vercel.app",
    ],
}));
app.use(express.json());

app.use("/api/github", githubRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});