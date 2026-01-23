import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  User,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import ContactHero from '/contact_hero.webp';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Contact <span className="text-orange-400">ProVol Promotions</span>
            </h1>

            <p className="text-blue-100 text-lg mb-4">
              We provide trained volunteers and professional brand promoters
              for events, campaigns, and brand activations in Prayagraj.
            </p>

            <p className="text-blue-100 text-lg">
              Fast response • Reliable manpower • Local expertise
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-30 rounded-2xl"></div>
            <img
              src={ContactHero}
              alt="ProVol Team"
              className="relative rounded-2xl shadow-2xl w-full h-80 md:h-96 object-cover mb-6"
            />
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 120" className="w-full absolute bottom-0">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z"
            fill="white"
          />
        </svg>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* LEFT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-red-600" />
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-700">
                <p><strong>Location:</strong> Prayagraj, Uttar Pradesh</p>
                <p><strong>Phone:</strong><a href="tel:+919026476490"> +91-9026476490</a></p>
                <p><strong>Email:</strong><a href="mailto:provolpromotions@gmail.com" target='_blank'> provolpromotions@gmail.com</a></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MessageCircle className="text-green-600" />
                WhatsApp Support
              </h2>

              <p className="text-gray-700 mb-6">
                Need volunteers urgently? Contact us instantly on WhatsApp.
              </p>

              <a
                href="https://wa.me/919621195498"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="text-blue-600" />
                Send Us a Message
              </h2>

              {/* FORM */}
              <form className="space-y-5" action="https://formspree.io/f/xgoaebzj"
                method="POST">

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-12 py-3 border-1 rounded-lg focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full pl-12 py-3 border-1 rounded-lg focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="w-full pl-12 py-3 border-1 rounded-lg focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-1 rounded-lg focus:border-blue-500 outline-none appearance-none"
                  >
                    <option value="">Select Service</option>
                    <option value="Event Volunteers">Event Volunteers</option>
                    <option value="Brand Promoters">Brand Promoters</option>
                    <option value="Pamphlet Distribution">Pamphlet Distribution</option>
                    <option value="Product Launch">Product Launch</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-1 rounded-lg focus:border-blue-500 outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Submit Enquiry
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
