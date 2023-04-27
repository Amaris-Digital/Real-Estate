import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { GiResize } from "react-icons/gi";
import { BsFillCarFrontFill } from "react-icons/bs";

const Property = ({ loggedInUserId }) => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  //sending the information to the backend

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
    <div className="relative px-8">
      {showModal && (
        <div className="fixed kulim-park inset-0 bg-opacity-50 z-10 flex  items-center justify-center w-[700px] mx-auto">
          <div className="bg-white p-12 rounded-lg">
            <div className="flex justify-end">
              <button
                className="bg-[#0d0907] mb-4 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>

            <h2 className="text-5xl font-bold mb-2 text-center">
              Book the ${property.name}
            </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 font-bold text-lg text-gray-900">
                    Name
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label className="mb-2 font-bold text-lg text-gray-900">
                    Email
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-800"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />

                  <label className="mb-2 font-bold text-lg text-gray-900">
                    Phone
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    placeholder="Phone"
                    required
                  />

                  <label className="mb-2 font-bold text-lg text-gray-900">
                    Message
                  </label>
                  <textarea
                    className="border py-2 px-3 text-grey-800"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    name="message"
                    placeholder="Message"
                  />

                  <button
                    className="block bg-[#0d0907] mt-4 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute inset-0 filter ${
          showModal ? "blur-sm" : "blur-none"
        }`}
      >
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
                  <BiBath size={25} />
                  <p>{property.bathrooms}</p>
                </div>
                <div>
                  <BsFillCarFrontFill size={25} />
                </div>
                <div className="flex">
                  <GiResize size={25} />
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
                  onClick={() => setShowModal(true)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
