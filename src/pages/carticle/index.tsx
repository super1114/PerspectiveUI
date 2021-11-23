import React, { useState, useMemo } from "react";
import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import HeaderComponent from "../../components/headerComponent";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green, grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import AddPost from "../../components/postAddComponent";
import RichText from "../../components/richTextComponent";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import CustomRichText from "../../components/customRichTextComponent";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "gray",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "gray",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "white",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "gray",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white",
  },
});
export default function CreateArticlePage() {
  const [content, setContent] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className=" bg-dark-primary  rounded-lg mx-3 w-full my-3 flex">
      <div className="relative m-auto align-bottom bg-light-primary rounded-lg text-left overflow-hidden shadow-xl  sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full ">
        <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
          <div className=" sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left "></div>
          </div>
        </div>
        <div className="w-full bg-gray-500 h-m"></div>
        <div>
          <div className="bg-light-primary  px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-between">
                <div className="flex flex-row text-white items-center">
                  <Avatar
                    sx={{ bgcolor: grey[900], width: 80, height: 80 }}
                    variant="rounded"
                  >
                    K
                  </Avatar>
                  <div className="flex flex-col ml-3">
                    <h3>Upload a Profile Picture</h3>
                  </div>
                </div>
              </div>
              <FormControl className="w-40 text-white">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  className="text-white border border-gray-500"
                >
                  <MenuItem  value={10}>Comment</MenuItem>
                  <MenuItem value={30}>Post</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <StyledTextField
                variant="outlined"
                label="Post Title"
                className="mt-5 w-full m-auto"
              />
            </div>
            <div className="mt-4 h-full">
              {/* <RichText /> */}
              <CustomRichText />
            </div>
            <div></div>
          </div>
          <div className=" px-4 py-3 absolute left-0 bottom-0 right-0">
            <AddPost />
            <div className="bg-gray-50  sm:flex sm:flex-row-reverse bg-light-primary mt-3">
              <Button
                variant="contained"
                className="bg-gradient-to-t from-blue-800 to-blue w-3/4 mt-2 bg-primary w-full ml-2"
              >
                Post
              </Button>
              <Button
                variant="contained"
                className="bg-dark-primary w-3/4 mt-2 bg-primary w-full mr-2"
              >
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateArticlePage.getLayout = function getLayout(
  CreateArticlePage: ReactElement
) {
  return <Layout>{CreateArticlePage}</Layout>;
};
