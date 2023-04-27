import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const AddProperty = () => {
  const reference = useRef();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price_per_day, setPrice_per_day] = useState("");
  const [price_per_week, setPrice_per_week] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [parking, setParking] = useState("");
  const [size, setSize] = useState("");
  const [property_type, setProperty_type] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const uploadProductPicture = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
      });
  };

  const AddPropertyFunctionality = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        address,
        price_per_day,
        price_per_week,
        bedrooms,
        bathrooms,
        parking,
        size,
        property_type,
        image,
        price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(
          "Your house has been added successfully! Redirecting to home page...",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        setTimeout(() => {
          navigate("/");
        }, 3500);
      });
  };
  return (
    <div className="pt-24 kulim-park">
      <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={AddPropertyFunctionality}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Image
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="text-sm text-gray-600" ref={reference}>
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-blue-900 focus-within:outline-none "
                        >
                          <span>Add your product's image</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            accept="image/*"
                            type="file"
                            className="sr-only"
                            onChange={(e) =>
                              uploadProductPicture(e.target.files)
                            }
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter house name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter house address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    price per Week
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter price per week"
                      value={price_per_week}
                      onChange={(e) => setPrice_per_week(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    price per day
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter house name"
                      value={price_per_day}
                      onChange={(e) => setPrice_per_day(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Bedrooms
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter number of bedrooms"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Washrooms
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter number of washrooms"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Parking
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Number of parking slots"
                      value={parking}
                      onChange={(e) => setParking(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Description of the product
                  </label>
                  <div className="mt-1">
                    <textarea
                      type={"text"}
                      className=" border border-gray-300 h-[100px]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Description of the house"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Price
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="2000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  {image !== "" &&
                  price !== "" &&
                  description !== "" &&
                  name !== "" ? (
                    <button
                      type="submit"
                      className=" text-center rounded-md border border-transparent  bg-blue-600 py-2 px-4  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add Product
                    </button>
                  ) : (
                    <button
                      type="button"
                      className=" text-center rounded-md border border-transparent  bg-blue-600 py-2 px-4  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add Your Product Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
