"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import copyIcon from "../../../public/copy.png";

const Entry = () => {
  const [data, setData] = useState([
    {
      message: "",
      otp: "",
      urlCode: "",
      uniqueUrl: "",
    },
  ]);
  const [message, setMessage] = useState("");
  const [togglePopUp, setTogglePopUp] = useState(false);

  const handleSave = () => {
    if (message === "") {
      alert("Add message");
    } else {
      const otp = generateRandomOtp();
      const urlCode = generateRandomUrlCode();
      const currentUrl = window.location.origin;
      const uniqueUrl = currentUrl + "/view/" + urlCode;
      setData([
        { message: message, otp: otp, urlCode: urlCode, uniqueUrl: uniqueUrl },
      ]);
      setTimeout(() => {
        setTogglePopUp(true);
      }, 1000);
    }
    setMessage("");
  };

  const generateRandomOtp = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    const n3 = Math.floor(Math.random() * 9) + 1;
    const n4 = Math.floor(Math.random() * 9) + 1;

    const code = `${n1}${n2}${n3}${n4}`;
    return code;
  };

  const generateRandomUrlCode = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    const n3 = Math.floor(Math.random() * 9) + 1;
    const n4 = Math.floor(Math.random() * 9) + 1;

    const code = `${"xyz"}${n1}${n2}${n3}${n4}`;
    return code;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="bg-neutral-50 p-2 w-full h-fit mt-5 rounded-xl flex flex-col justify-between items-center shadow-2xl">
      <textarea
        className="w-full outline-0 h-full p-2 min-h-48 resize-none"
        placeholder="Enter the data you want to send"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        onClick={handleSave}
        className="w-full py-2.5 cursor-pointer bg-purple-600 font-bold rounded-lg text-base text-white mt-2"
      >
        Secure
      </button>
      <div
        className={`${
          togglePopUp
            ? "absolute inset-0 w-screen h-screen bg-purple-50 flex gap-4 flex-col items-center justify-center"
            : "hidden"
        }`}
      >
        <h1 className="font-bold text-3xl">Password:</h1>
        <h1 className="font-bold text-7xl">{data[0].otp}</h1>
        <div className="flex flex-row gap-1">
          <p className="font-bold opacity-80 text-sm">{data[0].uniqueUrl}</p>
          <Image
            width={20}
            height={10}
            src={copyIcon}
            alt="copy-icon"
            className="cursor-pointer"
          />
        </div>
        <button
          onClick={() => setTogglePopUp(false)}
          className="px-3 py-2 mt-2 cursor-pointer text-sm bg-purple-500 text-white rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Entry;
