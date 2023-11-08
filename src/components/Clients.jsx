import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-medium text-gray-800">Trusted By greatest companies</h1>
      <div className="flex items-center gap-20">
        <img src="google.png" className="w-40" />
        <img src="airbnb.png" className="w-40" />
        <img src="amazon.png" className="w-40" />
        <img src="shopify.svg" className="w-40" />
        <img src="elektra.svg" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
