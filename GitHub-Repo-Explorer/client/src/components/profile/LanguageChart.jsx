import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LanguageChart({
  data,
}) {
  if (!data.length)
    return null;

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow
      p-5
      "
    >
      <h3 className="font-bold mb-4">
        Languages Used
      </h3>

      <ResponsiveContainer
        width="100%"
        height={250}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageChart;