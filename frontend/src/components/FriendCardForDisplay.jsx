import { MapPinIcon } from "lucide-react";

const FriendCardDisplay = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
      <div className="card-body p-5 space-y-4">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img
                src={friend.profilePic}
                alt={friend.fullName}
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              {friend.fullName}
            </h3>

            {friend.location && (
              <div className="flex items-center text-xs opacity-70 mt-1">
                <MapPinIcon className="size-3 mr-1" />
                {friend.location}
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        {friend.bio && (
          <p className="text-sm opacity-70 line-clamp-3">
            {friend.bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendCardDisplay;
