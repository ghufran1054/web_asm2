import PropTypes from 'prop-types';

const PostInput = ({ userName }) => {
    return (
        <div className="bg-gray-200 p-8 rounded-lg w-full max-w-2xl mx-auto mb-6">
            <textarea
                placeholder={`What's on your mind, ${userName}?`}
                className="w-full bg-transparent border-none outline-none text-lg resize-none"
                rows="3"
            ></textarea>
            <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-gray-700">
                    <img width="24" height="24" src="https://img.icons8.com/ios/50/image--v1.png" alt="image--v1"/>
                        <span>Photo/Video</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-gray-700">
                    <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/group.png" alt="group"/>
                        <span>Tag Friends</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-gray-700">
                    <img width="24" height="24" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>
                        <span>Check In</span>
                    </button>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Publish</button>
            </div>
        </div>
    );
};

PostInput.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default PostInput;
