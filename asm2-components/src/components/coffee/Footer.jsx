const Footer = () => {
    return (
      <footer className="flex flex-wrap items-end bg-cover bg-center bg-no-repeat bg-coffee-blend text-white py-10 h-[600px] sm: h-[700px]">
        {/* Footer Content */}
        <div className="w-full flex flex-wrap justify-center space-x-8 mb-20 px-10">
          {/* About Us Section */}
          <div className="w-full sm:w-1/4 mb-6 pl-8">
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <p className="text-xs mt-4">
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <span className="text-yellow-500">♡</span> by Colorlib
            </p>
          </div>
  
          {/* Newsletter Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-md text-black"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-yellow-600 text-white">
                &rarr;
              </button>
            </div>
          </div>
  
          {/* Follow Us Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <p className="text-sm mb-4">Let us be social</p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="hover:text-yellow-500">Facebook</a>
              <a href="#" className="hover:text-yellow-500">Twitter</a>
              <a href="#" className="hover:text-yellow-500">Dribbble</a>
              <a href="#" className="hover:text-yellow-500">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  