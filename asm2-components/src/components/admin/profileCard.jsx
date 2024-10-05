import PropTypes from "prop-types";

const ProfileCard = ({
  name,
  title,
  skills,
  location,
  workplace,
  hometown,
  website,
  socialLinks,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-sm mx-auto">
      <h2 className="text-gray-500 text-md mb-4 p-6">Profile Details</h2>
      <div className="flex flex-col items-center p-6">
        <img
          src={imageUrl}
          alt="Profile"
          className="rounded-full w-24 h-24 mb-2"
        />
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-gray-500">{title}</p>
        <div className="text-xs mt-4 flex">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2">
            Follow
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span>Message</span>
          </button>
        </div>
      </div>
      <hr />

      <h4 className="mt-6 text-sm font-semibold px-6">Skills</h4>
      <div className="flex flex-wrap mt-1 px-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      <hr className="mt-4"/>
      <h4 className="mt-6 text-sm font-semibold px-6">About</h4>
      <p className="text-gray-600 mt-1 px-6 flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Lives in </span> <span className="text-blue-500">{location}</span>
      </p>
      <p className="text-gray-600 px-6 flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"
            clipRule="evenodd"
          />
          <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
        </svg>
        <span>Works at </span>
        <span className="text-blue-500">{workplace}</span>
      </p>
      <p className="text-gray-600 px-6 flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            clipRule="evenodd"
          />
        </svg>
        <span>From</span> <span className="text-blue-500">{hometown}</span>
      </p>
      <hr className="mt-4"/>

      <h4 className="mt-6 text-sm font-semibold px-6">Elsewhere</h4>
      <ul className="mt-1 px-6 pb-6">
        <li className="text-blue-500 cursor-pointer hover:underline">
          {website}
        </li>
        {socialLinks.map((link) => (
          <li
            key={link}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
  workplace: PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileCard;
