import { useState } from "react";
import AuthComponent from "../../components/authComponent";
import { Navbar } from "../../layouts/navbar";
import styles from "./landingpage.module.scss";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.main} w-full h-screen flex justify-center`}>
        <div className="m-auto xl:w-1/4 lg:w-1/3 w-1/2">
          <AuthComponent />
        </div>
      </div>
    </div>
  );
}
