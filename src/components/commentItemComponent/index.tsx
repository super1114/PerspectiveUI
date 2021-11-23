import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import { Avatar } from "@mui/material";

interface CommentData {
  image: string;
  name: string;
  date: string;
  content: string;
}

export default function CommentItem({ data }:{data:CommentData}) {
  return (
    <div className="flex flex-row mb-3 p-3">
      <div className="w-20 flex justify-end">
        <Avatar src={data.image} alt="user avatar" className="w-12 h-12" />
      </div>
      <div className="ml-2 flex flex-col w-full">
        <div className="flex justify-between mb-2">
          <h4 className="text-xl text-white">{data.name}</h4>
          <h5 className="text-md text-white">{data.date}</h5>
        </div>
        <p className="text-gray-500 text-md">{data.content}</p>
      </div>
    </div>
  );
};
