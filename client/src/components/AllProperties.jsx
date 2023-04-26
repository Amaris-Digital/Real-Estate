import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {properties.map((property) => {
        return (
          <Link to={`/property/${property.id}`} key={property.id}>
            <div key={property.id} className="bg-[#f5f5f5]">
              <img src={property.image} alt={property.name} />
              <h1 className="text-xl">{property.name}</h1>
              <div className="flex justify-between p-6">
                <p>{property.description}</p>
                <p>{property.price}</p>
              </div>
              <p className="pl-6">{property.address}</p>
              <p className="pl-6">{property.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllProperties;
