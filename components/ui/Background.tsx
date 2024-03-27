import Image from "next/image";
import React from "react";



export default function Background() {
    return (
      <div className="absolute inset-0 z-[-10]">
        <div className="background-image"></div>
      </div>
    );
  }