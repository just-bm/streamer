import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { UsersIcon } from "lucide-react";

import { getUserFriends } from "../lib/api";
import FriendCardDisplay from "../components/FriendCardForDisplay";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const {
    data: friends = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Your Friends
            </h1>
            <p className="opacity-70">
              People you’re connected with
            </p>
          </div>

          <Link to="/notifications" className="btn btn-outline btn-sm">
            <UsersIcon className="size-4 mr-2" />
            Friend Requests
          </Link>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="card bg-base-200 p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">
              Failed to load friends
            </h3>
            <p className="opacity-70">
              Please try again later.
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && friends.length === 0 && (
          <NoFriendsFound />
        )}

        {/* Friends Grid */}
        {!isLoading && !isError && friends.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {friends.map((friend) => (
              <FriendCardDisplay key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
