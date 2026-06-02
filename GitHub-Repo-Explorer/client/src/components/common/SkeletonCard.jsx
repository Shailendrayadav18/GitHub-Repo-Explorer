function SkeletonCard() {
  return (
    <div
      className="
      bg-white
      rounded-xl
      p-5
      animate-pulse
      shadow
      "
    >
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-4" />

      <div className="h-4 bg-gray-200 rounded w-full mb-2" />

      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  );
}

export default SkeletonCard;