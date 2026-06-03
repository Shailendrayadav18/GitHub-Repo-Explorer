function LoadMoreButton({
  onClick,
  loading,
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
      w-full
      mt-8
      py-3
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
      font-medium
      hover:opacity-90
      disabled:opacity-50
      "
    >
      {loading
        ? "Loading..."
        : "Load More"}
    </button>
  );
}

export default LoadMoreButton;