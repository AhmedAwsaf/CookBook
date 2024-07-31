import React, { useEffect, useState } from "react";
import UserProfileStat from "./UserProfileStat"; // Example profile picture
import { useAuth } from "../contexts/AuthContext";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
=======
import { apiStart } from "../../api";
import axios from "axios";
>>>>>>> Stashed changes

const UserProfile = () => {
  const [postsCount, setPostsCount] = useState(0);
  const { userObj } = useAuth();
  console.log(userObj);
  useEffect(() => {
    async function getUserPosts() {
      try {
        const response = await axios.post(
          `${apiStart}/api/recipe/userRecipes`,
          { createdBy: userObj?._id }
        );
        setPostsCount(response.data.length);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserPosts();
  }, []);
  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <img
<<<<<<< Updated upstream
          src={userObj?.photo}
=======
          src={`${apiStart}${userObj.photo}`}
>>>>>>> Stashed changes
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
        followersCount={userObj?.UserLikeCount}
        followingCount={userObj?.creditPoints}
      />
    </div>
  );
};

export default UserProfile;
