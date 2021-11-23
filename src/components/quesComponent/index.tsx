import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const MindQuestion: React.FC = ({}) => {
  return (
    <Paper
    className={`bg-light-primary w-full h-10`}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What’s on your mind, Kibriya?"
        inputProps={{ "aria-label": "search google maps" }}
        className="text-white"
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" className="text-black-500">
        <EmojiEmotionsIcon />
      </IconButton>
    </Paper>
  );
}

export default MindQuestion;
