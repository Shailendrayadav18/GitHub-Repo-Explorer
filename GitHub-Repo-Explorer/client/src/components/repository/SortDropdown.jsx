function SortDropdown({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="
      px-4
      py-2
      border-2
      rounded-xl
      bg-white
      border-amber-400
      shadow-md
      focus:outline-none
      focus:ring-2
      focus:ring-amber-200
      "
    >
      <option value="stars">
        ⭐ Stars
      </option>

      <option value="name">
        🔤 Name
      </option>

      <option value="updated">
        🕒 Updated
      </option>
    </select>
  );
}

export default SortDropdown;