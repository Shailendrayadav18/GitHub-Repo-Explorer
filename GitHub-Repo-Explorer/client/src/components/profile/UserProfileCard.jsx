import {
  Users,
  BookOpen,
  ExternalLink,
} from "lucide-react";

function UserProfileCard({
  user,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      "
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="
        w-28
        h-28
        rounded-full
        mx-auto
        "
      />

      <h2 className="text-center text-2xl font-bold mt-4">
        {user.name ||
          user.login}
      </h2>

      <p className="text-center text-gray-500">
        @{user.login}
      </p>

      {user.bio && (
        <p className="mt-4 text-center">
          {user.bio}
        </p>
      )}

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div>
          <Users />
          <p>{user.followers}</p>
          <span className="text-sm">
            Followers
          </span>
        </div>

        <div>
          <Users />
          <p>{user.following}</p>
          <span className="text-sm">
            Following
          </span>
        </div>

        <div>
          <BookOpen />
          <p>
            {user.public_repos}
          </p>
          <span className="text-sm">
            Repos
          </span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        bg-black
        text-white
        py-3
        rounded-xl
        "
      >
        View GitHub Profile
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

export default UserProfileCard;