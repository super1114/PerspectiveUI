import React, { useState, memo } from "react";
import { Disclosure } from "@headlessui/react";
import { navMenu, homeMenu } from "./navbar/menu";
import { newUser, topRelatedUser } from "../data/staticdata";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import DailyUpdate from "../components/dailyUpdateComponent";
import AddPost from "../components/postAddComponent";
import Search from "../components/searchComponent";


import BugReportIcon from "@mui/icons-material/BugReport";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import InfoIcon from "@mui/icons-material/Info";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DraftsIcon from '@mui/icons-material/Drafts';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentIcon from '@mui/icons-material/Assignment';

const styles = require("./layout.module.css");

const Input = styled("input")({
  display: "none",
});

const Layout: React.FC = ({ children }) => {
  const [selected, setSelected] = useState("");
  const [openPost, setOpenPost] = useState(false);
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  console.log(router.pathname);
  const CreatePost = () => {
    const [age, setAge] = React.useState("");
    const handleChange = (event: any) => {
      // setAge(event.target.value);
    };

    return (
      <Transition.Root show={openPost} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenPost}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-dark-primary">
                  <div className=" sm:items-start">
                    {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    </div> */}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900 flex flex-row items-center w-full justify-between"
                      >
                        <h3 className="w-full text-white text-center">
                          Create Post
                        </h3>
                        <div className="flex flex-row">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            className="bg-light-primary text-white"
                            onClick={() => setOpenPost(false)}
                          >
                            <CheckBoxOutlineBlankIcon />
                          </IconButton>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            className="bg-light-primary text-white ml-3"
                            onClick={() => setOpenPost(false)}
                          >
                            <CloseIcon />
                          </IconButton>
                        </div>
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-500 h-m"></div>
                <div className="bg-dark-primary px-4 py-3">
                  <div className="flex justify-between">
                    <div className="flex flex-row text-white items-center">
                      <Avatar src="/assets/images/user_2.png" />
                      <div className="flex flex-col ml-3">
                        <h3>Kibriya Zamaeer</h3>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Type"
                          onChange={handleChange}
                          className="h-8 border-white"
                          placeholder="Public"
                        >
                          <MenuItem value={10}>Public</MenuItem>
                          <MenuItem value={20}>Private</MenuItem>
                        </Select>
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      startIcon={<EditIcon />}
                      className="bg-light-primary h-8 text-mm"
                    >
                      Text Edit
                    </Button>
                  </div>
                  <div>
                    <TextareaAutosize
                      className="w-full mt-2 bg-dark-primary text-white px-2"
                      aria-label="minimum height"
                      minRows={5}
                      placeholder="What’s on your mind, Kibriya?"
                    />
                  </div>
                  <div>
                    <AddPost />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse bg-dark-primary">
                  <Button
                    variant="contained"
                    className="bg-gradient-to-t from-blue-800 to-blue w-3/4 mt-2 bg-primary w-full ml-2"
                    onClick={() => setOpenPost(false)}
                  >
                    Post
                  </Button>
                  <Button
                    variant="contained"
                    className="bg-light-primary w-3/4 mt-2 bg-primary w-full mr-2"
                    onClick={() => setOpenPost(false)}
                  >
                    Save as Draft
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  return (
    <>
      {/* Nav bar */}
      <nav className="items-center flex-wrap p-1 h-16 w-full bg-dark-primary">
        <div className="inline-flex items-center p-1 w-full flex justify-between">
          <div className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="top-0 xl:flex"
            />
            <h4 className="text-white z-10">ERSPECTIVE</h4>
          </div>
          <div className="w-1/5 hidden md:flex">
            <Search />
          </div>
          <Disclosure as="nav" className={`header z-50 px-0 hidden sm:flex`}>
            {({ open }) => (
              <>
                <div>
                  <div className="container mx-auto max-w-6xl">
                    <div className="relative items-center justify-between">
                      <div className="items-center min-w-full sm:items-stretch">
                        <div className="lg:ml-6">
                          <div className="space-x-4 ml-8 mr-8">
                            <div>
                              <ul className="navMenus justify-around text-white flex">
                                {navMenu.map((dt, idx) => (
                                  <li
                                    className="font-poppins-medium text-sm sm:text-md xl:text-md font-medium mx-5 flex items-center"
                                    key={idx}
                                    // onClick={
                                    //   idx == 0
                                    //     ? () => {
                                    //         setOpenPost(true);
                                    //       }
                                    //     : () => {}
                                    // }
                                  >
                                    {/* {idx == 0 ? (
                                      <div className="cursor-pointer">
                                        {dt.name}
                                      </div>
                                    ) : ( */}
                                      <Link href={dt.path}>{dt.name}</Link>
                                    {/* )} */}
                                  </li>
                                ))}
                                <li>
                                  <BugReportIcon />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
          <div className="flex items-center">
            <div className="text-white text-xl mr-3 z-10">M.Kibriya</div>
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/dummy_profile.png"
              variant="rounded"
            />
          </div>
        </div>
      </nav>
      <div className="flex flex-row justify-between">
        {/* Left Side Bar */}
        {router.pathname != "/profile" && (
          <div className="sidebar w-80 h-screen bg-dark-primary -mt-16 pt-20 px-5">
            <ul className="navMenus justify-around text-white flex flex-col">
              {homeMenu.map((dt, idx) => (
                <li
                  className={`block ${
                    selected === dt.name && "text-primary"
                  } ml-3 my-2 flex justify-between`}
                  onClick={() => setSelected(dt.name)}
                  key={idx}
                >
                  <div>
                    {idx === 0 && <HomeIcon className="text-xl mr-2" />}
                    {idx === 1 && <DescriptionIcon className="text-xl mr-2" />}
                    {idx === 2 && <CommentIcon className="text-xl mr-2" />}
                    {idx === 3 && <InfoIcon className="text-xl mr-2" />}
                    {idx === 4 && <AssignmentIcon className="text-xl mr-2" />}
                    <Link href={dt.path}>{dt.name}</Link>
                  </div>
                  {selected === dt.name && (
                    <div className="bg-primary w-1 h-full">&nbsp;</div>
                  )}
                </li>
              ))}
            </ul>
            <h6 className="text-white ml-2 my-5 text-sm">SHORTCUTS</h6>
            <ul className="navMenus justify-around text-white flex flex-col">
              {navMenu.map((dt, idx) => (
                <li
                  className={`block ${
                    selected === dt.name && "text-primary"
                  } ml-3 my-2 flex justify-between`}
                  onClick={() => setSelected(dt.name)}
                  key={idx}
                >
                  <div>
                    {idx === 0 && <PostAddIcon className="text-xl mr-2" />}
                    {idx === 1 && <PersonIcon className="text-xl mr-2" />}
                    {idx === 2 && <BookmarkIcon className="text-xl mr-2" />}
                    {idx === 3 && <SettingsIcon className="text-xl mr-2" />}
                    <Link href={dt.path}>{dt.name}</Link>
                  </div>
                  {selected === dt.name && (
                    <div className="bg-primary w-1 h-full">&nbsp;</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="contentWrapper relative flex flex-col bg-black w-full">
          <main className={`flex-grow flex main content ${styles.container}`}>
            {children}
            <CreatePost />
          </main>
        </div>
        {/* Right Side Bar */}
        {router.pathname != "/profile" && (
          <div
            className={`sidebar w-60 bg-dark-primary overflow-y-scroll pt-5 px-3 hidden xl:block  ${styles.container}`}
          >
            <DailyUpdate />
            <h3 className="text-md text-white mt-3">Users</h3>
            <h3 className="text-sm text-gray-500 mt-1">Top Rated</h3>
            <div className="">
              {topRelatedUser.map((dt, idx) => (
                <div
                  className={`block ml-3 my-2 flex flex-row items-center`}
                  key={idx}
                >
                  <Avatar src={dt.img} variant="rounded" alt="user avatar" />
                  <div className="flex flex-col text-white ml-1">
                    <h3 className="text-cm ">{dt.name}</h3>
                    <h4 className="text-mm text-gray-500">{dt.role}</h4>
                  </div>
                </div>
              ))}
              <h3 className="text-sm text-gray-500 mt-1">Top Rated</h3>
              {newUser.map((dt, idx) => (
                <div
                  className={`block ml-3 my-2 flex flex-row items-center`}
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
        )}
      </div>
    </>
  );
};
export default Layout;
