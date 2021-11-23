import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import { subTopicData } from "../../data/staticdata";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
const styles = require("./topic.module.scss");

export default function TopicPage() {
  return (
    <div className={`w-full m-3 bg-dark-primary rounded-lg p-3`}>
      <h3 className="text-white text-xl mb-3">Topics</h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-scroll ${styles.container}`}
      >
        {subTopicData.map((data, idx) => (
          <div className="bg-light-primary rounded-lg p-3" key={idx}>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {}}
            >
              <Avatar src={data.img} variant="rounded" />
              <div className="flex flex-col ml-3">
                <h3 className="text-white text-md">
                  <Link href="/topicdetail">{data.name}</Link>
                </h3>
                <div className="text-mm text-gray-300 flex items-center">
                  <h4>{data.date}</h4>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <LanguageIcon className="text-gray-400 text-sm" />
                  </IconButton>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

TopicPage.getLayout = function getLayout(TopicPage: ReactElement) {
  return <Layout>{TopicPage}</Layout>;
};
