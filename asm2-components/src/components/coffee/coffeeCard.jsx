import PropTypes from "prop-types";

const CoffeeCard = ({ name, price, description }) => {
    return (
      <div
        className="rounded-lg p-6 max-w-sm mx-auto"
        style={{
          boxShadow: '0px 4px 10px rgba(218, 165, 32, 0.4)', // Light golden shadow
        }}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{name}</h2>
          <span style={{ color: 'goldenrod' }} className="font-semibold">
            ${price}
          </span>
        </div>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    );
  };
  
  
CoffeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CoffeeCard;
