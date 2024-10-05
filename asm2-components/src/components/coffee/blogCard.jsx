import PropTypes from "prop-types";
const BlogCard = ({ imageUrl, categories, title, description, date }) => {
    return (
      <div className="max-w-lg mx-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-t-lg"
        />
        <div className="p-5">
          {/* Categories */}
          <div className="flex space-x-3 mb-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
  
          {/* Title */}
          <h3 className="text-lg font-bold mb-2">{title}</h3>
  
          {/* Description */}
          <p className="text-gray-600 mb-4">{description}</p>
  
          {/* Date */}
          <p className="text-sm">{date}</p>
        </div>
      </div>
    );
  };
  
    BlogCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    };
  export default BlogCard;
  