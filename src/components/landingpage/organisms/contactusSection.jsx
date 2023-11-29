import React from "react";

const ContactUsSectionLandingPage = () => {
  return (
    <main>
      <div className="flex flex-col gap-2 mb-40">
        <h1 className="TITLE-CONTACTUS font-black text-4xl tracking-widest">
          CONTACT US
        </h1>
        <hr className="LINE-CONTACTUS border-2 border-blue mb-10" />
        <section className="text-xl font-semibold flex flex-wrap gap-16 items-center justify-start">
          <div>
            <h2 className="text-2xl font-bold">General Inquiries</h2>
            <h3>Email: example@yourcompany.com</h3>
            <h3>Phone: +628954725145</h3>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Sales Department</h2>
            <h3>Email: example@yourcompany.com</h3>
            <h3>Phone: +628921233212</h3>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Customer Support</h2>
            <h3>Email: example@yourcompany.com</h3>
            <h3>Phone: +628122154785</h3>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Technical Assistance</h2>
            <h3>Email: example@yourcompany.com</h3>
            <h3>Phone: +6281245781245</h3>
          </div>
        </section>

        <section className="text-xl font-semibold flex flex-wrap gap-5 items-center justify-start"></section>
      </div>
    </main>
  );
};

export default ContactUsSectionLandingPage;
