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
    <div>
      {properties.map((property) => {
        return (
          <Link to={`/property/${property.id}`}>
            <div key={property.id}>
              <h1>{property.name}</h1>
              <p>{property.description}</p>
              <p>{property.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllProperties;
