import React from "react";

const HomeMenu = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="relative z-10 p-28">
        <ul className="flex flex-col gap-[20px]">
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/map.svg" /> Terrestrial & Cross Borders
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/datacenter.svg" /> Data Centers
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/landingstation.svg" /> Landing Stations
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/globalpoints.svg" /> Global Points of presence
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/towers.svg" /> Towers
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/equinix.svg" /> Equinix Jeddah Internet Exchange
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/submarine.svg" /> Submarine Cable Systems
          </li>
          <li className="text-[32px] flex gap-[8px]">
            <img src="/menuicon/internet.svg" /> Internet Gateways
          </li>
        </ul>
      </div>
      <div className="absolute top-28 right-3">
        <img src="/globe.svg" className="" />
      </div>
    </div>
  );
};

export default HomeMenu;
