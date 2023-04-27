import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
function SignUp({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          phone_number,
          first_name,
          last_name,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="hero">
        <div className="bg-black bg-opacity-80 w-[100%] md:w-[50%] ">
          <h1 className="text-center text-white pt-24 text-4xl">
            Please Sign Up to get started!
          </h1>
          <form className="flex flex-col">
            <input
              className=" bg-black bg-opacity-90 p-2 mt-10 mx-9 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />

            <input
              className=" bg-black bg-opacity-90 p-2 mx-9 mt-4 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className=" bg-black bg-opacity-90 p-2 mx-9 mt-4 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="number"
              name="phone"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            />

            <input
              className=" bg-black bg-opacity-90 p-2 mx-9 mt-4 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="text"
              name="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              className=" bg-black bg-opacity-90 p-2 mx-9 mt-4 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="text"
              name="last_name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />

            <input
              className=" bg-black bg-opacity-90 p-2 mx-9 mt-4 md:mx-36 border-2 border-[#aaa] rounded-3xl text-[#bbb]"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              className="text-white bg-[#0d5b72] mx-auto mt-7 rounded-3xl p-3 w-80"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <button
              className="text-[#bbb] border-2 border-[#aaa]  w-80 mx-auto mt-7 rounded-3xl p-3 "
              onClick={handleSubmit}
            >
              <div className="flex align-center justify-center">
                <FcGoogle size={25} />
                <span className="ml-2">Sign up with Google</span>
              </div>
            </button>

            <button
              className="text-[#bbb] border-2 border-[#aaa]  w-80 mx-auto mt-7 rounded-3xl p-3"
              onClick={handleSubmit}
            >
              <div className="flex align-center justify-center">
                <BsApple size={25} />
                <span className="ml-2">Sign up with Apple</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
