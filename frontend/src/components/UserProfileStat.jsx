import React from "react";

const UserProfileStat = ({ postsCount, followersCount, followingCount }) => {
  return (
    <div className="flex items-center justify-around bg-white p-4 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{postsCount}</h2>
        <p className="text-sm text-gray-600">Posts</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{followersCount}</h2>
        <p className="text-sm text-gray-600">Likes</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{followingCount}</h2>
        <p className="text-sm text-gray-600">Posts Liked</p>
      </div>
    </div>
  );
};

export default UserProfileStat;
