import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import { draftData,  } from "../../data/staticdata";

import Search from "../../components/searchComponent";
import DraftItem from "../../components/draftItemComponent";

const styles = require("./draft.module.scss");

export default function TopicPage() {
  return (
    <div className={`w-full m-3 bg-dark-primary rounded-lg p-5`}>
      <h3 className="text-white text-xl mb-3">Drafts</h3>
      <div className="w-2/3 mb-4">
      <Search />
      </div>
      <div className={`${styles.container}`}>
        <div className="col-start-10 col-span-3 bg-light-primary rounded-md">
          <div className={`overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-10 py-3 ${styles.itemContainer}`}>
            {draftData.map((data, idx) => (
              <DraftItem data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

TopicPage.getLayout = function getLayout(TopicPage: ReactElement) {
  return <Layout>{TopicPage}</Layout>;
};
