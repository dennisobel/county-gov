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
import LandRatesBill from "../../components/county_services/Land/LandRatesBill";
import GroundRent from "../../components/county_services/Land/GroundRent"
import LandOwnerAmmendment from "../../components/county_services/Land/LandOwnerAmmendment"
import LandSurvey from "../../components/county_services/Land/LandSurvey"
import LandClearance from "../../components/county_services/Land/LandClearance"
import PropertyDevelopmentApplication from "../../components/county_services/Land/PropertyDevelopmentApplication"
import FireDisaster from "../../components/county_services/Essential/FireDisaster"
import Education from "../../components/county_services/Essential/Education"
import PublicWorks from "../../components/county_services/Essential/PublicWorks"
import Administration from "../../components/county_services/Essential/Administration"
import Agriculture from "../../components/county_services/Essential/Agriculture"
import Cooperative from "../../components/county_services/Essential/Cooperative"
import BusShelter from "../../components/county_services/Essential/BusShelter"
import Ambulance from "../../components/county_services/Health/Ambulance"
import Certificates from "../../components/county_services/Health/Certificates"
import Other from "../../components/county_services/Health/Other"
import Large from "../../components/county_services/Adverts/Large"
import Small from "../../components/county_services/Adverts/Small"
import TenancyApplication from "../../components/county_services/Property/TenancyApplication"
import TenancyTransfer from "../../components/county_services/Property/TenancyTransfer"
import Market from "../../components/county_services/Cess/Market"
import Transport from "../../components/county_services/Cess/Transport"
import HireEquipment from "../../components/county_services/Social/HireEquipment"
import HireGrounds from "../../components/county_services/Social/HireGrounds"
import HireHalls from "../../components/county_services/Social/HireHalls"
import HireSchool from "../../components/county_services/Social/HireSchool"
import HireStadium from "../../components/county_services/Social/HireStadium"
import ValidateStaff from "../../components/county_services/Jitambue/ValidateStaff"

const Profile = ({ service }) => {
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([
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
        {
          id: "hire_stadium",
          label: "Hire Stadium",
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
  } else if (activeTab === 'land_rates_bill') {
    childComponent = <LandRatesBill/>
  } else if (activeTab === 'ground_rent_sdr') {
    childComponent = <GroundRent/>
  } else if (activeTab === 'land_owner_ammendment') {
    childComponent = <LandOwnerAmmendment/>
  } else if (activeTab === 'land_survey') {
    childComponent = <LandSurvey/>
  } else if (activeTab === 'land_clearance') {
    childComponent = <LandClearance/>
  } else if (activeTab === 'property_development_application') {
    childComponent = <PropertyDevelopmentApplication/>
  } else if (activeTab === 'fire') {
    childComponent = <FireDisaster/>
  } else if (activeTab === 'education') {
    childComponent = <Education/>
  } else if (activeTab === 'public_works') {
    childComponent = <PublicWorks/>
  } else if (activeTab === 'admin') {
    childComponent = <Administration/>
  } else if (activeTab === 'agriculture') {
    childComponent = <Agriculture/>
  } else if (activeTab === 'cooperative') {
    childComponent = <Cooperative/>
  } else if (activeTab === 'bus_shelter_services') {
    childComponent = <BusShelter/>
  } else if (activeTab === 'ambulance') {
    childComponent = <Ambulance/>
  } else if (activeTab === 'certificates') {
    childComponent = <Certificates/>
  } else if (activeTab === 'others') {
    childComponent = <Other/>
  } else if (activeTab === 'large') {
    childComponent = <Large/>
  } else if (activeTab === 'small') {
    childComponent = <Small/>
  } else if (activeTab === 'tenancy_application') {
    childComponent = <TenancyApplication/>
  } else if (activeTab === 'tenancy_transfer') {
    childComponent = <TenancyTransfer/>
  } else if (activeTab === 'market') {
    childComponent = <Market/>
  } else if (activeTab === 'transport') {
    childComponent = <Transport/>
  } else if (activeTab === 'hire_grounds') {
    childComponent = <HireGrounds/>
  } else if (activeTab === 'hire_halls') {
    childComponent = <HireHalls/>
  } else if (activeTab === 'hire_schools') {
    childComponent = <HireSchool/>
  } else if (activeTab === 'hire_equipment') {
    childComponent = <HireEquipment/>
  } else if (activeTab === 'hire_stadium') {
    childComponent = <HireStadium/>
  } else if (activeTab === 'jitambue') {
    childComponent = <ValidateStaff/>
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
