import { Blogdata } from "../data/Blogdata";
import Header from "../component/Header";
import { useEffect, useState } from "react";

function Blog() {
 
       const [blog,setBlog] = useState([]);

       useEffect(() => {
          fetch("http://localhost:3000/posts")
              .then((res) => res.json())
               .then((data) => setBlog(data))
               .catch((err) => console.log(err));
           },[]);
     
  return (
   
    <div className="flex flex-col gap-6 min-h-screen ">
        <Header/>
      <h1 className="ml-6 font-bold text-4xl text-black">Codex Blogs</h1>

      {blog.map((b) => {
        console.log("BLOG DATA:", b);
        return (
          <div
           key={b.id}
             className="flex gap-6 items-center ml-5 w-10/12 p-4 border border-black rounded-lg shadow-md bg-gradient-to-r from-slate-700 to-slate-700 transition-transform duration-300 hover:scale-105"
>
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white">{b.title}</h2>
                <p className="text-sm text-white">{b.date}</p>
                 <p className="text-white">{b.content}</p>
              </div>
            </div>
        );
      })}

    </div>
  );
}

export default Blog;