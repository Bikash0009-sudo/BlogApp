import blog from "../assets/blog.jpg";

function Hero() {
      return(
        /*HERO Left*/
        <section className='flex mt-8 flex-col'>
            <div className="flex w-4/5 bg-slate-300 rounded-lg shadow-lg mx-auto">
              <div className="w-1/2">
                <img src={blog} alt="Blog"  className="h-96 rounded-lg"/>
              </div>
              

       <div className="flex flex-col py-8 px-10 mx-6 justify-center ">
         
         <h1 className="text-4xl font-bold mb-4">
            Welcome to CodexBlogs
          </h1>
          <p className="text-gray-600 mb-6">
            Discover amazing articles about web development, 
            React, JavaScript and modern technologies.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md w-fit hover:bg-blue-700 transition">
            Read More
          </button>
              </div>
             </div>

             <div className="text-center mt-16 mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                      Latest Articles
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                     Explore our newest tutorials, coding guides, and modern web development tips to level up your skills.
              </p>

            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
         </div>
             
        </section>
        
      )
}

export default Hero;