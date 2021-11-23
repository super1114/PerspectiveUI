import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
export const DarkTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
      {
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


  export const PrimaryTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: "gray",
      },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: "gray",
      },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: "gray",
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

