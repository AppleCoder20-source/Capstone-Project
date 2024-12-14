import React from 'react'

const Testimonial = () => {
  return (
    <section className="text-center px-8 py-16 bg-indigo-500 text-gray-800">
    <h2 className="text-4xl font-bold text-black">What Our Users Say</h2>
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
  )
}

export default Testimonial;
