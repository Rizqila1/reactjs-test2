import React from "react";
import { Outlet } from "react-router-dom";
import Design from "../assets/images/design.png";

const LayoutLandingPage = () => {
  return (
    <main>
      <div className="absolute bg-gradient-to-b from-aquamarine to-blue w-[600px] h-[500px] rounded-br-[500px] rounded-bl-[150px] z-0 top-[-8rem] left-[-4rem]"></div>
      <img
        src={Design}
        alt="design"
        className="absolute w-[40rem] right-0 top-[50%] md:w-[30rem] sm:w-[25rem]"
      />
      <Outlet />
    </main>
  );
};

export default LayoutLandingPage;
