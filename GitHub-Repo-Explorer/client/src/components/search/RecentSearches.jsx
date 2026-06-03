function RecentSearches({
  searches,
  onSelect,
}) {
  if (!searches.length)
    return null;

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 mb-2">
        Recent Searches
      </p>

      <div className="flex flex-wrap gap-2">
        {searches.map((item) => (
          <button
            key={item}
            onClick={() =>
              onSelect(item)
            }
            className="
            px-3
            py-1
            bg-white
            border
            border-blue-300
            rounded-full
            shadow-sm
            hover:bg-blue-50
            hover:border-blue-500
            transition-all
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;