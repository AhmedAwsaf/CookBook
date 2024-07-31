import React, { useState } from "react";

const CommentSection = () => {
  return (
    <div className="mt-6">
      <h2 class="text-xl font-semibold">Comments</h2>
      <div class="max-w-full mx-auto p-4 bg-white rounded-lg shadow-md">
        <div class="mb-4">
          {/* <h2 class="text-xl font-semibold">Comments</h2> */}
        </div>
        <div class="mb-4 max-h-64 overflow-y-auto">
          <div class="flex items-start mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-c1eMA0FE5304KBT4e7Pc6x_8eKm3Yk_MUw&s"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <div class="flex items-center">
                <span class="font-medium">john_doe</span>
                <span class="text-gray-500 text-xs ml-2">2 hours ago</span>
              </div>
              <p class="text-gray-800">
                This recipe looks amazing! Can't wait to try it out.
              </p>
            </div>
          </div>

          <div class="flex items-start mb-4">
            <img
              src="https://i0.wp.com/buddymantra.com/wp-content/uploads/2019/09/chef-posing.jpg"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <div class="flex items-center">
                <span class="font-medium">jane_smith</span>
                <span class="text-gray-500 text-xs ml-2">1 hour ago</span>
              </div>
              <p class="text-gray-800">
                Tried this recipe last night, and it was delicious!
              </p>
            </div>
          </div>

          <div class="flex items-start mb-4">
            <img
              src="https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.webp?b=1&s=170667a&w=0&k=20&c=8pARCDQkmc8X6SUnWQBY7MAdYVBSxbH8PBS3sJxLOiE="
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <div class="flex items-center">
                <span class="font-medium">chef_antonio</span>
                <span class="text-gray-500 text-xs ml-2">30 minutes ago</span>
              </div>
              <p class="text-gray-800">
                Love the use of fresh ingredients here. Great job!
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center border-t pt-4">
          <input
            type="text"
            class="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Add a comment..."
          />
          <button class="text-teal-600 hover:text-teal-800 ml-2 font-medium">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
