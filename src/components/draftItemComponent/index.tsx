import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from "react";

interface Data {
  title: string;
  content: string;
  fav: boolean;
  date: string;
  img: string;
}
export default function DraftItem({ data }:{data:Data}) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col justify-start mb-3 p-3 cursor-pointer">
      <div className="flex justify-between items-center">
          <img src={data.img} className="w-10 rounded-sm" />
          <h3 className="text-white text-lg">{data.title}</h3>
          <BookmarkIcon className="text-gray-200"/>
      </div>
      <div className="h-m w-full bg-gray-500 mt-3"></div>
      <p className="text-sm text-gray-400 mt-4">{data.content.substring(0,400)}</p>
    </div>
  );
};

