"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { getDatabase, get, ref } from "firebase/database";
import { app } from "../../firebase.js";

export default function Page({ params }) {
  const { id } = React.use(params);
  // console.log(id);
  const db = getDatabase(app);
  const [data, setData] = useState([]);
  const [currentMessageData, setCurrentMessageData] = useState({});
  const [toggleData, setToggleData] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    get(messagesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const dataArray = Object.values(snapshot.val());
        setData(dataArray);
      } else {
        console.log("error");
      }
    });
  }, []);

  useEffect(() => {
    data.forEach((item) => {
      const currentCode = item.urlCode;
      if (id === currentCode) {
        setPassword(item.otp);
        setCurrentMessageData(item);
      }
    });
  }, [data]);

  const handlePassword = () => {
    if (password === passwordInput) {
      setToggleData(false);
    } else {
      alert("🚨 Incorrect Code");
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-50">
      {/* Full-page password overlay */}
      <div
        className={`${
          toggleData
            ? "fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-95"
            : "hidden"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 w-96">
          <h1 className="text-purple-500 font-extrabold text-3xl">
            Enter Code
          </h1>
          <p className="text-gray-600 text-center">
            Please enter the 4-digit password to continue.
          </p>
          <div className="w-full flex items-center gap-2">
            <input
              type="text"
              maxLength={4}
              value={passwordInput}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                setPasswordInput(val);
              }}
              className="flex-1 h-12 px-4 rounded-l-2xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none text-center text-lg tracking-widest"
              placeholder="••••"
            />
            <button
              onClick={handlePassword}
              className="h-12 px-6 bg-purple-500 text-white font-semibold rounded-r-2xl shadow-lg hover:bg-purple-600 transition-colors"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          toggleData
            ? "hidden"
            : "w-full px-6 flex flex-col items-center justify-center gap-6 text-center"
        }
      >
        <h1 className="text-4xl font-extrabold text-purple-500 tracking-wide drop-shadow-sm">
          Message
        </h1>

        <div className="relative w-full max-w-2xl bg-white border border-purple-100 rounded-3xl shadow-xl p-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            Secured Message
          </div>

          <p className="text-gray-800 text-xl font-medium leading-relaxed whitespace-pre-line">
            {currentMessageData.message}
          </p>
        </div>
      </div>
    </section>
  );
}
