import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/Userprofile";
import PostsList from "../components/PostsList";
import UserSideBar from "../components/UserSideBar";

const Userprofilepage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <UserSideBar className="w-1/4" />
        <div className="flex-1 p-6">
          <div className="m1-0">
            <UserProfile />
            <PostsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofilepage;
