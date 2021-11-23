import Layout from "../../layouts/layout";
import { ReactElement, useState } from "react";
import HeaderComponent from "../../components/headerComponent";
import Search from "../../components/searchComponent";
import { newUser, topRelatedUser } from "../../data/staticdata";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ChatWriter from "../../components/chatComponent";
import Button from "@mui/material/Button";
const styles = require("./chat.module.css");
interface User {
  name: string;
  status: number;
  img: string;
  id: number;
}

interface Chat {
  sender: User;
  content: string;
  date: string;
}
export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<User>(topRelatedUser[0]);
  const [authUser, setAuthUser] = useState<User>(topRelatedUser[0]);
  const [chatHisotry, setChatHistory] = useState<Chat[]>([
    {
      sender: topRelatedUser[0],
      content:
        "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non- characteristic words etc.",
      date: "09:48 PM",
    },
    {
      sender: topRelatedUser[1],
      content:
        "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non- characteristic words etc.",
      date: "09:49 PM",
    },
  ]);

  return (
    <div className="w-full bg-dark-primary  grid grid-cols-12 mt-2 pr-2">
      <div className="col-start-1 col-span-3 bg-black">
        <div className="m-auto w-11/12 bg-dark-primary p-2">
          <div className="h-20  border-b-2 mb-2 flex items-center">
            <h3 className="text-white text-xl">Discussion</h3>
          </div>
          <Search />
          <div className={`overflow-y-scroll ${styles.userList} mt-2`}>
            <h3 className="text-sm text-gray-400 mt-5">Favourite Message</h3>
            {topRelatedUser.map((dt, idx) => (
              <div
                className={`block ml-3 my-2 flex flex-row items-center cursor-pointer`}
                onClick={() => {
                  setSelectedUser(dt);
                }}
                key={idx}
              >
                <Avatar src={dt.img} variant="rounded" alt="user avatar" />
                <div className="flex flex-col text-white ml-1">
                  <h3 className="text-cm ">{dt.name}</h3>
                  <h4 className="text-mm text-gray-500">{dt.role}</h4>
                </div>
              </div>
            ))}
            <h3 className="text-sm text-gray-400 mt-1">All Message</h3>
            {newUser.map((dt, idx) => (
              <div
                className={`block ml-3 my-2 flex flex-row items-center cursor-pointer`}
                onClick={() => {
                  setSelectedUser(dt);
                }}
                key={idx}
              >
                <Avatar src={dt.img} variant="rounded" alt="user avatar" />
                <div className="flex flex-col text-white ml-1">
                  <h3 className="text-cm ">{dt.name}</h3>
                  <h4 className="text-mm text-gray-500">{dt.role}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-start-4 col-span-10 ">
        <div className="text-white text-xl p-2">
          <div className="flex justify-between p-3 h-20 border-b-2 ">
            <div className="flex items-center">
              <Avatar
                src={selectedUser.img}
                className="w-12 h-12"
                variant="rounded"
                alt="user avatar"
              />
              <div className="flex flex-col ml-2">
                <div className="text-lg">{selectedUser.name}</div>
                {selectedUser.status === 1 ? (
                  <h5 className=" text-sm text-green-500">Online</h5>
                ) : (
                  <h5 className="text-red-500 text-sm">Offline</h5>
                )}
              </div>
            </div>
            <div>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <VideoCameraFrontIcon className="text-white" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <LocalPhoneIcon className="text-white" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <DragIndicatorIcon className="text-white" />
              </IconButton>
            </div>
          </div>
          <div className={`p-3 ${styles.chatHisotry} relative`}>
            <div>
              {chatHisotry.map((dt, idx) => (
                <div
                  className={`flex w-full ${
                    dt.sender.id === authUser.id
                      ? "justify-start"
                      : "justify-end"
                  }`}
                  key={idx}
                >
                  <div
                    className={`flex w-1/2 ${
                      dt.sender.id !== authUser.id ? "flex-row-reverse" : ""
                    }`}
                  >
                    {dt.sender.id === authUser.id}
                    <Avatar src={dt.sender.img} />
                    <div className={`flex flex-col mx-2 mb-2 `}>
                      <div className={`rounded-md p-2 text-sm ${dt.sender.id !== authUser.id? "bg-blue-600":"bg-light-primary"}`}>
                        {dt.content}
                      </div>
                      <h5 className="w-full text-right text-gray-300 text-sm">
                        {dt.date}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center absolute left-0 right-0 bottom-0">
              <ChatWriter />
              <Button
                variant="contained"
                className="bg-gradient-to-t from-blue-800 to-blue ml-2 bg-primary w-10"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ChatPage.getLayout = function getLayout(ChatPage: ReactElement) {
  return <Layout>{ChatPage}</Layout>;
};
