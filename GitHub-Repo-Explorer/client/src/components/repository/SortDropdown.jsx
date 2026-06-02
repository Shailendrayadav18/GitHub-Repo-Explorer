function SortDropdown({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      className="
      border
      rounded-lg
      px-4
      py-2
      "
    >
      <option value="stars">
        Stars
      </option>

      <option value="name">
        Name
      </option>

      <option value="updated">
        Updated
      </option>
    </select>
  );
}

export default SortDropdown;