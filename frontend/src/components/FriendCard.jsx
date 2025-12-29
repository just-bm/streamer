import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-5 space-y-4 items-center text-center">
        {/* PROFILE PIC */}
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-base-300 ring-offset-2 ring-offset-base-200">
            <img
              src={friend.profilePic}
              alt={friend.fullName}
            />
          </div>
        </div>

        {/* NAME */}
        <h3 className="font-semibold text-lg truncate max-w-full">
          {friend.fullName}
        </h3>

        {/* BIO */}
        {friend.bio && (
          <p className="text-sm opacity-70 leading-relaxed line-clamp-3">
            {friend.bio}
          </p>
        )}

        {/* LANGUAGES */}
        <div className="flex flex-wrap justify-center gap-1.5">
          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>

          <span className="badge badge-outline text-xs">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* ACTION */}
        <Link
          to={`/chat/${friend._id}`}
          className="btn btn-outline btn-sm w-full mt-2"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
