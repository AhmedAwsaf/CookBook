import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiStart } from '../../../api';
import UserTable from './MEUserdata';

const MainEntities = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const tabs = ['Users','Recipes','Items'];

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetchUserPosts(selectedUser._id);
    }
  }, [selectedUser]);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiStart}/api/user/all`);
      setUserData(response.data.data);
    } catch (error) {
      setError('Error fetching user data');
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserPosts = async (userId) => {
    try {
      const response = await axios.post(`${apiStart}/api/recipe/userRecipes`, {
        createdBy: userId,
      });
      setUserPosts(response.data);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (user) =>{
    const confirmed = window.confirm("Are you sure you want to delete this user?");

    if (!confirmed) {
      console.log("User deletion canceled.");
      return;
    }
    console.log(user._id)
    try {
      const response = await axios.delete(`${apiStart}/api/user/adelete/${user._id}`, 
        { headers: { Authorization: localStorage.getItem("loginToken") } }
      );
  
      if (response.data.success) {
        console.log("User deleted successfully");
        return response.data;
      } else {
        console.error("Failed to delete user:", response.data.message);
      }
    } catch (error) {
      console.error("Server error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex">
      {/* Left part: Vertical menu */}
      <div className="w-1/6 p-4">
        <h1 className="text-xl font-medium px-4 py-2">Data</h1>
        <ul className="space-y-1">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                className={`block w-full text-left rounded-lg px-4 py-2 text-sm font-medium ${
                  activeTab === tab ? 'bg-sky-100 text-sky-600' : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle part: Tab content */}
      <div className="w-1/2 p-4">
        {activeTab === 'Users' && (
          <>
            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <UserTable userData={userData} onViewUser={handleViewUser} onDeleteUser={handleDeleteUser} />
            )}
          </>
        )}

        {activeTab === 'Teams' && <div>Teams Content</div>}
      </div>

      {/* Right part: Additional content */}
      <div className="w-1/3 p-4 bg-gray-100">
        {selectedUser ? (
          <div>
            <h3 className="text-xl font-medium mb-2">User Details</h3>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(selectedUser.updatedAt).toLocaleString()}</p>

            {/* User Posts */}
            <h4 className="text-lg font-medium mt-4 mb-2">User Posts</h4>
            {userPosts.length > 0 ? (
              <ul className="list-disc pl-5">
              {userPosts.map((post) => (
                <li key={post._id}>
                  <p className='text-green-800'><strong>Title:</strong> {post.name}</p>
                  <p><strong>Category:</strong> {post.category}</p>
                  <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
                  <p><strong>Prep Time:</strong> {post.prepTime}</p>
                  <p><strong>Cook Time:</strong> {post.cookTime}</p>
                  <p><strong>Servings:</strong> {post.servings}</p>
                  <p><strong>Difficulty:</strong> {post.difficulty}</p>
                  <p><strong>Recipe Like Count:</strong> {post.recipeLikeCount}</p>
                  <p><strong>Created By:</strong> {post.createdBy.username}</p>
                  <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
                </li>
              ))}
              </ul>
            ) : (
              <p className="text-gray-500">No posts available for this user.</p>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Select a user to view details and posts.</p>
        )}
      </div>
    </div>
  );
};

export default MainEntities;
