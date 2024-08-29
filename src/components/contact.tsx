import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../header";
import { FaArrowLeft } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../footer";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto bg-red-50 min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl md:text-5xl font-bold mt-24 text-center">
          Contact Us
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="w-full flex flex-col md:flex-row ">
            <div className="w-full md:w-1/3  border border-3 border-black mt-12 rounded-md">
              <div className="flex flex-col gap-8 items-start justify-between  px-4 py-12 md:py-20">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="w-8 h-8" />
                  <a
                    href="tel:+2347036104433"
                    className="font-medium"
                    target="blank"
                  >
                    +2347036104433
                  </a>
                </div>

                <div className="flex items-center gap-4 ">
                  <FaWhatsapp className="w-8 h-8 " />
                  <a
                    href="https://wa.me/+2348055284718"
                    className="font-medium"
                    target="blank"
                  >
                    +2348055284718
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MdEmail className="w-8 h-8" />
                  <a
                    href="mailto:tanikfoods@gmail.com"
                    className="font-medium"
                    target="blank"
                  >
                    tanikfoods@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <IoLocationOutline className="w-8 h-8" />
                  <p className="font-medium">
                    Opp Kiddiz Medical Center, Olorunsogo, <br /> Ilorin, Kwara
                    State
                  </p>
                </div>
                <div className="w-full mt-4">
                  <iframe
                    className="w-full h-48 rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3759152909174!2d4.51461647406125!3d8.462776097597132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036535862842335%3A0xa65446257aa4c452!2sTanik%20Foods!5e0!3m2!1sen!2sng!4v1717868448272!5m2!1sen!2sng"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-primary text-2xl font-medium uppercase tracking-wider mt-12">
                Get in touch
              </h2>
              <div className="relative">
                <form className="grid grid-cols-1 gap-y-6 text-left sm:grid-cols-2 sm:gap-x-8 px-4 rounded-2xl py-8 mx-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <div className="mt-1 ">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
                        required
                      />
                    </div>
                  </div>
                  <div className=" w-full flex flex-col items-center justify-center text-center sm:col-span-2">
                    <button
                      type="submit"
                      className=" block w-full transition-color relative inline-flex items-center justify-center  bg-red-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-red-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
