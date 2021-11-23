import Layout from "../../layouts/layout";
import { ReactElement, useState } from "react";
import { commentData, newUser, topicData } from "../../data/staticdata";
import Avatar from "@mui/material/Avatar";

import Search from "../../components/searchComponent";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TopicItem from "../../components/topicItemComponent";
import FavTopicItem from "../../components/favTopicItemComponent";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CommentWriter from "../../components/commentComponent";
import AvatarWithStatus from "../../components/avatarComponent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CommentItem from "../../components/commentItemComponent";
const styles = require("./profile.module.scss");

export default function ProfilePage() {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={`w-full mt-5 overflow-y-scroll bg-black pb-10`}>
      <div className=" bg-dark-primary  px-5">
        <img src="/assets/images/new_york.png" className="w-full rounded-lg" />
        <div className="flex justify-between">
          <div className="flex items-end px-10">
            <Avatar
              src="/assets/images/dummy_profile.png"
              sx={{ width: 150, height: 150 }}
              className="-mt-10  border-primary border-4"
            />
            <div className="flex flex-col ml-5">
              <h3 className="text-xl text-white">Lyman Starmer</h3>
              <h4 className="text-md text-gray-400">1.2k Friends</h4>
              <AvatarGroup max={8}>
                <Avatar alt="Remy Sharp" src="/assets/images/user_1.png" />
                <Avatar alt="Travis Howard" src="/assets/images/user_2.png" />
                <Avatar alt="Cindy Baker" src="/assets/images/user_3.png" />
                <Avatar alt="Agnes Walker" src="/assets/images/user_4.png" />
                <Avatar alt="Agnes Walker" src="/assets/images/user_5.png" />
                <Avatar alt="Agnes Walker" src="/assets/images/user_6.png" />
                <Avatar alt="Agnes Walker" src="/assets/images/user_7.png" />
                <Avatar alt="Agnes Walker" src="/assets/images/user_8.png" />
              </AvatarGroup>
            </div>
          </div>
          <div className="items-center flex">
            <Button
              variant="contained"
              className="bg-gradient-to-t from-blue-800 to-blue ml-2 bg-primary"
            >
              Create a Post
            </Button>

            <Button
              variant="contained"
              className="bg-light-primary ml-2 bg-primary"
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="bg-gray-600 h-m w-full mt-5 "></div>
        <div className="flex justify-between items-center">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="tabs example"
          >
            <Tab value="one" label="Posts" className="text-white" />
            <Tab value="four" label="Discussions" className="text-white" />
            <Tab value="three" label="Comments" className="text-white" />
            <Tab value="two" label="Rebuttals" className="text-white" />
          </Tabs>
          <Button
            className="text-mm bg-light-primary m-1 h-8"
            variant="contained"
          >
            <DehazeIcon />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 rounded-md mt-5 mx-5 px-5 gap-5 ">
        <div className="col-start-1 col-span-3 rounded-lg bg-dark-primary px-3">
          <div className="flex justify-between my-5">
            <h4 className="text-white text-xl">Comments</h4>
            <h5 className="text-blue-600 text-sm">See All</h5>
          </div>
          <div className="w-full">
            {commentData.map((data, idx) => (
              <CommentItem data={data} key={idx} />
            ))}
          </div>
        </div>
        <div className="col-start-4 col-span-4 rounded-md bg-dark-primary">
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <AvatarWithStatus data={newUser[1]} />
              <div className="flex flex-col">
                <h3 className="text-white text-md">{newUser[1].name}</h3>
                <div className="text-mm text-gray-300 flex items-center">
                  <h4>Oct 28 .</h4>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <LanguageIcon className="text-gray-400 text-sm" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="text-mm text-gray-300 flex items-center">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <MoreVertIcon className="text-gray-400" />
              </IconButton>
            </div>
          </div>
          <img src="/assets/images/galary_cover.png" className="w-full" />
          <div className="justify-around flex text-gray-400 mt-2">
            <div className="flex">
              <FavoriteIcon />
              <h3>2,450 Likes</h3>
            </div>
            <div className="flex">
              <InsertCommentIcon />
              <h3>158 Comments</h3>
            </div>
          </div>
          <div className="bg-gray-600 h-m w-full mt-5 mb-3"></div>
          <div className="flex p-4 items-center">
            <div className="mr-2 items-center flex">
              <AvatarWithStatus data={newUser[2]} />
            </div>
            <CommentWriter />
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilePage.getLayout = function getLayout(ProfilePage: ReactElement) {
  return <Layout>{ProfilePage}</Layout>;
};
