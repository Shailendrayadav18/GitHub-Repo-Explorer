import { SearchX } from "lucide-react";

function EmptyState() {
  return (
    <div className="text-center py-16">
      <SearchX
        size={90}
        className="mx-auto text-gray-400 mb-6"
      />

      <h3 className="text-3xl font-bold">
        Search GitHub Profiles
      </h3>

      <p className="text-gray-500 mt-3">
        Find repositories, languages,
        stars and contributors
      </p>
    </div>
  );
}

export default EmptyState;