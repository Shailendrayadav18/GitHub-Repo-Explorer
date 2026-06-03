export const getLanguageData = (
  repos
) => {
  const stats = {};

  repos.forEach((repo) => {
    if (!repo.language)
      return;

    stats[repo.language] =
      (stats[repo.language] || 0) +
      1;
  });

  return Object.entries(stats)
    .map(
      ([name, value]) => ({
        name,
        value,
      })
    );
};