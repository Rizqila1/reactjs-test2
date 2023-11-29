import React from "react";
import Card from "../components/card";
import Button from "../components/button";

const LoginPage = () => {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen">
      <Card className="border-gray-300 p-10 mb-5">
        <Card.Title className="font-bold text-2xl mb-5 p-0">Login</Card.Title>
        <Card.Body>
          <div className="flex flex-col items-center gap-3">
            <input
              placeholder="Your email"
              className="w-full border-2 border-gray-200 rounded-2xl py-2 px-7 font-semibold text-[#3D4C5B]"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full border-2 border-gray-200 rounded-2xl py-2 px-7 font-semibold text-[#3D4C5B]"
            />

            <Button
              variant="blue"
              className="rounded-xl px-5 py-2 font-semibold mt-2"
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Button variant="blue" className="rounded-xl font-semibold" href="/">
        Back to Landing Page
      </Button>
    </main>
  );
};

export default LoginPage;
