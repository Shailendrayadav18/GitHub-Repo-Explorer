function LoadMoreButton({
  onClick,
  loading,
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
      mt-8
      w-full
      py-3
      rounded-xl
      bg-black
      text-white
      hover:bg-gray-800
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