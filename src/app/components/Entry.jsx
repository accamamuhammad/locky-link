"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { app } from "../firebase";
import { getDatabase, ref, push, set } from "firebase/database";

import copyIcon from "../../../public/copy.png";

const Entry = () => {
  const db = getDatabase(app);
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
      const dataToSave = {
        message: message,
        otp: otp,
        urlCode: urlCode,
        uniqueUrl: uniqueUrl,
      };
      setData(dataToSave);
      // Push data to "messages" collection
      const messagesRef = ref(db, "messages");
      const newMessageRef = push(messagesRef);
      set(newMessageRef, dataToSave)
        .then(() => {
          console.log("✅ Data saved successfully!");
          alert("Saved successfully!");
          setTogglePopUp(true);
        })
        .catch((error) => {
          console.error("❌ Error saving data:", error);
        });
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

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied:", text);
        // Optional: Show a temporary visual confirmation
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className="relative w-screen min-h-screen h-fit px-6 white flex flex-col items-center justify-center text-center">
      {/* Header */}
      <div className="space-y-3 mb-6">
        <h1 className="font-light text-4xl leading-snug">
          <span className="font-bold text-purple-600">Password Secured,</span>
          <br />
          Data Transmission.
        </h1>
        <p className="text-gray-700 opacity-80 text-sm max-w-md mx-auto">
          Take full control of your data — password-secure links and QR codes
          you can share safely with anyone.
        </p>
      </div>

      {/* Message Input Card */}
      <div className="relative bg-white/90 backdrop-blur-md p-6 w-full max-w-md rounded-3xl flex flex-col items-center shadow-xl border border-purple-100">
        <textarea
          className="w-full outline-none min-h-48 p-4 rounded-xl resize-none border border-purple-100 focus:ring-2 focus:ring-purple-500 text-gray-800 text-base placeholder-gray-400"
          placeholder="Enter the data you want to send..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          onClick={handleSave}
          className="w-full py-3 mt-4 cursor-pointer bg-purple-500 hover:bg-purple-600 transition-all font-semibold rounded-xl text-base text-white shadow-lg"
        >
          Secure
        </button>

        {/* Popup Overlay */}
        <div
          className={`${
            togglePopUp
              ? "w-full h-fit py-5 rounded-lg fixed inset-0 z-50 flex flex-col items-center justify-between bg-white/95 backdrop-blur-sm"
              : "hidden"
          }`}
        >
          <h1 className="font-bold text-3xl text-purple-600 mb-2">Password</h1>
          <h1 className="font-extrabold text-6xl text-purple-500 tracking-widest mb-4">
            {data.otp}
          </h1>

          <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-4 py-2 shadow-sm">
            <p className="w-full font-medium text-sm text-gray-700 truncate max-w-[220px]">
              {data.uniqueUrl}
            </p>
          </div>
          <div className="w-full px-5">
            <button
              onClick={() => handleCopy(data.uniqueUrl)}
              className="w-full border py-2 mt-6 cursor-pointer text-sm bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 shadow-lg transition-all"
            >
              Copy Link
            </button>
            <button
              onClick={() => handleCopy(data.otp)}
              className="w-full border py-2 mt-6 cursor-pointer text-sm bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 shadow-lg transition-all"
            >
              Copy OTP
            </button>
            <button
              onClick={() => setTogglePopUp(false)}
              className="w-full px-6 py-2 mt-6 cursor-pointer text-sm bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 shadow-lg transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry;
