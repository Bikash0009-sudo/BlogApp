import React from 'react'
import { useNavigate } from 'react-router-dom';

function BlogCards({ id, image, title, content, author }) {
        
     console.log("IMAGE PATH:", image); 

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div
        onClick={() => navigate(`/blog/${id}`)}
        className="flex flex-col w-72 h-72 px-2 py-2 ml-8 mt-8 border border-white rounded-md shadow-lg bg-gradient-to-r from-slate-600 to-slate-800 transition-transform duration-300 hover:scale-105"
      >
        <img
  src={`http://localhost:3000/${image}`}
  alt={title}
  className="w-full h-40 object-cover rounded-lg"
/>

        <h2 className="font-bold text-2xl text-white mt-2">
          {title}
        </h2>
          <p className="text-white">{author}</p>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
}

export default BlogCards;