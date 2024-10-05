
const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        {/* Top Heading */}
        <h1 className="text-3xl text-black text-center">Get Started</h1>
        <p className="text-sm text-gray-500 text-center">Create an account to start using the platform</p>

        {/* Sign Up Card with larger width */}
        <div className="bg-white p-8 shadow-md rounded-lg w-[500px]">
          <form className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label className="block text-gray-700 text-sm font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Already have an account */}
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button className="text-blue-500 hover:underline">Sign in</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
