import React from "react";
import UserProfileStat from "./UserProfileStat"; // Example profile picture
import { useAuth } from "../contexts/AuthContext";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // Example data, replace with actual data
  const postsCount = 120;
  const followersCount = 350;
  const followingCount = 85;
  const { userObj } = useAuth();

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={userObj?.photo}
          alt="Profile"
          className="h-24 w-24 rounded-full border-2 border-gray-300"
        />
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-bold">{userObj?.username}</h1>
            <Link to="/Userprofile/editprofile">
              <HiMiniPencilSquare />
            </Link>
          </div>

          <p className="text-sm text-gray-600">{userObj?.email}</p>
        </div>
      </div>
      <div className="mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Bio</h2>
        <p className="text-sm text-gray-600">{userObj?.bio}</p>
      </div>
      <UserProfileStat
        postsCount={postsCount}
        followersCount={followersCount}
        followingCount={followingCount}
      />
    </div>
  );
};

export default UserProfile;
