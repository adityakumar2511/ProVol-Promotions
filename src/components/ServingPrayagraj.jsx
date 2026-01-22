import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ServingPrayagraj = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE — MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="
              relative
              w-full
              h-[280px]
              sm:h-[350px]
              md:h-[420px]
              rounded-2xl
              overflow-hidden
              shadow-xl
              border border-blue-100
            ">
              {/* Replace src with your actual Google Map embed */}
              <iframe
                title="Prayagraj Map"
                src="https://maps.google.com/maps?q=prayagraj&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Pin (optional branding touch) */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                <MapPin size={18} className="text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">
                  Serving Prayagraj
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-3xl  md:text-5xl text-gray-800 leading-3 mb-4">
              Serving <span className="text-blue-600 text-3xl sm:text-3xl  md:text-5xl">Only</span>{' '}
              <span className="text-orange-500 text-3xl sm:text-3xl  md:text-5xl">Prayagraj</span>{' '}
              <span className="text-gray-500 text-xl">(Currently)</span>
            </h2>

            <p className="text-gray-700 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              We currently provide trained volunteers and professional brand
              promoters exclusively in Prayagraj. This focused approach helps
              us maintain quick response times, quality staff, and reliable
              on-ground execution.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Local Workforce',
                'Quick Response',
                'Trained Staff',
                'Quality Service'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700 text-gray-600  text-base sm:text-lg md:text-xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-3
                bg-orange-500 text-white
                rounded-xl
                font-semibold
                text-base sm:text-lg
                hover:bg-orange-600
                transition-colors
                shadow-lg
              "
              href='/contact'
              target="_blank "
            >
              Contact Us
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServingPrayagraj;
