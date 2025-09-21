import React from "react";
import home from "../../assets/home.jpg";

const Home = () => {
  return (
    <div className="bg-white p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to Our Shop</h1>
        <h2 className="text-lg text-gray-600">Best Deals! Best Prices!</h2>
        <img
          className="h-[400px] mx-auto rounded-xl shadow-md"
          src={home}
          alt="home"
        />
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Latest Collection
        </button>
      </div>
    </div>
  );
};

export default Home;
