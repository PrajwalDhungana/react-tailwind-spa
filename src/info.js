import React from "react";
import photo from "./Untitled.png";

export default function info() {
  return (
    <div className="flex justify-center items-center m-auto flex-col p-20">
      <div>
        <img src={photo} alt="" />
      </div>
      <div>
        <span className="text-blue-500 font-semibold text-2xl">Me</span>
      </div>
    </div>
  );
}
