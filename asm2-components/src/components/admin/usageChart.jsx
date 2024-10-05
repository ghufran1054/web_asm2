import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';


const UsagePieChart = ({data, title}) => {
  return (
    <div className="bg-white shadow-md rounded-lg py-4 max-w-sm px-8">
      <h2 className="text-gray-500 text-sm mb-2">{title}</h2>
      <PieChart width={200} height={200} className='mx-auto'>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className='py-2'>
            <div className="flex justify-between">
            <span>{entry.name}</span>
            <span>{entry.value}</span>
          </div>
          <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
UsagePieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default UsagePieChart;
