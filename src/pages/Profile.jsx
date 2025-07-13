import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const auth = getAuth();
  const userInfo = useSelector((state) => state.userData.user);
  const [editable, setEditable] = useState(false);
  const [editData, setEditData] = useState({
    avater: "",
    fullName: "",
  });
  const handelUpdate =()=>{
    console.log(editData);
    
    updateProfile(auth.currentUser, {
      displayName: editData.fullName || auth.currentUser.displayName,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className="h-screen flex items-center justify-center w-full">
      {" "}
      <div className="card relative">
        <button onClick={() => setEditable(true)}>
          <FaEdit className="text-2xl text-white top-0 right-0 cursor-pointer absolute" />
        </button>
        <div className="profileImage">
          <img src={userInfo.photoURL} alt="picture" />
        </div>
        <div className="textContainer">
          <p className="name">{userInfo.displayName}</p>
          <p className="profile">{userInfo.email}</p>
        </div>
      </div>
      {editable && (
        <div className=" fixed flex top-0 left-0 h-screen w-full   items-center justify-center bg-[#0000003e]">
          <div className=" flex flex-col p-8 rounded-2xl  bg-brand justify-center items-center ">
            <div className="py-10">
              
            </div>
          
            <input
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              type="text"
              placeholder="edit your name"
              className="border rounded-lg px-3 py-2 mt-5 mb-5 text-white w-full"
            />
            <div className="flex gap-5 justify-center mt-10">
              <button onClick={(handelUpdate)} className="py-2 px-3 bg-green-300 rounded text-white cursor-pointer">
                update
              </button>
              <button onClick={()=>setEditable(false)} className="py-2 px-3 bg-blue-300 rounded text-white cursor-pointer">
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
