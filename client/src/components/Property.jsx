import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { GiResize } from "react-icons/gi";
import { BsFillCarFrontFill } from "react-icons/bs";

const Property = ({ loggedInUserId }) => {
  const { id } = useParams();
  console.log(loggedInUserId);
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/properties/${id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setProperty(data);
      });
  }, [id]);

  const handleSubmit = () => {
    fetch("http://127.0.0.1:3000/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        property_id: id,
        user_id: loggedInUserId,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-6">
      <img
        className="w-full h-[600px] object-cover rounded-lg"
        src={property.image}
        alt={property.name}
      />
      <div className="flex justify-between p-6">
        <div>
          <h1 className="text-3xl font-bold">{property.description}</h1>
          <div className="flex items-center">
            <GoLocation size={25} />
            <p className="text-xl">{property.address}</p>
          </div>
          <p>{property.description}</p>
        </div>

        <div>
          <h1>Brief info</h1>
          owner: Real estate agency
          <div className="flex">
            <div className="flex">
              <MdOutlineBedroomChild size={25} />
              <p>{property.bedrooms}</p>
            </div>
            <div className="flex">
              <BiBath />
              <p>{property.bathrooms}</p>
            </div>
            <div>
              <BsFillCarFrontFill />
            </div>
            <div className="flex">
              <GiResize />
              <p>{property.size}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mr-6">
              <p className="text-xl">1 day rental:</p>
              <p className="text-xl">
                $3000/<span className="text-[#A9A9A9]">Night</span>
              </p>
            </div>
            <div className="">
              <p className="text-xl">Week rental:</p>
              <p className="text-xl">
                $2000/<span className="text-[#A9A9A9]">Night</span>
              </p>
            </div>
          </div>
          <div className="pt-4">
            <button
              className="bg-[#0d0907] p-3 rounded-md text-white"
              onClick={handleSubmit}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
