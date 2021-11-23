import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import Image from "next/image";
interface Data {
  title: string;
  content: string;
  fav: boolean;
  date: string;
  img: string;
}
export default function TopicItem({ data }: { data: Data }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col justify-start mb-3">
      <div className="grid grid-cols-12 flex-row">
        <div className="col-start-1 col-span-4 m-3">
          <Image src={data.img} width={300} height={200} />
        </div>

        <div className="col-start-5 col-span-8">
          <div className="flex justify-between">
            <h3 className="text-white text-2xl">{data.title}</h3>
            <div className="flex flex-row">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <KeyboardArrowUpIcon className="text-gray-400 text-md" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <StarIcon className="text-gray-400 text-md" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-row">
            <h4 className="text-gray-300">{data.date}</h4>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <LanguageIcon className="text-gray-400 text-sm" />
            </IconButton>
          </div>
          <p className="text-gray-400 mb-4">{data.content.substring(0, 500)}</p>
          {
            <a
              className="underline cursor-pointer text-white "
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "See less" : "See all"}
            </a>
          }
        </div>
      </div>
      <p className={`text-gray-400 w-full ${expand === false ? "hidden" : ""}`}>
        {data.content.substring(501)}
      </p>
      <div className="h-m w-full bg-gray-500 mt-3"></div>
    </div>
  );
}
