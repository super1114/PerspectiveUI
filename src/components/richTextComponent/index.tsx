import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
const RichText = () => {
  const save = (data: string) => {
    console.log(data);
  };
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  return (
    <>
      <div className="bg-dark-primary max-h-96 overflow-hidden">
        <SunEditor />
      </div>
    </>
  );
};

export default RichText;



