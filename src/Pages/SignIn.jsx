import { useNavigate } from "react-router-dom";
function SignIn() {

 const navigate = useNavigate();

  return( 
    <div className="flex  justify-center items-center min-h-screen bg-slate-400">
  <div className="flex flex-col gap-5 border  border-black bg-gradient-to-r from-slate-600 to-slate-800 h-96 w-96 shadow-md rounded-md mt-8">
    <h2 className="font-bold text-4xl text-white text-center mt-6 ">SignIn</h2>

     <input
      type="text"
      placeholder="Enter email"
      className="w-60 mx-auto mt-6 border border-gray-700 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
    
     <input
      type= "text"
      placeholder="Password"
      className="w-60 mx-auto mt-6 border border-gray-700 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />

  <button className="bg-slate-900 text-white px-5 py-2 rounded-md w-fit hover:bg-blue-700 transition mx-auto">
            SignIn
          </button>
    <button onClick={()=> navigate("/")} className="bg-slate-900 text-white px-5 py-2 rounded-md w-fit hover:bg-blue-700 transition mx-auto">
      Back</button>
    
    
    
  </div>
</div>

  );
}

export default SignIn;