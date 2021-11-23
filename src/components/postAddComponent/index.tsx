import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
const AddPost: React.FC = ({}) => {
  return (
    <Paper
    className={`bg-dark-primary w-full h-10 z-10 border-gray-600 border mt-4`}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add your post"
        inputProps={{ "aria-label": "search google maps" }}
        className="text-white"
      />
      <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" className="text-gray-500">
        <img className="w-5" src="/assets/images/ico_photo.png" />
      </IconButton>
      <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" className="text-gray-500">
        <img className="w-5" src="/assets/images/ico_user.png" />
      </IconButton>
      <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" className="text-gray-500">
        <img className="w-5" src="/assets/images/ico_happy.png" />
      </IconButton>
      <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" className="text-gray-500">
        <img className="w-5" src="/assets/images/ico_location.png" />
      </IconButton>
      <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" className="text-gray-500">
        <img className="w-5" src="/assets/images/ico_mic.png" />
      </IconButton>
    </Paper>
  );
}

export default AddPost;
