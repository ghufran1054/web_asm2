import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from "prop-types";

const LineChartComponent = ({ data, title }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md max-w-[800px]">
      <h3 className="text-gray-400 font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3182CE"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            fillOpacity={1}
            fill="url(#colorUv)"
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineChartComponent.PropTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
};

export default LineChartComponent;
