export const sortRepos = (
  repos,
  sortBy
) => {
  const sorted = [...repos];

  switch (sortBy) {
    case "stars":
      sorted.sort(
        (a, b) =>
          b.stars - a.stars
      );
      break;

    case "updated":
      sorted.sort(
        (a, b) =>
          new Date(
            b.updatedAt
          ) -
          new Date(
            a.updatedAt
          )
      );
      break;

    case "name":
      sorted.sort((a, b) =>
        a.name.localeCompare(
          b.name
        )
      );
      break;

    default:
      break;
  }

  return sorted;
};