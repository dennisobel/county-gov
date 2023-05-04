import React, { useState } from "react";
import Parking from "../../assets/services/parking.png";
import Licencing from "../../assets/services/licensing.png";
import Land from "../../assets/services/land.png";
import Essential from "../../assets/services/essential.png";
import Health from "../../assets/services/healthcare.png";
import Adverts from "../../assets/services/adverts.png";
import Property from "../../assets/services/property.png";
import Others from "../../assets/services/others.png";
import Verified from "../../assets/services/verified.png";
import Social from "../../assets/services/connection.png";
import Cess from "../../assets/services/tax.png";
import Expand from "../../assets/expand-screen.png";
import Collapse from "../../assets/collapse.png";

const LeftBar = ({setSelectedService}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-gray-200 flex flex-col items-center justify-between h-full py-4 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex flex-col items-center">
        {isExpanded ? (
          <>
            <LeftNavItem icon={Parking} name="Parking" onClick={() => setSelectedService("parking")}/>
            <LeftNavItem icon={Licencing} name="Licencing" onClick={() => setSelectedService("licensing")}/>
            <LeftNavItem icon={Land} name="Land" onClick={() => setSelectedService("land")}/>
            <LeftNavItem icon={Essential} name="Essential" onClick={() => setSelectedService("essential")}/>
            <LeftNavItem icon={Health} name="Health" onClick={() => setSelectedService("health")}/>
            <LeftNavItem icon={Adverts} name="Adverts" onClick={() => setSelectedService("adverts")}/>
            <LeftNavItem icon={Property} name="Property" onClick={() => setSelectedService("property")}/>
            <LeftNavItem icon={Cess} name="Cess" onClick={() => setSelectedService("cess")}/>
            <LeftNavItem icon={Social} name="Social" onClick={() => setSelectedService("social")}/>
            <LeftNavItem icon={Verified} name="Jitambue" onClick={() => setSelectedService("jitambue")}/>
          </>
        ) : (
          <>
            <LeftNavItem icon={Parking} onClick={() => setSelectedService("parking")}/>
            <LeftNavItem icon={Licencing} onClick={() => setSelectedService("licensing")}/>
            <LeftNavItem icon={Land} onClick={() => setSelectedService("land")}/>
            <LeftNavItem icon={Essential} onClick={() => setSelectedService("essential")}/>
            <LeftNavItem icon={Health} onClick={() => setSelectedService("health")}/>
            <LeftNavItem icon={Adverts} onClick={() => setSelectedService("adverts")}/>
            <LeftNavItem icon={Property} onClick={() => setSelectedService("property")}/>
            <LeftNavItem icon={Cess} onClick={() => setSelectedService("cess")}/>
            <LeftNavItem icon={Social} onClick={() => setSelectedService("social")}/>
            <LeftNavItem icon={Verified} onClick={() => setSelectedService("jitambue")}/>
          </>
        )}
      </div>
      <div
        className={`bg-gray-200 flex flex-col items-center justify-between h-full py-4 ${
          isExpanded ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* LeftNavItem components */}
        </div>
        <img
        src={isExpanded ? Collapse : Expand}
        alt={isExpanded ? "collapse" : "expand"}
        className={`w-8 h-8 cursor-pointer transition duration-500 transform ${
          isExpanded ? "rotate-180" : ""
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      </div>
    </div>
  );
};

const LeftNavItem = ({ icon, name, onClick }) => {
  return (
    <div
      className={`flex items-center justify-${
        name ? "between" : "center"
      } my-4 ${!name && "cursor-pointer"}`}
      onClick={() => onClick && onClick(name)}
    >
      <img src={icon} alt="icon" className="w-8 h-8" />
      {name && <span className={`${!name && "hidden"} mt-2 ml-2`}>{name}</span>}
    </div>
  );
};

export default LeftBar;
