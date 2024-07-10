import React from "react";
import Postcard from "./Postcard";

const PostsList = () => {
  // Example posts data, replace with actual data
  const posts = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likesCount: 150,
      caption: "Lemon CheeseCake Tarts!",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1564305571106-6361c07e026c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likesCount: 200,
      caption: "Fresh Peach Cake!",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1521309839925-a1a972e912ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likesCount: 100,
      caption: "Blueberry Oatmeal",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1521309839925-a1a972e912ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likesCount: 100,
      caption: "Blueberry Oatmeal",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center mb-2">Added Posts</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <Postcard
            key={post.id}
            imageUrl={post.imageUrl}
            likesCount={post.likesCount}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
