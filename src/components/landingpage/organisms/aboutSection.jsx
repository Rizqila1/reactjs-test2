import React from "react";

const AboutSectionLandingPage = () => {
  return (
    <main>
      <div className="flex flex-col gap-2 mb-40">
        <h1 className="ABOUT font-black text-4xl tracking-widest">ABOUT</h1>
        <hr className="LINE border-2 border-blue" />
        <h4 className="text-xl font-semibold pe-[28rem] md:pe-[10rem] sm:pe-0">
          At ERP.Corp, we believe that the heartbeat of a thriving enterprise
          lies in its ability to adapt, evolve, and streamline its operations.
          With a deep understanding of diverse industries, we've crafted an ERP
          system that empowers businesses of all sizes to navigate the modern
          landscape with confidence. <br /> <br /> Our Vision: We envision a
          world where businesses operate at peak efficiency, leveraging
          technology to propel them toward unparalleled success. Our mission is
          to be the catalyst for this transformation, providing a robust ERP
          solution that simplifies processes, enhances collaboration, and fuels
          strategic decision-making.
        </h4>
      </div>
    </main>
  );
};

export default AboutSectionLandingPage;
