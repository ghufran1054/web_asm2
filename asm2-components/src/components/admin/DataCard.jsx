import PropTypes from "prop-types";

const DataCard = ({ title, value, percentage, iconUrl }) => {
  // Determine the color of the percentage figure based on the sign
  const percentageColor = percentage >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="flex justify-between p-4 bg-white shadow-md rounded-sm max-w-xs ">
      {/* Main content: Title, Value, and Percentage */}
      <div className="flex flex-col space-y-4 justify-between">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-3xl font-semi-bold text-black">{value}</span>
        <span className={`text-md ${percentageColor}`}>
          {percentage}%{" "}
          <span className="text-sm text-gray-500"> Since Last week</span>
        </span>
      </div>

      {/* Icon Section */}
      <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
        <img width="20" height="20" src={iconUrl} />
      </div>
    </div>
  );
};
DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.number.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default DataCard;
