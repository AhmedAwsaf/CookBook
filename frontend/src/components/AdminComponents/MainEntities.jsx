import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiStart } from '../../../api';

const UserTable = ({ userData }) => {
  if (userData.length === 0) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">User Entities</h2>
      <table className="w-full table-auto min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.email}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.username}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.role}</td>
              <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 mx-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Edit
                  </a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MainEntities = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const tabs = ['Users'];

  useEffect(() => {
    fetchUserData();
  }, []);

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

  return (
    <div className="flex">
      {/* Left part: Vertical menu */}
      <div className="w-1/6 p-4">
      <h1 className='text-xl font-medium px-4 py-2'>Data</h1>
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
              <UserTable userData={userData} />
            )}
          </>
        )}

        {activeTab === 'Teams' && <div>Teams Content</div>}
      </div>

      {/* Right part: Additional content */}
      <div className="w-1/3 p-4 bg-gray-100">
        <div>Additional content goes here</div>
      </div>
    </div>
  );
};

export default MainEntities;
