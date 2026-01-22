import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Upload,
  CheckCircle
} from "lucide-react";

import VolunteerHero from "/join_volunteer.png"; // replace if needed

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "Prayagraj",
    age: "",
    experience: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
              Join ProVol Promotions <br /> as a Volunteer
            </h1>

            <p className="text-gray-700 text-lg mb-4">
              Looking for part-time work or event-based opportunities in Prayagraj?
            </p>

            <p className="text-gray-700 text-lg">
              Join ProVol Promotions and earn by working as a volunteer or brand promoter.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={VolunteerHero}
              alt="Volunteer"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* WHO CAN APPLY */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                ❓ Who Can Apply?
              </h2>

              <ul className="space-y-3">
                {[
                  "College students",
                  "Freshers",
                  "Anyone looking for short-term work",
                  "Good communication skills preferred",
                  "Basic professionalism required"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                🎁 Benefits
              </h2>

              <ul className="space-y-3">
                {[
                  "Daily / weekly payments",
                  "Flexible working hours",
                  "Work at events & brand campaigns",
                  "Experience certificate (on request)",
                  "Safe & verified work opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2">
              💰 Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* MOBILE */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* CITY */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option>Prayagraj</option>
                </select>
              </div>

              {/* AGE */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  type="number"
                  name="age"
                  required
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* EXPERIENCE */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (optional)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* FILE */}
              <div className="relative">
                <Upload className="absolute left-3 top-3 text-blue-600" />
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full pl-10 py-2 border rounded-lg bg-white"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
