import React from 'react';

const Description = () => {
  return (
    <div className=" p-2 bg-white rounded-lg shadow-md mb-20 w-[900px] ml-50">
      
      {/* Tabs */}
      <div className="flex border-gray-300  mb-4 ">
        <div className="p-2 font-semibold border-b-2 border-blue-500 text-blue-500">
          Description
        </div>
        <div className="px-4 py-2 font-semibold text-gray-600">
          Review (135)
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4 ">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium reiciendis exercitationem amet totam nisi ullam cumque fugit magnam laudantium...</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloremque facilis neque non nihil quam veritatis a...</p>
      </div>
      
    </div>
  )
}

export default Description;
