import React from 'react';
import { motion } from 'framer-motion';
import HeroBannerImg from '/heroBanner.png';

const HeroBanner = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="
      relative 
      h-[60vh] 
      sm:h-[50vh] 
      md:h-[65vh]
      lg:h-[75vh]
      flex items-center
    ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBannerImg}
          alt="Volunteers Background"
          className="
            w-full h-full object-cover
            object-[50%_30%]
            sm:object-[50%_20%]
            lg:object-[50%_15%]
          "
        />

        {/* Blue Overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-r
          from-blue-900/95
          via-blue-800/85
          to-transparent
        " />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 w-full
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="
              text-xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold text-white
              mb-4 leading-6 md:leading-12 lg:leading-16
            "
          >
            On-Demand Volunteers &<br />
            Brand Promoters in Prayagraj
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="
              text-sm
              sm:text-lg
              md:text-xl
              text-gray-200
              mb-6 leading-relaxed
            "
          >
            We provide trained volunteers and professional promoters for events,
            campaigns, and brand activations — fast and reliable.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-4"
          >
            {/* Mobile: Only one button */}
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="
                sm:hidden
                px-6 py-3
                bg-orange-500 text-white
                rounded-lg font-semibold
                text-sm
                shadow-lg
              "
              href='/contact'
              target='_blank'
            >
              Get Volunteers Now
            </motion.a>

            {/* Desktop / Tablet Buttons */}
            <div className="hidden sm:flex gap-4">
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="
                  px-7 py-3
                  bg-orange-500 text-white
                  rounded-lg font-semibold
                  text-base
                  shadow-lg
                "
                href='/contact'
                target='_blank'
              >
                Get Volunteers Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
