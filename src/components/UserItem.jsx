import React from "react";

const UserItem = () => {
  return (
    <div to="/profile" className="flex gap-2 my-5 items-center ">
      <div className=" overflow-hidden border-brand rounded-full">
        <img className="w-12 h-12 " src="/picture.jpg" alt="Picture" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-brand">username</h2>
      </div>
    <button className="ml-auto bg-green-300 text-white py-2 cursor-pointer px-3 rounded-2xl">add</button>
    </div>
  );
};

export default UserItem;
