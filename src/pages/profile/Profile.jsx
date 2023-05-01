import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../components/Logo";

const Profile = () => {
  const state = useSelector((state) => state);

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <i className="fas fa-home"></i>,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <i className="fas fa-user"></i>,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <i className="fas fa-cog"></i>,
    },
  ];

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
              className={`${
                activeTab === tab.id ? "bg-gray-200" : ""
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
              {tabs.find((tab) => tab.id === activeTab).label}
            </h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Content goes here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
