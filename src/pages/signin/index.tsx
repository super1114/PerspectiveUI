import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
export default function SignIn() {
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
        <Button
          variant="outlined"
          className="text-white border-white text-small mt-5 py-3 w-3/4 m-auto"
          startIcon={<GoogleIcon className="text-white" />}
        >
          Connect with Google
        </Button>
        <Button
          variant="outlined"
          className="text-white border-white mt-5 py-3 w-3/4 m-auto"
          startIcon={<FacebookIcon className="text-white" />}
        >
          Connect with Facebook
        </Button>
        <h1 className="text-center mt-5 text-white text-2xl  w-3/4 m-auto">or</h1>
        <StyledTextField variant="outlined" label="Email" className="mt-5 w-3/4 m-auto" />
        <StyledTextField variant="outlined" label="password" className="mt-5 w-3/4 m-auto" type="password" />
        <a href="/home" className="py-3 mt-5 w-3/4 m-auto">
        <Button variant="contained" component="span" className="w-full h-full">
          Sign in
        </Button>
        </a>
        <h3 className="text-gray-500 w-full text-center mt-10 text-md">Don't have an account?  <a href="/signup" className="text-white cursor-pointer"> Create Account</a></h3>
        <h3 className="text-white text-center mt-5 text-xl">Forgot Password</h3>
      </div>
    </div>
  );
}
