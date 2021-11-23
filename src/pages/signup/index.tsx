import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
export default function SignUp() {
  const StyledTextField = styled(TextField)({
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

  return (
    <div className="bg-black w-full h-screen flex justify-center">
      <div className="bg-blue-500 w-40 h-40 rounded-full absolute top-0 left-1/4 -mt-10"></div>
      <div className="bg-gradient-to-tr from-transparent via-white to-transparent w-20 h-20 rounded-full absolute top-20 right-1/4"></div>
      <div className="flex flex-col m-auto w-1/4">
        <h2 className="text-white w-full text-center text-3xl">Sign in.</h2>
        <StyledTextField
          variant="outlined"
          label="Username"
          className="mt-5 w-3/4 m-auto"
        />
        <StyledTextField
          variant="outlined"
          label="Email"
          className="mt-5 w-3/4 m-auto"
        />
        <StyledTextField
          variant="outlined"
          label="Password"
          type="password"
          className="mt-5 w-3/4 m-auto"
        />
        <StyledTextField
          variant="outlined"
          label="Re-type Password"
          className="mt-5 w-3/4 m-auto"
          type="password"
        />
        <a href="/home" className="py-3 mt-5 w-3/4 m-auto">
          <Button
            variant="contained"
            component="span"
            className="py-3 mt-5 w-full m-auto"
          >
            Sign up
          </Button>
        </a>
        <h3 className="text-gray-500 w-full text-center mt-10 text-md">
          Do you have an account?{" "}
          <a href="/signin" className="text-white cursor-pointer">
            {" "}
            Sign in
          </a>
        </h3>
        <div className="flex-row flex justify-center mt-5">
          <GoogleIcon className="text-white cursor-pointer mr-2 text-3xl" />
          <FacebookIcon className="text-white cursor-pointer ml-2 text-3xl" />
        </div>
      </div>
    </div>
  );
}
