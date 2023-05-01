import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../components/Logo";

/**CHILD COMPONENTS */
import DailyParking from "../../components/county_services/Parking/DailyParking";
import SeasonalParking from "../../components/county_services/Parking/SeasonalParking";
import ReservedParking from "../../components/county_services/Parking/ReservedParking";
import Landing from "../../components/county_services/Landing";
import SingleBusinessPermit from "../../components/county_services/Licensing/SingleBusinessPermit"

const Profile = ({ service }) => {
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    console.log("SERVICE IN PROFILE:",service)
    if (service === "parking") {
      setTabs(() => [
        {
          id: "daily_parking",
          label: "Daily Parking",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "seasonal_parking",
          label: "Seasonal Parking",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "reserved_parking",
          label: "Reserved Parking",
          icon: <i className="fas fa-home"></i>,
        },
      ]);
    } else if (service === "licensing") {
      setTabs(() => [
        {
          id: "single_business_permits",
          label: "Single Business Permit",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "weights_measures",
          label: "Weights & Measures",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "betting_gaming",
          label: "Betting & Gaming",
          icon: <i className="fas fa-home"></i>,
        },
      ]);
    }
  }, [service]);

  useEffect(() => {
    if (service === undefined) {
      setActiveTab("overview");
    }
  }, [service]);

  useEffect(() => {
    if (service === undefined) {
      setActiveTab("overview");
    }
  }, []);

  let childComponent;

  // set `childComponent` based on the `id` parameter
  if (activeTab === 'daily_parking') {
    childComponent = <DailyParking />;
  } else if (activeTab === 'seasonal_parking') {
    childComponent = <SeasonalParking />;
  } else if (activeTab === 'reserved_parking') {
    childComponent = <ReservedParking />;
  } else if (activeTab === 'single_business_permits') {
    childComponent = <SingleBusinessPermit/>
  }  else {
    // handle invalid `id` parameter
    childComponent = <Landing/>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Nav */}
      <div className="flex-shrink-0 w-64 bg-white shadow-xl">

        <nav className="mt-10">
          {tabs.map((tab) => (
            <Link
              to={`/profile/${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? "bg-gray-200" : ""
                } flex items-center py-2 px-6 hover:bg-gray-200 transition-colors duration-200`}
            >
              <span className="mr-4">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {
              childComponent
            }
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
