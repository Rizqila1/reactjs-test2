import React, { useState } from "react";
import Button from "./button";
import Sidebar from "./sidebar";

const NavbarLandingPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  function isShow() {
    if (showSidebar === false) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }

  return (
    <main>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="flex justify-end items-center gap-12 relative font-black text-3xl md:hidden sm:hidden">
        <h1 className="NAVBAR-MENU">ABOUT</h1>
        <h1 className="NAVBAR-MENU">PRICING</h1>
        <h1 className="NAVBAR-MENU">CONTACT</h1>
        <Button
          variant="white"
          className="LOGIN text-aquamarine text-xl px-16 rounded-xl"
          href="/login"
        >
          Login
        </Button>
      </div>

      <Button
        variant="blue"
        className="lg:hidden py-4 px-6 font-black text-2xl rounded-2xl"
        onClick={() => {
          isShow();
        }}
      >
        =
      </Button>
    </main>
  );
};

export default NavbarLandingPage;
