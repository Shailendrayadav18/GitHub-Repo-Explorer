import {
  useState,
} from "react";

import {
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import RepoDetails from "./RepoDetails";

function RepoCard({
  repo,
}) {
  const [expanded,
    setExpanded] =
    useState(false);

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-md
      hover:shadow-xl
      transition
      p-5
      "
    >
      <div
        onClick={() =>
          setExpanded(
            !expanded
          )
        }
        className="cursor-pointer"
      >
        <div className="flex justify-between">

          <h3 className="font-bold text-lg">
            {repo.name}
          </h3>

          {expanded ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </div>

        <p className="text-gray-500 mt-2">
          {repo.description}
        </p>

        <div className="flex gap-4 mt-4">

          <span className="
            px-2 py-1
            rounded-full
            bg-blue-100
            text-blue-700
          ">
            {repo.language}
          </span>

          <span className="flex items-center gap-1">
            <Star size={15} />
            {repo.stars}
          </span>

        </div>
      </div>

      {expanded && (
        <RepoDetails
          repo={repo}
        />
      )}
    </div>
  );
}

export default RepoCard;