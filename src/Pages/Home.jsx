import Hero from "../component/Hero";
import BlogCards from "../component/BlogCards";
import { Blogdata } from "../data/Blogdata";
import { useState, useEffect } from "react";
import { data } from "react-router-dom";

function Home() {
const [blogs, setBlogs] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) => setBlogs(data))
  .catch((err) => console.log(err));
},[]);

  return (
    <>
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-3">
       {blogs.map((blog) => (
  <BlogCards
    key={blog.id}
    id={blog.id}
    image={blog.image_url}
    title={blog.title}
    description={blog.content}
    author={blog.author}
  />
))}
        
      </div>
    </>
  );
}

export default Home;