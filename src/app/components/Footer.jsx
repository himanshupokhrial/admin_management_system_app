import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Our Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>K-20 Education</li>
              <li>Publishing & Conversion Services</li>
              <li>Corporate Learning & Performance</li>
              <li>Global Support Services</li>
              <li>Data Management Services</li>
              <li>Compliance & Regulatory Reporting Services</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Content Development</li>
              <li>Project Management</li>
              <li>Creative Services</li>
              <li>Digital Learning Resources</li>
              <li>Learning Design & Engineering</li>
              <li>Emerging Technologies</li>
              <li>Publishing Services</li>
              <li>Editorial & Production Services</li>
              <li>Data Conversion & Tagging</li>
              <li>SciPris™ – Open Access</li>
              <li>SciPR™ – Peer Review and Support</li>
              <li>Strategic Learning Analysis</li>
              <li>Learning Consulting Services</li>
              <li>Content Design & Development</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>Overview</li>
              <li>Newsroom</li>
              <li>Certifications</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>
                For Sales:{" "}
                <a href="mailto:moreinfo@aptaracorp.com" className="text-blue-300 underline">
                  moreinfo@aptaracorp.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#"
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
              >
                Join Our Newsletter
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-blue-300">
                <i className="fab fa-facebook"></i> {/* Replace with actual icon */}
              </a>
              <a href="#" className="text-blue-300">
                <i className="fab fa-linkedin"></i> {/* Replace with actual icon */}
              </a>
              <a href="#" className="text-blue-300">
                <i className="fab fa-youtube"></i> {/* Replace with actual icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm border-t border-gray-700 pt-4">
          <p>
            Aptara’s digital content, learning, and performance services are in place at market-leading companies
            worldwide. Our industry specialists design and implement strategies that capitalize on new digital and mobile
            technologies for information providers in Information Technology, law, healthcare, pharmaceuticals, insurance,
            financial services, and publishing. Aptara’s solutions uncover new revenue streams, improve operations, and
            realize cost savings enterprise-wide.
          </p>
          <p className="mt-4">
            Founded in 1988, Aptara is headquartered in the United States of America and has offices on four continents.
            Our parent company, iEnergizer, is publicly traded in the United Kingdom.
          </p>
        </div>
        <div className="mt-4 text-center text-sm">
          Copyright © 2024 Aptara Inc. All rights reserved. |{" "}
          <a href="#" className="text-blue-300 underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
