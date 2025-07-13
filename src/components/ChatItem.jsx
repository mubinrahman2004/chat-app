import React from "react";

const ChatItem = () => {
  return (
   <>
    <div to="/profile" className="flex gap-2 my-5 items-center  cursor-pointer">
      <div className=" overflow-hidden border-brand rounded-full">
        <img className="w-12 h-12 " src="/picture.jpg" alt="Picture" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-brand">username</h2>
        <h3 className="text-base font-normal text-secondary">hellow</h3>
      </div>
    <p className="text-base font-normal text-secondary mb-auto ml-auto">10:30 PM</p>
    </div>
   </>
  );
};

export default ChatItem;
