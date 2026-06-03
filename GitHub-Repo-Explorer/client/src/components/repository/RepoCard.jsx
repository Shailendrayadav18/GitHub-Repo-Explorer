import { useState } from "react";
import {
  Star,
  GitFork,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

function RepoCard({ repo }) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      p-5
      "
    >
      <div
        onClick={() =>
          setExpanded(!expanded)
        }
        className="cursor-pointer"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">
              {repo.name}
            </h3>

            <p className="text-gray-500 mt-1">
              {repo.description ||
                "No description available"}
            </p>
          </div>

          {expanded ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {repo.language && (
            <span
              className="
              px-3
              py-1
              bg-blue-100
              text-blue-700
              rounded-full
              text-sm
              "
            >
              {repo.language}
            </span>
          )}

          <span className="flex items-center gap-1 text-sm">
            <Star size={16} />
            {repo.stargazers_count}
          </span>
        </div>
      </div>

      {expanded && (
        <div
          className="
          border-t
          mt-4
          pt-4
          "
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <GitFork size={16} />
              {repo.forks_count}
            </div>

            <div className="flex items-center gap-2">
              <AlertCircle size={16} />
              {repo.open_issues_count}
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Default Branch:
            {" "}
            {repo.default_branch}
          </p>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-blue-600
            hover:text-blue-800
            "
          >
            View Repository
            <ExternalLink size={16} />
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;