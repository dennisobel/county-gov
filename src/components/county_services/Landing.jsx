import React from 'react';
import Parking from '../../assets/services/parking.png';
import Licensing from '../../assets/services/licensing.png';
import Land from '../../assets/services/land.png';
import Healthcare from '../../assets/services/healthcare.png';
import Property from '../../assets/services/property.png';

const services = [
  {
    id: 1,
    title: 'Parking',
    image: Parking,
    description:
      'We provide affordable parking solutions for your vehicle in secure locations.',
    link: '/parking',
  },
  {
    id: 2,
    title: 'Licensing',
    image: Licensing,
    description:
      'We help businesses obtain the necessary licenses and permits to operate legally.',
    link: '/licensing',
  },
  {
    id: 3,
    title: 'Land',
    image: Land,
    description:
      'We offer services related to land acquisition, management, and development.',
    link: '/land',
  }
];

function ServiceCard({ service }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <img src={service.image} alt={service.title} className="w-24 h-24 mx-auto" />
        <h3 className="text-xl font-medium mt-4">{service.title}</h3>
        <p className="text-gray-500 mt-2">{service.description}</p>
        <a href={service.link} className="bg-teal-400 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-500 transition-colors duration-200">
          Learn More
        </a>
      </div>
    );
  }
  

function Landing() {
  return (
    <div className="bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center">
          Common Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
