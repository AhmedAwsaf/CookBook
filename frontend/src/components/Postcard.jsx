import React from "react";

const Postcard = ({ imageUrl, likesCount, caption }) => {
  return (
    <a
      href="#"
      className="block rounded-lg p-2 shadow-sm shadow-indigo-100"
      style={{ width: "150px" }}
    >
      <div className="relative w-full h-full" style={{ paddingTop: "100%" }}>
        <img
          alt={caption}
          src={imageUrl}
          className="absolute top-0 left-0 h-full w-full object-cover rounded-md"
          style={{ borderRadius: "10px" }}
        />
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Likes</dt>
            <dd className="text-sm text-gray-500">{likesCount} Likes</dd>
          </div>
          <div>
            <dt className="sr-only">Caption</dt>
            <dd className="font-medium">{caption}</dd>
          </div>
        </dl>
      </div>
    </a>
  );
};

export default Postcard;
