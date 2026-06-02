import {
  Users,
  BookOpen,
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
      sticky
      top-4
      "
    >
      <img
        src={user.avatar_url}
        alt={user.name}
        className="
        w-28
        h-28
        rounded-full
        mx-auto
        "
      />

      <h2 className="text-center text-2xl font-bold mt-4">
        {user.name}
      </h2>

      <p className="text-center text-gray-500">
        @{user.login}
      </p>

      <p className="mt-4 text-center">
        {user.bio}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">

        <div>
          <Users />
          <p>
            {user.followers}
          </p>
          <span>
            Followers
          </span>
        </div>

        <div>
          <Users />
          <p>
            {user.following}
          </p>
          <span>
            Following
          </span>
        </div>

        <div>
          <BookOpen />
          <p>
            {user.public_repos}
          </p>
          <span>
            Repos
          </span>
        </div>

      </div>
    </div>
  );
}

export default UserProfileCard;