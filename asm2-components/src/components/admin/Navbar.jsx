const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
      {/* Left: Hamburger Icon */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Right: Bell Icon, Message Icon, Profile Image, Name with Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Bell Icon with notification badge */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          <span className="absolute -top-1 -right-2 text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Message Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/20"
          alt="Profile"
          className="w-8 h-8 rounded-sm object-cover"
        />

        {/* Name with dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <span className="text-gray-700">John Doe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 w-5 h-5 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
