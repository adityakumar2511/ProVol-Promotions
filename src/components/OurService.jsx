import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Megaphone,
    FileText,
    ShoppingBag,
    Store,
    Map
} from 'lucide-react';

const OurServices = () => {
    const services = [
        {
            icon: Users,
            title: 'Event Volunteers',
            description: 'Professional volunteers for all types of events'
        },
        {
            icon: Megaphone,
            title: 'Brand Promoters',
            description: 'Skilled promoters to boost brand awareness'
        },
        {
            icon: FileText,
            title: 'Pamphlet Distribution',
            description: 'High-impact flyer and pamphlet distribution'
        },
        {
            icon: ShoppingBag,
            title: 'Product Launch Support',
            description: 'End-to-end support for successful product launches'
        },
        {
            icon: Store,
            title: 'Mall / Market Promotions',
            description: 'On-ground promotion teams for malls & markets'
        },
        {
            icon: Map,
            title: 'Roadshows & Activations',
            description: 'Engaging roadshows and activation campaigns'
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: 'easeOut' }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="font-heading font-bold text-3xl sm:text-3xl  md:text-5xl text-gray-800 leading-3">
                        <span className="text-white text-3xl sm:text-3xl  md:text-5xl">Our </span>
                        <span className="text-orange-500 text-3xl sm:text-3xl  md:text-5xl">Service</span>{' '}
                    </h2>
                    <p className="mt-4 text-white max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
                        Comprehensive on-ground manpower and promotion solutions
                        designed to deliver measurable results.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="
                group
                rounded-2xl
                p-6
                bg-white/95
                border border-blue-100
                shadow-md
                hover:shadow-2xl
                transition-all
                cursor-pointer
              "
                        >
                            {/* Icon */}
                            <div
                                className="
                  w-14 h-14
                  rounded-xl
                  bg-orange-600
                  flex items-center justify-center
                  mb-4
                  shadow-lg
                  group-hover:scale-110
                  transition-transform
                "
                            >
                                <service.icon size={28} className="text-white" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl ">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-14"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
              px-10 py-4
              bg-orange-500 text-white
              rounded-xl
              font-semibold text-lg
              hover:bg-orange-600
              shadow-xl
              transition-colors
            "
                        href='/service'
                        target="_blank "
                    >
                        View All Services
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
};

export default OurServices;
