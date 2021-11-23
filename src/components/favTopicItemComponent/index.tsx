import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";

interface Data {
  title: string;
  content: string;
  fav: boolean;
  date: string;
  img: string;
}
export default function FavTopicItem({ data }:{data:Data}) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col justify-start mb-3 p-3">
      <div className="flex justify-between items-center">
          <img src={data.img} className="w-10 rounded-sm" />
          <h3 className="text-white text-lg">{data.title}</h3>
          <StarIcon className="text-yellow-500"/>
      </div>
      <p className="text-sm text-gray-400 mt-4">{data.content.substring(0,400)}</p>
    </div>
  );
};

