import { SearchX } from "lucide-react";

function EmptyState() {
  return (
    <div className="text-center py-16">
      <SearchX
        size={60}
        className="mx-auto mb-4"
      />

      <h3 className="text-xl font-bold">
        No Results
      </h3>

      <p className="text-gray-500">
        Search a GitHub profile.
      </p>
    </div>
  );
}

export default EmptyState;