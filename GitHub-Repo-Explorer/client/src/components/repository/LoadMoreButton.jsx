function LoadMoreButton({
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      mt-8
      w-full
      bg-black
      text-white
      py-3
      rounded-xl
      hover:bg-gray-800
      "
    >
      Load More
    </button>
  );
}

export default LoadMoreButton;