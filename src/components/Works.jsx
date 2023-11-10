import React from "react";

const Works = () => {
  return (
    <div className="p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-bold text-gray-500">
          We create World-CLass Digital Products
        </h1>
        <p>
          By information about desing the world to the best instructors , heact
          helping By information
        </p>
      </div>
      {/* trabajos */}
      <div className="grid grid-flow-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-2">
          <img src="work1.png" className="w-full rounded-3xl" />
          <p className="text-gray-500"> App desing -June 20 , 2022</p>
          <h3 className="text-2xl font-bold">App Redesing</h3>
          <p className="text-gray-500">
            By information about desing the world to the best instructors ,
            heact helping By information about desing the world to the best
            instrctors, heatc helping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="work2.png" className="w-full rounded-3xl" />
            <p className="text-gray-500"> App desing -June 22 , 2022</p>
            <h3 className="text-2xl font-bold">Redesing channel website landing page</h3>
          </div>
          <div>
            <img src="work2.png" className="w-full rounded-3xl" />
            <p className="text-gray-500"> App desing -June 22 , 2022</p>
            <h3 className="text-2xl font-bold">Redesing channel website landing page</h3>
          </div>
          <div>
            <img src="work2.png" className="w-full rounded-3xl" />
            <p className="text-gray-500"> App desing -June 22 , 2022</p>
            <h3 className="text-2xl font-bold">Redesing channel website landing page</h3>
          </div>
          <div>
            <img src="work2.png" className="w-full rounded-3xl" />
            <p className="text-gray-500"> App desing -June 22 , 2022</p>
            <h3 className="text-2xl font-bold">Redesing channel website landing page</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
