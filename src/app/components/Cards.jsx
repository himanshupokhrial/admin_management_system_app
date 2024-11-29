import React from "react";

const ServiceCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="h-50 border-5 w-full object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "K-20 Education",
      image: "https://www.aptaracorp.com/wp-content/uploads/2024/06/k-20-education-thmbnail.jpg", 
    },
    {
      title: "Publishing & Conversion Services",
      image: "https://www.aptaracorp.com/wp-content/uploads/2024/06/publishing-thmbnail-min.jpg",
    },
    {
      title: "Corporate Learning & Performance",
      image: "https://www.aptaracorp.com/wp-content/uploads/2024/06/corporate-learning-thmbnail-min.jpg",
    },
    {
      title: "Global Support Services",
      image: "https://www.aptaracorp.com/wp-content/uploads/2024/06/it-serivces-thmbnail-min-2-1-1.jpg",
    },
    {
      title: "Data Management Services",
      image: "https://www.aptaracorp.com/wp-content/uploads/2024/06/data-management-thmbnail-min.jpg",
    },
    {
      title: "Compliance & Regulatory Reporting Services",
      image: "https://www.aptaracorp.com/wp-content/uploads/2023/04/compliance-bn.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl ">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
