import React, { useState } from "react";
import Parking from "../../assets/services/parking.png";
import Licencing from "../../assets/services/licensing.png";
import Land from "../../assets/services/land.png";
import Essential from "../../assets/services/essential.png";
import Health from "../../assets/services/healthcare.png";
import Adverts from "../../assets/services/adverts.png";
import Property from "../../assets/services/property.png";
import Others from "../../assets/services/others.png";
import Expand from "../../assets/expand-screen.png";
import Collapse from "../../assets/collapse.png";

const LeftNav = () => {
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
            <LeftNavItem icon={Parking} name="Parking" />
            <LeftNavItem icon={Licencing} name="Licencing" />
            <LeftNavItem icon={Land} name="Land" />
            <LeftNavItem icon={Essential} name="Essential" />
            <LeftNavItem icon={Health} name="Health" />
            <LeftNavItem icon={Adverts} name="Adverts" />
            <LeftNavItem icon={Property} name="Property" />
            <LeftNavItem icon={Others} name="Others" />
          </>
        ) : (
          <>
            <LeftNavItem icon={Parking} />
            <LeftNavItem icon={Licencing} />
            <LeftNavItem icon={Land} />
            <LeftNavItem icon={Essential} />
            <LeftNavItem icon={Health} />
            <LeftNavItem icon={Adverts} />
            <LeftNavItem icon={Property} />
            <LeftNavItem icon={Others} />
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
      {isExpanded ? (
        <img
          src={Collapse}
          alt="collapse"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      ) : (
        <img
          src={Expand}
          alt="expand"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
    </div>
    </div>
  );
};

const LeftNavItem = ({ icon, name }) => {
  return (
    <div
      className={`flex items-center justify-${
        name ? "between" : "center"
      } my-4 ${!name && "cursor-pointer"}`}
      onClick={() => name && console.log(name)}
    >
      <img src={icon} alt="icon" className="w-8 h-8" />
      {name && <span className={`${!name && "hidden"} mt-2 ml-2`}>{name}</span>}
    </div>
  );
};

export default LeftNav;
