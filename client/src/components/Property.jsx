import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";

const Property = ({ loggedInUserId }) => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/properties/${id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setProperty(data);
      });
  }, [id]);
  return (
    <div className="p-6">
      <img
        className="w-full h-[600px] object-cover rounded-lg"
        src={property.image}
        alt={property.name}
      />
      <div>
        <div>
          <h1 className="text-3xl font-bold">{property.description}</h1>
          <div className="flex items-center">
            <GoLocation size={25} />
            <p className="text-xl">{property.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
