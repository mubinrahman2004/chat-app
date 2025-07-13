import { getDatabase, ref, onValue, push } from "firebase/database";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserItem from "./UserItem";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const [modal, setModal] = useState(false);
  const [userList,setUserList]=useState([])
  const db = getDatabase();
  useEffect(() => {
    let arr=[];
    onValue(ref(db, "users/" ), (snapshot) => {
    snapshot.forEach(items => {
      arr.push({...items.val(),id: items.key})
    });
    setUserList(arr)
    });
  }, []);
  console.log(userList);
  
  return (
    <div className=" p-4 shadow-2xl h-screen overflow-hidden w-2xl">
      <div className="flex gap-3 items-center justify-between">
        <h2 className="text-xl font-bold text-brand">Chat with friends</h2>
        <button
          onClick={() => setModal(true)}
          className="py-1 px-3 border border-brand rounded-lg font-bold  text-brand cursor-pointer"
        >
          add
        </button>
      </div>
      <div className="mt-5 flex items-center gap-3 p-1 border border-secondary rounded ">
        <CiSearch />
        <input className="outline-0" type="text" placeholder="search" />
      </div>
      <div className="mt-10 h-full overflow-scroll ">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
   
      </div>
      {modal && (
        <div className="fixed h-screen top-0 left-0 flex items-center  justify-center w-full z-10 bg-[#0f0e0e9d]">
          <div className="bg-white h-3/6 p-5 w-md rounded-2xl overflow-y-auto ">
            <div className="mt-5 flex items-center gap-3 p-1 border border-secondary rounded  ">
              <CiSearch />
              <input className="outline-0" type="text" placeholder="search" />
            </div>
         <div className="h-95 w-sm overflow-y-auto">
             {
              userList.map((item)=>(
                <UserItem key={item.id}/>
                
              ))
            }
          </div>        
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
