import React from "react";
import Card from "../../card";
import Tier1 from "../../../assets/images/Tier1.png";
import Tier2 from "../../../assets/images/Tier2.png";
import Tier3 from "../../../assets/images/Tier3.png";

const PricingSectionLandingPage = () => {
  return (
    <main className="PRICING-TITLE bg-gray-100 rounded-3xl pb-5 mb-32">
      <div className=" flex justify-center mb-20 bg-blue items-center py-2 pb-3 rounded-3xl">
        <h1 className=" font-black text-4xl tracking-widest text-white">
          PRICING
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20">
        <Card className="py-3">
          <Card.Body className="pt-3 pb-4 relative overflow-hidden group">
            <img
              src={Tier1}
              alt="tier-1-feature"
              className="w-80 h-60 rounded-2xl mb-2"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-semibold text-2xl">TIER 1 / Basic</h3>
              <hr className="w-40 border-2 border-blue" />
              <h3 className="font-semibold text-2xl">Rp. 10.000.000</h3>
            </div>

            <section className="p-4 w-full h-full absolute z-1 opacity-0 bg-black/50 flex items-center group-hover:opacity-100 transition-all duration-200 top-0 rounded-3xl">
              <div className="text-white text-xl font-semibold">
                <h2 className="text-2xl text-center font-bold tracking-wider">
                  FEATURING :
                </h2>
                <h3>1. Recording Incoming Goods</h3>
                <h3>2. Recording Outgoing Goods</h3>
                <h3>3. Recording Profit Results</h3>
              </div>
            </section>
          </Card.Body>
        </Card>

        <Card className="py-3">
          <Card.Body className="pt-3 pb-4 relative overflow-hidden group">
            <img
              src={Tier2}
              alt="tier-1-feature"
              className="w-80 h-60 rounded-2xl mb-2"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-semibold text-2xl">TIER 2 / Business</h3>
              <hr className="w-40 border-2 border-blue" />
              <h3 className="font-semibold text-2xl">Rp. 20.499.000</h3>
            </div>

            <section className="p-4 w-full h-full absolute z-1 opacity-0 bg-black/50 flex items-center group-hover:opacity-100 transition-all duration-200 top-0 rounded-3xl">
              <div className="text-white text-md font-semibold ">
                <h2 className="text-2xl text-center font-bold tracking-wider">
                  FEATURING :
                </h2>
                <h3>1. Recording Incoming and Outgoing Goods</h3>
                <h3>2. Recording Profits</h3>
                <h3>3. Can Analyze Sales Results With CHART</h3>
                <h3>4. 7x24 Hours of Support</h3>
              </div>
            </section>
          </Card.Body>
        </Card>

        <Card className="py-3">
          <Card.Body className="pt-3 pb-4 relative overflow-hidden group">
            <img
              src={Tier3}
              alt="tier-1-feature"
              className="w-80 h-60 rounded-2xl mb-2"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-semibold text-2xl">TIER 3 / Entrepreneur</h3>
              <hr className="w-40 border-2 border-blue" />
              <h3 className="font-semibold text-2xl">Rp. 49.999.000</h3>
            </div>

            <section className="p-4 w-full h-full absolute z-1 opacity-0 bg-black/50 flex items-center group-hover:opacity-100 transition-all duration-200 top-0 rounded-3xl">
              <div className="text-white text-md font-semibold ">
                <h2 className="text-2xl text-center font-bold tracking-wider">
                  FEATURING :
                </h2>
                <h3>1. Recording Incoming and Outgoing Goods</h3>
                <h3>2. Recording Profits</h3>
                <h3>3. Can Analyze Sales Results With CHART</h3>
                <h3>4. 7x24 Hours of Support</h3>
                <h3>5. Export data to Excel</h3>
                <h3>6. AI Income Prediction</h3>
              </div>
            </section>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
};

export default PricingSectionLandingPage;
