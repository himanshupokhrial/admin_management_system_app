import React from "react";

const AboutSection = () => {
  return (
    <div className="relative bg-gray-800 z-[-1]" >
      {/* Enquire Now Button */}
      <div className="absolute top-0 left-0 z-10">
        <button className="bg-red-600 text-white py-2 px-4 rounded-r-lg text-sm">
          Enquire Now
        </button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="bg-blue-950 bg-opacity-70 h-full"></div>
      </div>

      <div className="relative z-20 container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-16">
        {/* Image Section */}
        <div className="relative md:w-1/2 mb-6 md:mb-0">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://www.aptaracorp.com/wp-content/uploads/2023/04/quote-1-min.png"
              alt="Team working on laptop"
              className="object-cover w-[800px] h-[500px] pb-10 rounded-2xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            A Front-Runner in Custom Content Services
          </h2>
          <p className="text-sm md:text-base leading-6 mb-4">
            Aptara is a globally renowned company that works with Fortune 500
            companies to transform content to engage and monetize new digital
            and corporate learning audiences. Serving the ten largest publishers
            in the world, Aptara’s full-service content production enhances the
            information of content providers in the digital world.
            lorem1000
          </p>
          <p className="text-sm md:text-base leading-6 mb-4">
            From creation and design to new media enhancements and output for
            all mobile devices and platforms, Aptara produces innovative digital
            products that deliver content how, when, and where readers want it
            while giving content providers renewed agility and revenue
            opportunities.
          </p>
          <h3 className="text-lg md:text-xl font-bold mt-6">Company Portal</h3>
        </div>
      </div>

      <div className="relative bg-gray-900 text-white py-12">
      {/* World Map */}
      <div className="relative">
        <img
          src="https://www.aptaracorp.com/wp-content/uploads/2024/06/Aptara_New_Location_Map_1_Edited_3-1.jpg" // Replace with your map image URL
          alt="World map"
          className="w-full h-auto"
        />      
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
