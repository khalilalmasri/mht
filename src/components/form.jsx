"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Formr() {
  const { t } = useTranslation("global");
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
    <div className=" SamsungOne-700 mt-6 sm:mt-10  flex text-center justify-center ">
      <form
        className=" flex flex-col text-center justify-center gap-2 w-4/5 sm:w-2/3"
        onSubmit={handleSubmit}
      >
        <input
          className="sm:h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center sm:placeholder-shown:text-xl "
          type="text"
          value={Name}
          placeholder={t("form.Name")}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="sm:h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center sm:placeholder-shown:text-xl "
          type="text"
          value={profession}
          placeholder={t("form.Profession")}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
        <input
          className="sm:h-14 p-2 rounded-lg placeholder-shown:border-gray-500 placeholder-shown:text-center sm:placeholder-shown:text-xl "
          type="text"
          value={email}
          placeholder={t("form.Email_address")}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-black text-white sm:h-14 p-2 rounded-lg sm:text-xl mb-10"
          type="submit"
        >
          {t("form.Join_the_waiting_list")}
          {/* Join the waiting list{" "} */}
        </button>
      </form>
    </div>
  );
}

export default Formr;
