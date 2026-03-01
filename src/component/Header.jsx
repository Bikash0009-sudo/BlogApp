import React from 'react'
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header className='bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg h-12 py-2 px-10 flex flex-row gap-9'>
           <h1 className='font-bold text-xl text-white '>CodexBlogs</h1>
            <input type="text" placeholder='Search Blogs' className=' rounded-full w-96 px-6 py-4 focus:outline-none'/>
            
                 <Link to= '/' className='ml-60 text-white hover:text-lg'>Home</Link>
                 <Link to= '/blog' className='text-white hover:text-lg'>Blog</Link>
                 <Link to= '/help' className='text-white hover:text-lg'>Help</Link>
                 <Link to= '/create' className='text-white hover:text-lg'>Create Blog</Link>
                <Link to= '/signup' className='text-white hover:text-lg'>SignUp</Link>
                <Link to= '/signin' className='text-white hover:text-lg'>SignIn</Link>
            
            
      
        </header>
    );

};

export default Header;

