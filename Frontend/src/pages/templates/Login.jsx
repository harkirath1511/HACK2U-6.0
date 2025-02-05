"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams.jsx";
import LampDemo from "../../components/LampDemo.jsx";
import { SignupFormDemo } from "../../components/SignupFormDemo.jsx";

function BackgroundBeamsDemo() {
  return (
    <div className="h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      {/* Wrap LampDemo and SignupFormDemo in a container with a custom gap */}
      <div className="flex flex-col items-center gap-[-1rem]">
        <LampDemo />
        <SignupFormDemo />
      </div>
      
      <div className="max-w-2xl mx-auto p-4"> 
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700" 
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default BackgroundBeamsDemo;
