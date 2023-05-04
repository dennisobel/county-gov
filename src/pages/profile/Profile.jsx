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
import WeightsMeasures from "../../components/county_services/Licensing/WeightsMeasures";
import BettingGaming from "../../components/county_services/Licensing/BettingGaming";

const Profile = ({ service }) => {
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([
    // {
    //   id: "overview",
    //   label: "Overview",
    //   icon: <i className="fas fa-home"></i>,
    // },
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

  useEffect(() => {
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
    } else if (service === "land") {
      setTabs(() => [
        {
          id: "land_rates_bill",
          label: "Land Rates Bill",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "ground_rent_sdr",
          label: "Ground Rent/SDR",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "land_owner_ammendment",
          label: "Land Owner Ammendment",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "land_survey",
          label: "Land Survey",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "land_clearance",
          label: "Land Clearance",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "property_development_application",
          label: "Property Development Application",
          icon: <i className="fas fa-home"></i>,
        },
           
        
      ])
    } else if (service === "essential") {
      setTabs(() => [
        {
          id: "fire",
          label: "Fire/Disaster Management",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "education",
          label: "Education",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "public_works",
          label: "Public Works",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "admin",
          label: "Administrative",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "agriculture",
          label: "Agriculture",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "cooperative",
          label: "Cooperative",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "bus_shelter_services",
          label: "Bus Shelter Services",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    } else if(service === "health") {
      setTabs(() => [
        {
          id: "ambulance",
          label: "Ambulance Services",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "certificates",
          label: "Health Certificates",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "others",
          label: "Other Health Services",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    } else if(service === "adverts") {
      setTabs(() => [
        {
          id: "large",
          label: "Large Format",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "small",
          label: "Small Format",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    } else if(service === "property") {
      setTabs(() => [
        {
          id: "tenancy_application",
          label: "Tenancy Application",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "tenancy_transfer",
          label: "Tenancy Transfer",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    } else if(service === "cess") {
      setTabs(() => [
        {
          id: "market",
          label: "Market Cess",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "transport",
          label: "Transport Cess",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    } else if(service === "social") {
      setTabs(() => [
        {
          id: "hire_grounds",
          label: "Hire Grounds",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "hire_halls",
          label: "Hire Halls",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "hire_schools",
          label: "Hire School Facilities",
          icon: <i className="fas fa-home"></i>,
        },
        {
          id: "hire_equipment",
          label: "Hire Equipment",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    }else if(service === "jitambue") {
      setTabs(() => [
        {
          id: "jitambue",
          label: "Verify County Staff",
          icon: <i className="fas fa-home"></i>,
        },
      ])
    }
  }, [service]);

  useEffect(() => {
    if (service === undefined) {
      setActiveTab("parking");
    }
  }, [service]);

  useEffect(() => {
    if (service === undefined) {
      setActiveTab("parking");
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
    childComponent = <SingleBusinessPermit />
  } else if (activeTab === 'weights_measures') {
    childComponent = <WeightsMeasures />
  } else if (activeTab === 'betting_gaming') {
    childComponent = <BettingGaming />
  } else {
    // handle invalid `id` parameter
    childComponent = <Landing />
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
              onClick={(e) => { e.preventDefault(); setActiveTab(tab.id) }}
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
