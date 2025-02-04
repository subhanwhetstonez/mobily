"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import CrossBorders from "../screens/crossBorders"
const ViewScreen = () => {
  const [socket, setSocket] = useState(null);
  const [currentPage, setCurrentPage] = useState("/view");

  useEffect(() => {
    const socketInstance = io("http://192.168.0.109:8080");
    setSocket(socketInstance);
    socketInstance.emit("joinRoom", currentPage);
    socketInstance.on("redirect", (data) => {
      setCurrentPage(data.link);
    });
    return () => {
      socketInstance.disconnect();
    };
  }, [currentPage]);

  const pageComponents = {
    "/terrestrial-cross-borders": (
      <CrossBorders />
    ),
    "/data-centers": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Data Center</div>
      </div>
    ),
    "/landing-stations": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Landing Stations</div>
      </div>
    ),
    "/global-points": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Global Points of Presence</div>
      </div>
    ),
    "/towers": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Towers</div>
      </div>
    ),
    "/equinix-jeddah": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Equinix Jeddah Internet Exchange</div>
      </div>
    ),
    "/submarine-cables": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Submarine Cable Systems</div>
      </div>
    ),
    "/internet-gateways": (
      <div className="bg-[#04115C] h-[100vh] w-full">
        <div>Internet Gateways</div>
      </div>
    ),
  };

  return <div>{pageComponents[currentPage]}</div>;
};

export default ViewScreen;
