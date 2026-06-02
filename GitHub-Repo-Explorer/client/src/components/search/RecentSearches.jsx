function RecentSearches({
  searches,
  onSelect,
}) {
  if (!searches.length)
    return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {searches.map((item) => (
        <button
          key={item}
          onClick={() =>
            onSelect(item)
          }
          className="
          px-3
          py-1
          bg-gray-100
          rounded-full
          hover:bg-gray-200
          "
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;