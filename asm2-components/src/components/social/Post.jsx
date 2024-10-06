import { useState } from "react";
import PropTypes from "prop-types";

const Post = ({
  profilePic,
  userName,
  postTime,
  content,
  image,
  reactions,
}) => {
  const [showReactions, setShowReactions] = useState(false);

  const handleHover = () => setShowReactions(true);
  const handleLeave = () => setShowReactions(false);

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg w-full max-w-2xl mx-auto mb-6">
      <div className="flex items-center mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <span className="block font-semibold">{userName}</span>
          <span className="text-sm text-gray-500">{postTime}</span>
        </div>
      </div>
      <div className="mb-4">
        <p>{content}</p>
        {image && (
          <img
            src={image}
            alt="Post content"
            className="mt-3 rounded-lg w-full"
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <div
          className="relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <button className="text-gray-500 hover:text-black focus:outline-none">
            👍 Like
          </button>
          {showReactions && (
            <div className="absolute flex bg-white border border-gray-300 rounded-full p-2 space-x-4 top-[-30px]">
              {reactions.map((reaction, index) => (
                <button
                  key={index}
                  className="focus:outline-none h-s8 w-8 rounded-full hover:translate-y-[-10px] hover:scale-125 transform duration-200 ease-in-out"
                >
                  <img
                    height="480"
                    width="48"
                    src={reaction.icon}
                    alt={reaction.name}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="text-gray-500 hover:text-black focus:outline-none">
          💬 Comment
        </button>
        <button className="text-gray-500 hover:text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            className="inline-block fill-current mr-2"
          >
            <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
          </svg>
          Share
        </button>
      </div>
    </div>
  );
};

Post.propTypes = {
  profilePic: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  reactions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Post;
