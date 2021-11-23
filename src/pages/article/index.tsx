import Layout from "../../layouts/layout";
import type { ReactElement } from "react";
import HeaderComponent from "../../components/headerComponent";
import {
  articleData,
  selectableButtons,
  selectedButtons,
  trandingData,
} from "../../data/staticdata";
import Button from "@mui/material/Button";
import DateRangeIcon from '@mui/icons-material/DateRange';
export default function ArticlePage() {
  return (
    <div className="w-11/12 mx-auto bg-dark-primary  rounded-lg mt-10 ">
      <div className="grid grid-cols-3  gap-4 p-5">
        {trandingData.map((data, idx) => (
          <div key={idx} className="flex m-3">
            <div className="text-xl font-bold text-gray-700">0{idx + 1}</div>
            <div className="flex flex-col ml-1">
              <div className="flex items-center">
                <img src={data.img} className="w-8" />
                <h4 className="text-gray-500 text-mm ml-2">{data.category}</h4>
              </div>
              <h3 className="text-xl text-white">{data.title}</h3>
              <h4 className="text-mm text-gray-400">{data.date}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-500 h-m"></div>
      <div className="grid grid-cols-10  gap-4">
        <div className="col-start-1 col-span-8 grid grid-cols-2 p-5">
          {articleData.map((data, idx) => (
            <div className="m-3" key={idx}>
              <div className="flex items-center">
                <img src={data.userimg} />
                <h3 className="ml-3 text-gray-500 text-md">{data.name}</h3>
              </div>
              <h2 className="text-white text-2xl mt-2">{data.title}</h2>
              <p className="text-gray-500 text-md mt-3">{data.content}</p>
              <div className="items-center flex justify-between mt-4">
                <div className="flex">
                  <h4 className="text-gray-300">{data.date}</h4>
                  <Button
                    className="text-mm bg-light-primary m-1 h-5 ml-3"
                    variant="contained"
                    key={idx}
                  >
                    Demo
                  </Button>
                </div>
                <Button
                    className="text-mm bg-light-primary m-1 "
                    variant="contained"
                    key={idx}
                  >
                    <DateRangeIcon />
                  </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-gray-400 border-l col-span-2 col-start-9 p-2">
          <div>
            <h2 className="text-white text-md mx-2">
              DISCOVER MORE OF WHAT MATTERS TO YOU
            </h2>
            {selectableButtons.map((data, idx) => (
              <Button
                className="text-mm bg-light-primary m-1 h-7"
                variant="contained"
                key={idx}
              >
                {data}
              </Button>
            ))}
          </div>
          <div className="mt-5">
            {selectedButtons.map((data, idx) => (
              <Button
                variant="text"
                className="text-gray-500 text-mm m-1 h-7"
                key={idx}
              >
                {data}
              </Button>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

ArticlePage.getLayout = function getLayout(ArticlePage: ReactElement) {
  return <Layout>{ArticlePage}</Layout>;
};
