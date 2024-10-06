import PropTypes from "prop-types";

const WeatherCard = ({ time, location, temperature, humidity, windSpeed }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg max-w-lg h-[200px] flex flex-col p-8 space-y-8 justify-between">
      <div className="flex justify-between items-center">
        <p >{time}</p>
        <p className="text-blue-500 cursor-pointer">
          {location} <span className="fas fa-caret-down"></span>
        </p>
      </div>
      <div className="flex mt-4 items-center justify-between">
        <div className="flex">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/partly-cloudy-day--v1.png"
            alt="partly-cloudy-day--v1"
          />
          <p className="text-5xl ml-4">{temperature}°</p>
        </div>
        <div className="flex flex-col justify-between mt-4">
          <p className="flex">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/blur.png"
              alt="blur"
            />
            <span>{humidity}%</span>
          </p>
          <p className="flex">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/flag.png"
              alt="flag"
            />{" "}
            {windSpeed}
          </p>
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.string.isRequired,
};

export default WeatherCard;
