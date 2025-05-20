import React from 'react';

const Quote = () => {
  return (
    <div className="py-16 bg-white lg:p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column */}
          <div className="lg:w-5/12">
            <h6 className=" mb-3 text-blue-400 uppercase font-bold">Get A Quote</h6>
            <h1 className="text-5xl md:text-4xl font-bold mb-6">Request A Free Quote!</h1>
            <p className="text-gray-600 mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam
              et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.
            </p>
            <div className="flex items-center">
              <div className="bg-primary text-white p-5">
                <i className="fa fa-headphones fa-2x"></i>
              </div>
              <div className="ml-4">
                <h6 className="text-gray-700 text-lg">Call for any query!</h6>
                <h3 className="text-primary font-bold text-2xl">+012 345 6789</h3>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:w-7/12 bg-gray-100 p-8  ">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Your Mobile"
                  className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:border-primary"
                />
                <select
                  className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select A Freight
                  </option>
                  <option value="1">Freight 1</option>
                  <option value="2">Freight 2</option>
                  <option value="3">Freight 3</option>
                </select>
                <textarea
                  rows="4"
                  placeholder="Special Note"
                  className="col-span-1 sm:col-span-2 w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-primary text-dark py-4 px-6  --color-primary-400 hover:--color-primary-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
