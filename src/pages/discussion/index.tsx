import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import { discussionData, topicData } from "../../data/staticdata";
import Avatar from "@mui/material/Avatar";

import Search from "../../components/searchComponent";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TopicItem from "../../components/topicItemComponent";
import FavTopicItem from "../../components/favTopicItemComponent";
import DiscussionItem from "../../components/discussionComponent";

const styles = require("./discussion.module.scss");

export default function DiscussionPage() {
  return (
    <div className={`w-full m-3 bg-dark-primary rounded-lg p-3`}>
      <h3 className="text-white text-xl mb-3">Topics</h3>
      <div className={`grid grid-cols-12 gap-3 ${styles.container}`}>
        <div className="col-start-1 col-span-9 ">
          <Search />
          <div
            className={`overflow-y-scroll bg-light-primary mt-2 px-5 py-3 ${styles.itemContainer}`}
          >
            {discussionData.map((data, idx) => (
              <DiscussionItem data={data} key={idx} index={idx} />
            ))}
          </div>
        </div>
        <div className="col-start-10 col-span-3 bg-light-primary">
          <div className="flex items-center flex-row p-3">
            <StarIcon className="text-white" />
            <h4 className="text-white ml-2">Favourite Topics</h4>
          </div>
          <div className={`overflow-y-scroll ${styles.itemContainer}`}>
            {topicData.map((data, idx) => (
              <FavTopicItem data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

DiscussionPage.getLayout = function getLayout(DiscussionPage: ReactElement) {
  return <Layout>{DiscussionPage}</Layout>;
};
