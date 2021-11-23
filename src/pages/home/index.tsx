import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import HeaderComponent from "../../components/headerComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { blogData } from "../../data/staticdata";
const styles = require('./home.module.scss');
export default function HomePage() {
  return(
  <div className="w-full flex justify-center pt-10 container">
    <div className="w-3/4">
    <HeaderComponent />
    <div className={`overflow-y-scroll  mt-5 ${styles.container}`}>
        {blogData.map((data, idx) => (
          <div className="bg-dark-primary rounded-md p-5 mb-5" key={idx}>
            <div className="bg-dark-primary rounded-md p-5 flex justify-between ">
              <img src={data.img} className="w-1/2" />
              <div className="flex flex-col w-1/2 text-white px-10">
                <h2 className="text-3xl">{data.title}</h2>
                <h5 className="text-xl text-gray-400">{data.category}</h5>
                <p className="text-gray-600">{data.content}</p>
                <h3 className="underline">See more</h3>
                <div className="h-1 bg-white w-full mt-2"></div>
                <div className="flex flex-row justify-between pt-3">
                  <div className="w-1/2 flex flex-row">
                    <FavoriteIcon />
                    <h4 className="ml-2">{data.like} Likes</h4>
                  </div>
                  <div className="w-1/2 flex flex-row">
                    <InsertCommentIcon />
                    <h4 className="ml-2">{data.comment} Comments</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>);
}
HomePage.getLayout = function getLayout(HomePage: ReactElement) {
  return <Layout>{HomePage}</Layout>;
};
