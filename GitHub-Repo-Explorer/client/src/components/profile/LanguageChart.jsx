function LanguageChart({ data = [] }) {
  if (!data.length) {
    return null;
  }

  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      "
    >
      <h3 className="text-xl font-bold mb-4">
        Languages Used
      </h3>

      <div className="space-y-4">
        {data.map((item) => {
          const percentage = Math.round(
            (item.value / total) * 100
          );

          return (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span>
                  {percentage}%
                </span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="
                  h-full
                  bg-blue-600
                  rounded-full
                  "
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageChart;