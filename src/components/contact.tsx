
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  HiArrowRight,
  HiCheckCircle,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Header from "../header";
import Footer from "../footer";

const CONTACT_NUMBER = "2347036104433";
const PHONE_NUMBER = `+${CONTACT_NUMBER}`;
const EMAIL_ADDRESS = "tanikfoods@gmail.com";

const BUSINESS_ADDRESS =
  "Opp. Kiddiz Medical Center, Olorunsogo, Ilorin, Kwara State";

const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}`;
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Tanik+Foods+Opp+Kiddiz+Medical+Center+Olorunsogo+Ilorin";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_q6m55ml",
        "template_z8b9tk5",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "Kq08q1gJVPbgCqtmH"
      );

      toast.success("Your message has been sent successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#103923] px-5 py-20 text-white md:py-28">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#F36B35]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#F5C64B]/10 blur-3xl" />

          <div className="section-container relative">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#F5C64B]">
                We'd love to hear from you
              </span>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Let's talk about
                <span className="block text-[#F5C64B]">
                  good food.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
                Have a question about our products, need help with an
                order, or want to make an enquiry? We're always happy
                to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact information */}
        <section className="px-5 py-16 md:py-20">
          <div className="section-container">
            <div className="mb-10 max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
                Get in touch
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#103923] md:text-4xl">
                We're just a message away.
              </h2>

              <p className="mt-4 leading-7 text-[#666666]">
                Reach out through any of the channels below. We'll
                be glad to assist you.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-[#EDE5D7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
                  <FaWhatsapp />
                </div>

                <h3 className="text-xl font-bold text-[#103923]">
                  WhatsApp
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  Chat with us directly for enquiries and orders.
                </p>

                <div className="mt-5 flex items-center justify-between font-bold text-[#174D32]">
                  <span>{PHONE_NUMBER}</span>
                  <HiArrowRight className="text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group rounded-3xl border border-[#EDE5D7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-[#F36B35]">
                  <FaPhoneAlt />
                </div>

                <h3 className="text-xl font-bold text-[#103923]">
                  Call Us
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  Prefer speaking with us? Give us a call.
                </p>

                <div className="mt-5 flex items-center justify-between font-bold text-[#174D32]">
                  <span>{PHONE_NUMBER}</span>
                  <HiArrowRight className="text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="group rounded-3xl border border-[#EDE5D7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-2xl text-yellow-700">
                  <HiOutlineMail />
                </div>

                <h3 className="text-xl font-bold text-[#103923]">
                  Email Us
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  Send us an email and we'll get back to you.
                </p>

                <div className="mt-5 flex items-center justify-between break-all font-bold text-[#174D32]">
                  <span>{EMAIL_ADDRESS}</span>
                  <HiArrowRight className="ml-2 shrink-0 text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="px-5 pb-20">
          <div className="section-container">
            <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-lg md:grid-cols-2">
              <div className="relative overflow-hidden bg-[#174D32] p-8 text-white md:p-12">
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#F5C64B]/10" />

                <div className="relative">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C64B]">
                    Send us a message
                  </span>

                  <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                    How can we
                    <span className="block text-[#F5C64B]">
                      help you?
                    </span>
                  </h2>

                  <p className="mt-5 max-w-sm leading-8 text-white/75">
                    Whether you're asking about a product, placing
                    an order, or exploring a business opportunity,
                    we'd love to hear from you.
                  </p>

                  <div className="mt-10 space-y-5">
                    <div className="flex items-center gap-3">
                      <HiCheckCircle className="text-xl text-[#F5C64B]" />
                      <span className="text-sm">
                        Product enquiries
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <HiCheckCircle className="text-xl text-[#F5C64B]" />
                      <span className="text-sm">
                        Order assistance
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <HiCheckCircle className="text-xl text-[#F5C64B]" />
                      <span className="text-sm">
                        Business and partnership enquiries
                      </span>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#F5C64B] px-6 py-3 font-bold text-[#103923] transition hover:bg-white"
                  >
                    Chat on WhatsApp
                    <HiArrowRight />
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-black text-[#103923]">
                  Drop us a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  Fill in the form below and we'll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Full name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#E8E0D4] bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Email address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#E8E0D4] bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-[#E8E0D4] bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      className="w-full rounded-xl border border-[#E8E0D4] bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Your message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-[#E8E0D4] bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#174D32] px-6 py-4 font-bold text-white transition hover:bg-[#103923] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending message..." : "Send Message"}
                    {!loading && <HiArrowRight className="text-lg" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-5 pb-20">
          <div className="section-container">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
                  Find us
                </span>

                <h2 className="mt-3 text-3xl font-black text-[#103923] md:text-4xl">
                  Visit Tanik Foods
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-[#777777]">
                  We'd love to connect with you. Find us at our
                  location in Ilorin.
                </p>
              </div>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F36B35] px-6 py-3 font-bold text-white transition hover:bg-[#d95727]"
              >
                Get Directions
                <HiArrowRight />
              </a>
            </div>

            <div className="grid overflow-hidden rounded-3xl border border-[#EDE5D7] bg-white md:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C64B]/20 text-2xl text-[#174D32]">
                  <HiOutlineLocationMarker />
                </div>

                <h3 className="text-xl font-bold text-[#103923]">
                  Our Address
                </h3>

                <p className="mt-3 leading-7 text-[#666666]">
                  {BUSINESS_ADDRESS}
                </p>

                <div className="mt-8 border-t border-[#EDE5D7] pt-6">
                  <p className="text-sm font-semibold text-[#103923]">
                    Connect with us
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://www.instagram.com/tanik_foods/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1E9] text-lg text-[#F36B35] transition hover:bg-[#F36B35] hover:text-white"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=61550854575528"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1E9] text-lg text-[#F36B35] transition hover:bg-[#F36B35] hover:text-white"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>

              <div className="min-h-[350px] bg-[#EDE5D7]">
                <iframe
                  title="Tanik Foods location"
                  src="https://maps.google.com/maps?q=Tanik%20Foods%2C%20Olorunsogo%2C%20Ilorin&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-5 pb-20">
          <div className="section-container">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#F5C64B] p-8 md:flex-row md:items-center md:p-12">
              <div>
                <h2 className="text-2xl font-black text-[#103923] md:text-3xl">
                  Ready to make your meals more flavourful?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-[#174D32]/80">
                  Explore our natural seasonings and discover
                  something delicious for your kitchen.
                </p>
              </div>

              <Link
                to="/shop"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#103923] px-7 py-4 font-bold text-white transition hover:bg-[#174D32]"
              >
                Explore Products
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
