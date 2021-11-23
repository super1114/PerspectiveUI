import * as React from "react";
import Layout from "../../layouts/layout";
import { ReactElement, useState } from "react";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AntSwitch from "../../components/switchComponent";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useRouter } from "next/router";
import { PrimaryTextField } from "../../components/customInputComponent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SettingPage() {
  const [hide, setHide] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openPost, setOpenPost] = useState(false);

  const ResetPassword = () => {
    const [age, setAge] = React.useState("");
    const handleChange = (event: any) => {
      // setAge(event.target.value);
    };
    const cancelButtonRef = useRef(null);
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
                          Change Password
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
                <div className="bg-dark-primary px-8 py-3 ">
                  <div>
                    <PrimaryTextField
                      variant="outlined"
                      label="Current Password"
                      className="mt-5 w-full m-auto"
                    />
                    <PrimaryTextField
                      variant="outlined"
                      label="New Password"
                      className="mt-5 w-full m-auto"
                    />
                    <PrimaryTextField
                      variant="outlined"
                      label="Confirm Password"
                      className="mt-5 w-full m-auto"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-3 pb-5 sm:flex sm:flex-row-reverse bg-dark-primary justify-center">
                  <Button
                    variant="contained"
                    className="bg-gradient-to-t from-blue-800 to-blue w-1/3 mt-2 bg-primary  py-3"
                    onClick={() => setOpenPost(false)}
                  >
                    Save
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
    <div className="w-11/12 mx-auto bg-dark-primary  rounded-lg mt-10">
      <div className="w-full inline-block align-bottom text-white px-10 py-5 text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:w-full ">
        <h3>General Account Setting</h3>
      </div>
      <div className="w-full bg-gray-500 h-m"></div>
      <div className="flex flex-col p-10">
        <div className="flex flex-row items-center py-5">
          <div className="w-1/3">
            <h3 className="text-xl text-white">Name:</h3>
          </div>
          <div className="w-2/3 items-center flex">
            <h4 className="text-gray-500 text-lg">Kibriya Zameer</h4>
          </div>
        </div>
        <div className="flex flex-row items-center py-5">
          <div className="w-1/3">
            <h3 className="text-xl text-white">Username:</h3>
          </div>
          <div className="w-2/3 items-center flex">
            <h4 className="text-gray-500 text-lg">
              http://www.erspective.com/kibriyazameer.646
            </h4>
          </div>
        </div>
        <div className="flex flex-row items-center py-5">
          <div className="w-1/3">
            <h3 className="text-xl text-white">Contact:</h3>
          </div>
          <div className="w-2/3 items-center flex">
            <h4 className="text-gray-500 text-lg">Primary: (Pending)</h4>
          </div>
        </div>
        <div className="flex flex-row items-center py-5">
          <div className="w-1/3">
            <h3 className="text-xl text-white">Password:</h3>
          </div>
          <div className="w-2/3 items-center flex">
            <div className="flex items-center py-5">
              <MoreHorizIcon className="text-gray-500" />
              <MoreHorizIcon className="text-gray-500 -ml-1" />
              <Button
                className="text-md bg-light-primary ml-3 text-gray-300"
                variant="contained"
                onClick={() => {
                  setOpenPost(true), console.log("FUCKING");
                }}
              >
                Change
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center py-5">
          <div className="w-1/3">
            <h3 className="text-xl text-white">Hide Bi-Partisanship:</h3>
          </div>
          <div className="w-2/3 items-center flex gap-5">
            <h3 className={`${hide ? "text-gray-600" : "text-gray-400"}`}>
              Hide
            </h3>
            <AntSwitch className="" onClick={() => setHide(!hide)} />
            <h3 className={`${hide ? "text-blue-500" : "text-gray-500"}`}>
              Display
            </h3>
          </div>
        </div>
      </div>

      <ResetPassword />
    </div>
  );
}

SettingPage.getLayout = function getLayout(SettingPage: ReactElement) {
  return <Layout>{SettingPage}</Layout>;
};
