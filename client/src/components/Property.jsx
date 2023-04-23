import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Property = ({loggedInUserId}) => {
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
    <div>
      <h1>{property.description}</h1>
    </div>
  );
};

export default Property;
