import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyProVol = () => {
    const features = [
        'On-demand volunteers for events',
        'Professional brand promoters',
        'Pamphlet & flyer distribution team',
        'Local Prayagraj workforce',
        'Quick deployment within hours',
        'Affordable pricing',
        'Trained & verified staff',
        'Dedicated team coordination',
        'Real-time reporting & supervision'
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: 'easeOut' }
        }
    };

    return (
        <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h1 className="font-heading font-bold text-3xl sm:text-3xl  md:text-5xl text-gray-800 leading-3">
                        <span className="text-blue-600 text-3xl sm:text-3xl  md:text-5xl">Pro</span>
                        <span className="text-orange-500 text-3xl sm:text-3xl  md:text-5xl">Vol</span>{' '}
                        Promotions
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
                        Trusted volunteer and promotion services delivering speed,
                        professionalism, and real on-ground results.
                    </p>
                </motion.div>

                {/* Feature Boxes */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="
                rounded-2xl
                p-6
                bg-gradient-to-br
                from-blue-50
                to-blue-100
                border border-blue-200
                shadow-sm
                hover:shadow-xl
                hover:border-blue-400
                transition-all
              "
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                    flex-shrink-0
                    w-10 h-10
                    rounded-full
                    bg-blue-600
                    flex items-center justify-center
                    shadow-md
                  "
                                >
                                    <CheckCircle className="text-white" size={22} />
                                </div>

                                <p className="text-black font-medium text-base sm:text-lg leading-snug ">
                                    {feature}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyProVol;
