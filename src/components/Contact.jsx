import "react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      country,
      message,
    };
    if (!data) {
      alert("Please fill all fields");
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  return (
    <div
      className="flex items-center justify-center px-8 bg-heroBg py-28"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 mx-auto md:w-4/5 md:grid-cols-2 md:gap-12">
          {/* left side */}
          <div className="space-y-8">
            <h2 className="mb-4 text-4xl font-bold text-white font-secondary">
              appointment
            </h2>
            <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p className="">
                    We are available 24/7 to ensure your needs are met at any
                    time of day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaRegEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Therapist</h3>
                  <p className="">
                    Our team of licensed therapists offers professional care and
                    support tailored to you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <IoMdCall className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Care</h3>
                  <p className="">
                    We provide the highest standard of care to promote your well
                    being and recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p className="">
                    We are a trusted clinic with years of experience in
                    delivering reliable and compassionate healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="p-8 space-y-8 bg-white rounded-md shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md shadow focus:outline-none focus:ring-primary focus:ring-2"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md shadow focus:outline-none focus:ring-primary focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md shadow focus:outline-none focus:ring-primary focus:ring-2"
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md shadow focus:outline-none focus:ring-primary focus:ring-2"
                />
              </div>

              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-md shadow focus:outline-none focus:ring-primary focus:ring-2"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 text-white rounded-md bg-primary hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="p-8 bg-white rounded-md shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Thank you!</h2>
            <p>Thank you {name}, for submiting your query.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 mt-4 text-white rounded-md bg-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
