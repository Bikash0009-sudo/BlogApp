import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog () {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");


    const navigate = useNavigate();
     
    const [fileName, setFileName] = useState("No file chosen");

              const handleImageUpload = (e) => {
               const file = e.target.files[0];
                 if (file) {
                     setFileName(file.name);
                         }
                      };

                  const handlePublish = async (e) => {
                     e.preventDefault(); 
                   const postData = {
                       title,
                       content,
                        author,
                      image_url: ""
                      };

                    await fetch("http://localhost:3000/posts", {
                   method: "POST",
                    headers: {
                  "Content-Type": "application/json",
                  },
                    body: JSON.stringify(postData),
                   });

                // go back to home page
                  navigate("/");
                 };



         return (
            <form className="flex flex-col mt-1 gap-6 ">

              <span className=" mx-auto font-bold text-3xl">Create Your Blog</span>
             <div className="flex flex-col ml-10 mt-6 gap-2">
                <p className="font-medium text-black text-2xl">Blog Title</p>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter blog title" className="w-10/12 pl-6 border border-gray-500 h-6 rounded-md"/> 

                <p className="font-medium text-black text-2xl">Author Name</p>
                <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Name" className="w-10/12 pl-6 border border-gray-500 h-6 rounded-md"/>

                <p className="font-medium text-black text-2xl">Publication Date</p>
                <input type="text" placeholder="00-00-00" className="w-10/12 pl-6 border border-gray-500 h-6 rounded-md"/>   
            </div> 

            <div className="p-5 ml-4">
      <h2 className="text-2xl font-medium mb-3">
        Upload Image
      </h2>

      <div className="flex items-center gap-4">
        <label className="bg-slate-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-slate-800">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        <span className="text-gray-600">
          {fileName}
        </span>
      </div>
          <div className="flex flex-col ml-1 mt-3 gap-2">
            <label htmlFor="message" className="font-medium text-2xl">Blog Content:</label>
            <textarea onChange={(e) => setContent(e.target.value)} value={content} id="content" name="user_message" rows="4" cols="30" className="pt-2 pl-4 w-10/12 border border-gray-500">
           Write Your Content Here
           </textarea>
         </div>

        <div className="flex justify-center items-center mt-3">
            <button onClick={handlePublish} type="submit" className="bg-gray-600 w-fit rounded-md px-4 py-2 text-white hover:bg-slate-800">Publish Post</button>
        </div>

         </div>
               

            </form>
         )
};

export default CreateBlog;