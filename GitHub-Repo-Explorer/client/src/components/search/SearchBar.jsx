import { Search } from "lucide-react";

function SearchBar({
  value,
  onChange,
  onSearch,
}) {
  return (
    <div className="flex gap-3">
      <div className="relative flex-1">
        <Search
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Search GitHub username..."
          className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            border-2
            border-puple-400
            bg-white
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-purple-200
            focus:border-purple-500
            transition-all
          "
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
      </div>

      <button
        onClick={onSearch}
        className="
          px-6
          py-4
          bg-blue-600
          text-white
          rounded-2xl
          hover:bg-blue-700
        "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;