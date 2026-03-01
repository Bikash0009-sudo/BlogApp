function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-400">

      <div className="flex flex-col border h-96 w-96  border-black bg-gradient-to-r from-slate-600 to-slate-800 gap-2 rounded-md">
        <p className="mt-4 ml-6 text-white">Enter UserName</p>
        <input type="text" placeholder="Enter Username" className="w-72 ml-6 border h-8 rounded-md px-4" />

        <p className="mt-4 ml-6 text-white">Enter Email</p>
        <input type="text" placeholder="Enter Email" className="w-72 ml-6 border h-8 rounded-md px-4" />

        <p className="mt-4 ml-6 text-white">Enter Password</p>
        <input type="text" placeholder="Enter Password" className="w-72 ml-6 border h-8 rounded-md px-4" />

        <button className="bg-slate-900 text-white px-5 py-2 rounded-md w-fit hover:bg-blue-700 transition mx-auto mt-10">
            Create Account
          </button>

      </div>

    </div>
  );
}

export default SignUp;