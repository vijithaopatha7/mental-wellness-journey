import "react";
import footerLogo from "../assets/footer-logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-8 py-12 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 mx-auto conatiner md:grid-cols-4 sm:grid-cols-2">
        <div className="space-y-6 mr-14">
          <div className="flex items-center space-x-2">
            <img src={footerLogo} alt="footerlogo" className="w-32 h-auto" />
          </div>
          <p className="text-para">
            Your health is our priority. Contact us for exceptional care and
            support.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-200 rounded-full text-primary size-10 hover:bg-primary hover:text-white"
            >
              <FaFacebook className="text-xl" />
            </a>

            <a
              href="#"
              className="flex items-center justify-center bg-gray-200 rounded-full text-primary size-10 hover:bg-primary hover:text-white"
            >
              <FaTwitter className="text-xl" />
            </a>

            <a
              href="#"
              className="flex items-center justify-center bg-gray-200 rounded-full text-primary size-10 hover:bg-primary hover:text-white"
            >
              <FaInstagramSquare className="text-xl" />
            </a>

            <a
              href="#"
              className="flex items-center justify-center bg-gray-200 rounded-full text-primary size-10 hover:bg-primary hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            <a href="#home" className="text-gray-700 hover:underline">
              Home
            </a>
            <li>
              <a href="#about" className="text-gray-700 hover:underline">
                About Us
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-700 hover:underline">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-700 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="mb-4 text-xl font-semibold">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                FAQs
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Terms of Services
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-700 hover:underline">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="mb-4 text-xl font-semibold">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <p className="text-gray-700">264 Elpitiya, Galle, SriLanka</p>
            </li>

            <li className="flex items-center gap-2">
              <FaPhone className="text-primary" />
              <p className="text-gray-700">+94 702721882</p>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <p className="text-gray-700">vijithaopatha822@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
