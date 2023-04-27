import React from "react";

const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="border-2 p-3">
        <div className="flex justify-between">
          <p className="text-xl ">Filter</p>
          <button className="border-2 rounded-md ">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
