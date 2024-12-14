import React from 'react';
import Typewriter from 'typewriter-effect'; 

export const Home = () => {
    return (
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-center py-20">
          <h1 className="text-5xl font-bold text-white">
          <Typewriter
            options={{
              strings: 
              ["Meet Your...",
                "Introducing...",
                "Your Personal",
                "AI Coach",
              ],
              autoStart: true,
              loop:false,
              pauseFor:3000,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h1>
            <p className="mt-4 text-2xl text-white">
              <Typewriter
                options={{
                  strings: [
                    "drum roll please",
                    "Any Career, anywhere",
                  ],
                  pauseFor: 3000,
                  deleteSpeed: 50,
                  autoStart: true,
                  loop: false,
                
                }}
              />
            </p>
            <button className="mt-6 bg-indigo text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </section>
    
          {/* Why Choose Us Section */}
          <section className="text-center px-8 py-16 bg-indigo-500 text-gray-800">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="mt-4 text-lg">
              Our AI Finance Coach combines cutting-edge AI technology with expert financial insights to help you achieve your goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Personalized Plans</h3>
                <p className="mt-4">Custom-tailored financial strategies for your goals.</p>
              </div>
              <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Trained and reviewed</h3>
                <p className="mt-4">Trained by over 100s of finance professionals!</p>
              </div>
              <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">24/7 Support</h3>
                <p className="mt-4">Always here to answer your questions and guide you.</p>
              </div>
            </div>
          </section>
    
          {/* Features Section */}
          <section className="bg-indigo-50 px-8 py-16">
            <h2 className="text-4xl font-bold text-center text-indigo-600">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/100" alt="Icon 1" className="mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Budget Tracking</h3>
                <p className="mt-2">Track your income and expenses with ease.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/100" alt="Icon 2" className="mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Investment Tips</h3>
                <p className="mt-2">AI-powered investment advice for better returns.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/100" alt="Icon 3" className="mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Goal Setting</h3>
                <p className="mt-2">Set and achieve your short and long-term goals.</p>
              </div>
            </div>
          </section>
    
          {/* Testimonial Section */}
          <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-center px-8 py-16">
            <h2 className="text-4xl font-bold text-indigo-600">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"This AI Coach helped me save thousands in just 6 months!"</p>
                <h4 className="mt-4 font-bold">- John Doe</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"I finally understand where my money is going and how to manage it."</p>
                <h4 className="mt-4 font-bold">- Jane Smith</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"Investing has never been easier thanks to this tool!"</p>
                <h4 className="mt-4 font-bold">- Chris Johnson</h4>
              </div>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="text-center px-8 py-16 bg-indigo-600 text-white">
            <h2 className="text-4xl font-bold">Ready to Take Control of Your Finances?</h2>
            <p className="mt-4 text-lg">Sign up today and start your journey to financial freedom with our AI Coach.</p>
            <button className="mt-6 bg-yellow-400 text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
              Sign Up Now
            </button>
          </section>
        </div>
      );
    };

