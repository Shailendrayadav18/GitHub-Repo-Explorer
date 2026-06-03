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
      border
      rounded-xl
      bg-white
      shadow-sm
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