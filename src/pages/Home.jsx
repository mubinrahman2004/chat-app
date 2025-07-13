import React from "react";
import ChatList from "../components/Chatlist";
import { IoSend } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";

const Home = () => {
  return (
    <div className="flex w-full">
      <ChatList />
      <div className="w-full bg-slate-50 h-screen">
        {/* <p className=' text-xl text-secondary text-center'>select a convarsation for start</p> */}
        <div className="chat_head p-5 bg-white flex items-center gap-4 justify-center">
          <div className=" overflow-hidden border-brand">
            <img className="w-12 h-12 " src="/Ellipse 2.png" alt="Ellipse" />
          </div>
          <h2 className="text-lg font-semibold text-brand">user name</h2>
        </div>
        <div className="w-full p-6 bg-sky-200 chat_body">
          {/* masseges body part */}
          <div className=" flex flex-col gap-5 pb-10 ">
            {/* recever massage */}
            <p className="px-4 py-2 bg-slate-200 w-fit rounded-xl text-primary font-bold rounded-bl-none max-w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* sender massage */}

            <p className="px-4 py-2 bg-slate-200 w-fit rounded-xl text-primary font-bold rounded-br-none ml-auto max-w-4/5 ">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          {/* massage input box */}
        </div>
        <div className=" w-full flex gap-2 items-center justify-center bg-white px-5 shadow-2xl">
          <input
            className="w-full outline-0"
            type="text"
            placeholder="text-here"
          />
          <button className="text-xl text-brand cursor-pointer"><CiFaceSmile /></button>
          <button className="text-xl text-brand cursor-pointer"><IoSend/></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
