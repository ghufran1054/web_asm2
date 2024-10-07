// src/components/Sidebar.js
import { FaUser, FaSignInAlt, FaUserPlus, FaSquare, FaThLarge, FaFileAlt, FaChartBar, FaMap } from 'react-icons/fa'; // import icons as needed

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-gray-300 flex flex-col justify-between max-w-[350px]">
      {/* Sidebar Content */}
      <div>
        <div className="p-4 text-lg font-bold text-white">AdminKit</div>
        <nav className="mt-6">
          <ul>
          <div className="mt-6 text-xs font-semibold uppercase text-gray-500 px-4">
              Pages
            </div>
            {/* Dashboard */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaThLarge />
                <span>Dashboard</span>
              </a>
            </li>
            {/* Profile */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaUser />
                <span>Profile</span>
              </a>
            </li>
            {/* Sign In */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSignInAlt />
                <span>Sign In</span>
              </a>
            </li>
            {/* Sign Up */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaUserPlus />
                <span>Sign Up</span>
              </a>
            </li>
            {/* Blank */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaFileAlt />
                <span>Blank</span>
              </a>
            </li>
            <div className="mt-6 text-xs font-semibold uppercase text-gray-500 px-4">
              Tools & Components
            </div>
            {/* Buttons */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSquare />
                <span>Buttons</span>
              </a>
            </li>
            {/* Forms */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSquare />
                <span>Forms</span>
              </a>
            </li>
            {/* Cards */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSquare />
                <span>Cards</span>
              </a>
            </li>
            {/* Typography */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSquare />
                <span>Typography</span>
              </a>
            </li>
            {/* Icons */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaSquare />
                <span>Icons</span>
              </a>
            </li>
            <div className="mt-6 text-xs font-semibold uppercase text-gray-500 px-4">
              Plugins & Addons
            </div>
            {/* Charts */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaChartBar />
                <span>Charts</span>
              </a>
            </li>
            {/* Maps */}
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaMap />
                <span>Maps</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Upgrade Section */}
      <div className="p-4 bg-gray-800 text-center mb-4 mx-8">
        <p className="text-gray-400 text-sm">Upgrade to Pro</p>
        <p className="text-gray-600 text-xs mb-2">
          Are you looking for more components? Check out our premium version.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Upgrade to Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;
