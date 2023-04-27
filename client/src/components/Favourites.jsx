import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/favourites", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFavourites(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Booked houses</h1>
      <div className="grid grid-cols-3 gap-4 p-6">
        {favourites.map((favourite) => {
          return (
            <div key={favourite.property.id}>
              <h1>{favourite.property.name}</h1>
              <img src={favourite.property.image} alt={favourite.name} />
              <p>{favourite.property.description}</p>
              <p>{favourite.property.price}</p>
              <p>{favourite.property.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
