import { ReactElement, useEffect } from "react";
import Layout from "../../layouts/layout";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { discussionData } from "../../data/staticdata";
import { Avatar } from "@mui/material";
import ReplyItem from "../../components/replyComponent";
const styles = require("./discussion.module.scss");

interface Author {
  image: string;
  name: string;
}
interface DiscussionData {
  title: string;
  author: any;
  date: string;
  content: string;
  readtime:number;
  reply: any[];
}

export default function DiscussionDetailPage() {
  const tags = [
    "Help",
    "Status",
    "Writter",
    "Blog",
    "Carrers",
    "Privacy",
    "Term",
    "About",
  ];
  const selectBtns = [
    "self",
    "Relactionship",
    "Machine Leaning",
    "Health",
    "Politics",
  ];
  const router = useRouter();
  //   const index:number = router.query.index!=undefined? router.query.index:0;
  const data: DiscussionData = discussionData[0];
  const author: Author = data.author;
  console.log(data.reply)
  return (
    <div className="grid grid-cols-12 bg-dark-primary m-4 w-full ">
      <div className={`col-start-1 col-span-9 p-5 flex flex-col ${styles.container} overflow-y-scroll`}>
        <h4 className="text-white text-3xl mb-5">{data.title}</h4>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Avatar src={author.image} />
            <h3 className="text-white ml-3">{author.name}</h3>
          </div>
          <div className="flex items-center text-white">
            <h4>{data.date}</h4>
            <h4>{data.readtime} min read</h4>
            <Button variant="contained" className="text-sm bg-light-primary m-1 h-7">
              demo
            </Button>
          </div>
        </div>
        
        <div className="h-m w-full bg-gray-600 p-1 mt-4"></div>
        {data.reply.map((data,idx)=>{
            // <ReplyItem data={data} key={idx}/>
            <div className="p-5">KILL</div>
          })}
        <p className="text-gray-400 mt-5 ">{data.content}</p>
      </div>
      <div className="col-start-10 col-span-3 border-l-2 border-gray-600 flex flex-col pt-10 text-gray-600 p-2  overflow-y-scroll">
        <div>
          <h2 className="text-white text-md mx-2 mb-5">
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </h2>
          {selectBtns.map((data, idx) => (
            <Button
              className="text-sm bg-light-primary m-1 h-7"
              variant="contained"
              key={idx}
            >
              {data}
            </Button>
          ))}
        </div>
        <div className="mt-5">
          {tags.map((data, idx) => (
            <Button
              variant="text"
              className="text-gray-500 text-sm m-1 h-7"
              key={idx}
            >
              {data}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

DiscussionDetailPage.getLayout = function getLayout(
  DiscussionDetailPage: ReactElement
) {
  return <Layout>{DiscussionDetailPage}</Layout>;
};
