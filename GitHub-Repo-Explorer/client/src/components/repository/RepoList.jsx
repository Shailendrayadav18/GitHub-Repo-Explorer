import { memo } from "react";

const RepoList = memo(
  ({ repos }) => {
    return (
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        "
      >
        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}
      </div>
    );
  }
);

export default RepoList;