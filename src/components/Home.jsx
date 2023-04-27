import React from 'react';
import { Link } from 'react-router-dom';

import Parking from "../assets/services/parking.png"
import Licencing from "../assets/services/licensing.png"
import Land from "../assets/services/land.png"
import Essential from "../assets/services/essential.png"
import Health from "../assets/services/healthcare.png"
import Adverts from "../assets/services/adverts.png"
import Property from "../assets/services/property.png"
import Others from "../assets/services/others.png"


const services = [
    {
        id: "DailyParking",
        name: "Parking Services",
        image: Parking,
    },
    {
        id: "2",
        name: "Business Licencing Services",
        image: Licencing,
    },
    {
        id: "3",
        name: "Land Services",
        image: Land,
    },
    {
        id: "4",
        name: "Essential Services",
        image: Essential,
    },
    {
        id: "5",
        name: "Health Services",
        image: Health,
    },
    {
        id: "7",
        name: "Advertisement Services",
        image: Adverts,
    },
    {
        id: "8",
        name: "Property Services",
        image: Property,
    },
    {
        id: "9",
        name: "Other Services",
        image: Others,
    },
];

const Services = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <a
                            key={service.id}
                            href="/login"
                            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 hover:shadow-xl focus:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
                        >
                            <div
                                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            >
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                                </div>
                                <div className="p-4">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="mx-auto h-20"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex items-center justify-center">
                        <div className="md:w-2/3 lg:w-2/3">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                    Welcome to County <br />
                                    <span className="text-primary">eServices Portal</span>
                                </h1>
                                <p className="text-gray-700 text-lg mb-8">
                                    Make payments easily and quickly. Create an account and get to
                                    enjoy paying for County services online.
                                </p>
                                <div className="flex justify-center">
                                    
                                        <Link to="/login" className="bg-teal-500 hover:bg-teal-600 text-primary font-bold py-3 px-8 rounded-full text-lg">
                                            <i className="mdi mdi-account-outline mr-2"></i>Sign In / Sign Up
                                        </Link>
                                        
                                    
                                    {/* <a
                                        href="/login"
                                        className="bg-teal-500 hover:bg-teal-600 text-primary font-bold py-3 px-8 rounded-full text-lg"
                                    >
                                        <i className="mdi mdi-account-plus mr-2"></i>Create account
                                    </a> */}
                                </div>
                            </div>
                            <div className="mt-12 md:mt-16">
                                <div className="relative rounded-full overflow-hidden">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Want to subscribe to county news? Add your email"
                                        className="block w-full py-4 px-4 leading-5 text-gray-800 bg-white focus:outline-none focus:shadow-outline-purple focus:border-purple-500 focus:bg-white focus:text-gray-900 sm:text-sm sm:leading-5"
                                    />
                                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a7 7 0 110 14A7 7 0 019 2zm1 10.9a4.9 4.9 0 100-9.8 4.9 4.9 0 000 9.8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Services />
            </div>

        </>
    );
};

export default Home;
