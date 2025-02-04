"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

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
      <div>
        <div>Terrestrial & Cross Borders</div>
      </div>
    ),
    "/data-centers": (
      <div>
        <div>Data Center</div>
      </div>
    ),
    "/landing-stations": (
      <div>
        <div>Landing Stations</div>
      </div>
    ),
    "/global-points": (
      <div>
        <div>Global Points of Presence</div>
      </div>
    ),
    "/towers": (
      <div>
        <div>Towers</div>
      </div>
    ),
    "/equinix-jeddah": (
      <div>
        <div>Equinix Jeddah Internet Exchange</div>
      </div>
    ),
    "/submarine-cables": (
      <div>
        <div>Submarine Cable Systems</div>
      </div>
    ),
    "/internet-gateways": (
      <div>
        <div>Internet Gateways</div>
      </div>
    ),
  };

  return <div>{pageComponents[currentPage]}</div>;
};

export default ViewScreen;
