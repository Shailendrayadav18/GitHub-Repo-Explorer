import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
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
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search GitHub username..."
          className="
            w-full
            pl-12
            pr-4
            py-4
            bg-white
            border
            border-gray-200
            rounded-2xl
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <button
        className="
          px-6
          py-4
          bg-blue-600
          text-white
          rounded-2xl
          hover:bg-blue-700
          transition
          shadow-md
        "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;