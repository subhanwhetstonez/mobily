"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const HomeMenu = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketInstance = io("http://192.168.0.109:8080");
    setSocket(socketInstance);
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleMenuClick = (url) => {
    if (socket) {
      socket.emit("navigate", { link: url });
    } else {
      console.log("Socket not initialized yet");
    }
  };
  return (
    <div className="flex justify-between bg-[#04115C] h-full">
      <div className="relative z-10 p-28">
        <ul className="flex flex-col gap-[20px]">
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/terrestrial-cross-borders")}>
            <img src="/menuicon/map.svg" /> Terrestrial & Cross Borders
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/data-centers")}>
            <img src="/menuicon/datacenter.svg" /> Data Centers
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/landing-stations")}>
            <img src="/menuicon/landingstation.svg" /> Landing Stations
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/global-points")}>
            <img src="/menuicon/globalpoints.svg" /> Global Points of Presence
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/towers")}>
            <img src="/menuicon/towers.svg" /> Towers
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/equinix-jeddah")}>
            <img src="/menuicon/equinix.svg" /> Equinix Jeddah Internet Exchange
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/submarine-cables")}>
            <img src="/menuicon/submarine.svg" /> Submarine Cable Systems
          </li>
          <li className="text-[32px] flex gap-[8px] cursor-pointer" onClick={() => handleMenuClick("/internet-gateways")}>
            <img src="/menuicon/internet.svg" /> Internet Gateways
          </li>
        </ul>
      </div>
      <div className="absolute top-28 right-3 bg-[#04115C]">
        <img src="/globe.svg" className="bg-[#04115C]" />
      </div>
    </div>
  );
};

export default HomeMenu;
