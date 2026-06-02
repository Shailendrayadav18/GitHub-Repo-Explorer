function RepoDetails({
  repo,
}) {
  return (
    <div className="border-t mt-4 pt-4 text-sm">

      <p>
        Forks:
        {repo.forks}
      </p>

      <p>
        Open Issues:
        {repo.openIssues}
      </p>

      <p>
        Default Branch:
        {repo.defaultBranch}
      </p>

      <a
        href={repo.htmlUrl}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        View Repository
      </a>

    </div>
  );
}

export default RepoDetails;