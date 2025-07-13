import React from "react";
import { IoChatbox } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router";
import { loggedUser } from "../../store/slices/authSlice";

const Navbar = () => {
  const userData = useSelector((state)=>state.userData.user)
  const dispatch=useDispatch()
  const handelsignout =()=>{
    dispatch(loggedUser(null));
  }
  
  return (
    <>
      <nav className="h-screen py-8 px-4 shadow-xl flex flex-col w-xs">
        <h2 className="text-3xl font-bold text-brand">chatapp</h2>
        <div className="flex flex-col mt-20">
          <Link
            className="flex gap-4 items-center text-2xl py-2 px-4 bg-brand text-white rounded-2xl"
            to="/chat"
          >
            {" "}
            <IoChatbox />
            Chat
          </Link>
          <Link
            className="flex gap-4 items-center text-2xl py-2 px-4 "
            to="/group"
          >
            {" "}
            <MdGroups />
            Group
          </Link>
        </div>
       <div className="mt-auto flex flex-col gap-6">
         <Link to="/profile" className="flex gap-4 ">
          <div className=" overflow-hidden border-brand">
            <img className="w-12 h-12 rounded-full" src="/picture.jpg" alt="" />
          </div>
          <div >
            <h2  className="text-lg font-bold text-brand">{userData.displayName}</h2>
            <h3 className="text-lg font-bold text-brand">{userData.photoURL}</h3>
          </div>
        </Link>
        <button onClick={handelsignout} className="py-2 bg-red-300 text-white rounded-2xl font-bold  cursor-pointer">sign out</button>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
