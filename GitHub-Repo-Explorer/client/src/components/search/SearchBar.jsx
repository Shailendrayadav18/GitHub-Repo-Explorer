import {
  Search,
} from "lucide-react";

function SearchBar({
  value,
  onChange,
}) {
  return (
    <div
      className="
      flex
      items-center
      gap-2
      "
    >
      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Search GitHub username..."
        className="
        flex-1
        border
        rounded-lg
        p-3
        "
      />

      <Search size={20} />
    </div>
  );
}

export default SearchBar;