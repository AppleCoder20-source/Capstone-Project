import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-center py-20">
      <h1 className="text-5xl font-bold text-white">
        <Typewriter
          options={{
            strings: [
              "Meet Your...",
              "Introducing...",
              "Your Personal",
              "AI Coach",
            ],
            autoStart: true,
            loop: false,
            pauseFor: 3000,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      </h1>
      <p className="mt-4 text-2xl text-white">
        <Typewriter
          options={{
            strings: ["drum roll please", "Any Career, anywhere"],
            pauseFor: 3000,
            deleteSpeed: 50,
            autoStart: true,
            loop: false,
          }}
        />
      </p>
      <button className="mt-6 bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
        <Link to = '/signup'>Get Started</Link>
      </button>
    </section>
  );
};

export default HeroSection;
