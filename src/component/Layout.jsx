import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import CreateBlog from "../Pages/CreateBlog"


function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/signin"|| 
    location.pathname === "/signup"||
    location.pathname ===  "/help" ||
    location.pathname ===  "/create" ||
    location.pathname.startsWith("/blog");


  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/help" element={<Help />} />
        <Route path= "/create" element={<CreateBlog/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default Layout;