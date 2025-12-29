import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4 space-y-3">
        {/* USER INFO */}
        <div className="flex items-center gap-3">
          <div className="avatar size-12">
            <img
              src={friend.profilePic}
              alt={friend.fullName}
              className="rounded-full"
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold truncate">
              {friend.fullName}
            </h3>
          </div>
        </div>

        {/* BIO */}
        {friend.bio && (
          <p className="text-sm opacity-70 leading-relaxed line-clamp-3">
            {friend.bio}
          </p>
        )}

        {/* LANGUAGES */}
        <div className="flex flex-wrap gap-1.5">
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
          className="btn btn-outline btn-sm w-full mt-1"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
