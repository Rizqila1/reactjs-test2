import React from "react";
import Logo from "../assets/images/ERP.png";
import NavbarLandingPage from "../components/navbar";
import AboutSectionLandingPage from "../components/landingpage/organisms/aboutSection";
import Vector from "../assets/images/undraw.png";
import PricingSectionLandingPage from "../components/landingpage/organisms/pricingSection";
import ContactUsSectionLandingPage from "../components/landingpage/organisms/contactusSection";
import Footer from "../components/footer";
import "../assets/css/landing-page.css";

const LandingPage = () => {
  return (
    <main className="relative px-8 py-4">
      <div className="flex items-center mb-28">
        <img src={Logo} alt="logo" className="w-40 h-fit" />
        <div className="text-white font-bold text-5xl px-8">HOME</div>
        <div className="w-full flex justify-end">
          <NavbarLandingPage />
        </div>
      </div>

      <section className="relative flex justify-center items-center">
        <div className="relative ps-[30rem] pe-20 md:ps-[22rem] sm:ps-[22rem]">
          <h4 className="TEXT-DESC text-xl font-semibold text-center md:text-lg sm:line-clamp-5">
            Welcome to ERP.Corp, where efficiency meets innovation in business
            management. Our ERP (Enterprise Resource Planning) website is your
            gateway to a seamlessly integrated solution designed to streamline
            and optimize every facet of your organization.
          </h4>
        </div>
      </section>

      <div className="py-40">
        <h4 className="TEXT-M text-xl font-semibold pe-[28rem]">
          Discover the power of a well-integrated business management solution.
        </h4>
        <img
          src={Vector}
          alt="vector-png"
          className="w-[25rem] pt-20 rounded-3xl sm:w-[18rem]"
        />
      </div>

      <AboutSectionLandingPage />
      <PricingSectionLandingPage />
      <ContactUsSectionLandingPage />

      <Footer />
    </main>
  );
};

export default LandingPage;
