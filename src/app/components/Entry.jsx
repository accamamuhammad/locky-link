"use client";

import React, { useEffect, useState } from "react";

const Entry = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (message === "") {
      alert("Add message");
    } else {
      const otp = generateRandomOtp();
      const urlCode = generateRandomUrlCode();
      const currentUrl = window.location.origin;
      const uniqueUrl = currentUrl + "/view/" + urlCode;
      setData([{ message, otp, urlCode, uniqueUrl }]);
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
    </div>
  );
};

export default Entry;
