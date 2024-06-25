"use client";
import {  useState } from "react";

function Formr() {
  const [Name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const sendEmail = async () => {
    const res = fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({
        name: Name,
        profession: profession,
        email: email,
      }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: Name,
      profession: profession,
      email: email,
    };
    await sendEmail();

    console.log(data);
  };

  return (
    <div className="mt-10  flex text-center justify-center  ">
      <form
        className=" flex flex-col text-center justify-center gap-2 w-4/5 sm:w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center placeholder-shown:text-xl "
          type="text"
          value={Name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center placeholder-shown:text-xl "
          type="text"
          value={profession}
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
          required
        />
        <input
          className="h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center placeholder-shown:text-xl "
          type="text"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-black text-white h-14 p-2 rounded-lg text-xl  hover:animate-pulse hover:duration-500 "
          type="submit"
        >
          Join the waiting list{" "}
        </button>
      </form>
    </div>
  );
}

export default Formr;
