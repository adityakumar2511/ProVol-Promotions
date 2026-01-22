import React from 'react';
import {
  Target,
  Handshake,
  CheckCircle,
  ChevronRight,
  Users,
  MapPin,
  Workflow
} from 'lucide-react';

const AboutUsPage = () => {
  const values = [
    'Reliability',
    'Professionalism',
    'Speed',
    'Transparency',
    'Quality Service'
  ];

  const process = [
    {
      title: 'Understanding Your Requirement',
      desc: 'We carefully understand your event or campaign needs, manpower size, location, and timeline.'
    },
    {
      title: 'Assigning Trained Local Staff',
      desc: 'We deploy trained volunteers and promoters from our local Prayagraj workforce.'
    },
    {
      title: 'On-Ground Supervision',
      desc: 'Our team ensures proper coordination, discipline, and performance during execution.'
    },
    {
      title: 'Feedback & Improvement',
      desc: 'Post-event feedback helps us continuously improve service quality.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
                About ProVol Promotions
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Local Manpower.<br />
                <span className="text-orange-400">Professional Execution.</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                ProVol Promotions is a Prayagraj-based on-demand volunteer and
                brand promotion service focused on delivering reliable,
                trained, and disciplined manpower for events and campaigns.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                alt="ProVol Team"
                className="w-full h-96 object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Who We <span className="text-orange-600">Serve</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Event Organizers',
              'Brands & Startups',
              'Marketing Agencies',
              'Educational Institutions'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-orange-400 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300 text-center"
              >
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-xl text-white-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ONLY PRAYAGRAJ ================= */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-orange-400">
                  Why We Focus Only on Prayagraj
                </h2>
              </div>

              <p className="text-white text-lg leading-relaxed mb-4">
                We currently operate exclusively in Prayagraj to maintain
                complete control over manpower quality, response time, and
                service reliability.
              </p>

              <p className="text-white text-lg leading-relaxed">
                This city-focused approach allows us to personally train,
                verify, and manage our workforce while ensuring quick
                deployment for urgent requirements.
              </p>
            </div>

            <div className="bg-orange-500 rounded-2xl p-8 shadow-xl">
              {[
                'Faster deployment',
                'Better-trained staff',
                'Local supervision',
                'Higher service quality'
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-white text-lg">{point}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We <span className="text-blue-600">Work</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md  transition border border-orange-700 shadow-2xl hover:scale-105 transition duration-300"
              >
                <Workflow className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-lg text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & VALUES ================= */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a trusted manpower and promotion partner for events
                and brands across India while maintaining service excellence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                  By starting with a city-first approach, we focus on
                  building operational excellence, refining our systems,
                  and delivering consistent quality before expanding to
                  multiple cities.
                </p>

                <p className="font-semibold text-lg text-blue-700">
                  Our long-term goal is to scale responsibly while maintaining
                  the same level of trust, speed, and service quality that
                  defines ProVol Promotions today.
                </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <Handshake className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              </div>

              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700 text-lg font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
