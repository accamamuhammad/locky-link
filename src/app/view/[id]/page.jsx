"use client";

import { useState } from "react";

export default function Page({ params }) {
  //   console.log(params.id);
  const [toggleData, setToggleData] = useState(false);
  const [password, setPassword] = useState("1234");

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-50">
      {/* Viewing message with ID: {params.id} */}
      <div
        className={`${
          toggleData
            ? "w-fit space-y-2 flex flex-row items-center justify-center"
            : "hidden"
        }`}
      >
        <h1 className="text-purple-900 font-bold text-2xl mt-1 mr-2">Code:</h1>
        <div className="w-44 h-10 rounded-lg bg-purple-50 p-1 flex flex-row justify-between">
          <input
            type="number"
            className="w-full h-full pl-2 outline-0 rounded-l-lg"
          />
          <button className="px-5 h-full cursor-pointer bg-purple-500 font-medium text-white rounded-lg">
            Enter
          </button>
        </div>
      </div>
      <div
        className={
          toggleData ? "hidden" : "w-full px-5 flex flex-col gap-5 items-center"
        }
      >
        <h1 className="font-bold text-3xl">Message</h1>
        <div className="w-full h-48 bg-neutral-100 rounded-2xl shadow-2xl"></div>
      </div>
    </section>
  );
}
