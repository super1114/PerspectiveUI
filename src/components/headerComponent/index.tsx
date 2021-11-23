import Avatar from "@mui/material/Avatar";
import MindQuestion from "../quesComponent";

var Scroll = require("react-scroll");


export default function HeaderComponent() {
  return (
    <div className="">
      <div className="bg-dark-primary rounded-md p-5">
        <div className="flex flex-row items-center">
          <Avatar
            src="/assets/images/user_7.png"
            sx={{ width: 70, height: 70 }}
            className="mr-4"
          />
          <MindQuestion />
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-row p-2">
            <img src="/assets/images/ico_live.png" />
            <h3 className="text-white text-lg ml-2">Live Video</h3>
          </div>
          <div className="flex flex-row p-2">
            <img src="/assets/images/ico_photo.png" />
            <h3 className="text-white text-lg ml-2">Phots/Videos</h3>
          </div>
          <div className="flex flex-row p-2">
            <img src="/assets/images/ico_happy.png" />
            <h3 className="text-white text-lg ml-2">Feelings/Activity</h3>
          </div>
          <div></div>
        </div>
      </div>
      
    </div>
  );
}
