import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";

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
            <div className="bg-slate-100" key={favourite.property.id}>
              <img src={favourite.property.image} alt={favourite.name} />
              <div className="p-4">
                <h1 className="text-4xl font-bold pt-2">
                  {favourite.property.name}
                </h1>
                <div className="flex pt-4 text-center">
                  <BsCashCoin className="mt-2 mr-3" size={25} />
                  <p className="text-2xl">{favourite.property.price}</p>
                </div>
                <p className="mt-2">{favourite.property.description}</p>
                <p>{favourite.property.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
