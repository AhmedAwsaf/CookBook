import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { apiStart } from "../../api";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { userObj, checkTokenValidity } = useAuth();
  const [username, setUsername] = useState(userObj?.username);
  const [bio, setBio] = useState(userObj?.bio);
  const [photo, setPhoto] = useState(userObj?.photo);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Bio:", bio);
    console.log("Profile Picture:", photo);
    //Api call to edit user
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${apiStart}/api/user/update`, //axios package used instead of default fetch
        { username, bio, photo },
        { headers: { Authorization: localStorage.getItem("loginToken") } }
      );

      if (response.data.success) {
        checkTokenValidity(); //gets updated user info
        navigate("/userprofile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 w-96 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            rows="3"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Picture URL
          </label>

          <div className="flex gap-2 items-center">
            <div>
              {photo ? (
                <img
                  src={photo}
                  alt="Profile"
                  className="h-16 w-16 rounded-full mr-4"
                />
              ) : (
                <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 0H0v24h24V0z" fill="none" />
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
              )}
            </div>
            <input
              type="text"
              id="photo"
              className="w-full rounded-lg border-gray-200 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          {loading ? "loading..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
