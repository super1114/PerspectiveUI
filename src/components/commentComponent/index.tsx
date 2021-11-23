import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from '@mui/icons-material/Mic';
const CommentWriter: React.FC = ({}) => {
  return (
    <Paper
      className={`bg-light-primary w-full h-10`}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write a message" 
        inputProps={{ "aria-label": "" }}
        className="text-white"
      />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="search"
        className="text-black-500"
      >
        <EmojiEmotionsIcon />
      </IconButton>
    </Paper>
  );
};

export default CommentWriter;
