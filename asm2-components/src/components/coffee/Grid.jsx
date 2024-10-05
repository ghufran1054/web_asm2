import CoffeeCard from "./coffeeCard"; // Assuming you already have this component

import PropTypes from "prop-types";
const CoffeeGrid = ({ title, subtitle, coffeeList }) => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-500 mt-2">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeList.map((coffee, index) => (
          <CoffeeCard
            key={index}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
          />
        ))}
      </div>
    </div>
  );
};

CoffeeGrid.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  coffeeList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CoffeeGrid;
