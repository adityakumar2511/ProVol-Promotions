import React from 'react';
import { Users, Megaphone, FileText, Rocket, UserPlus, CheckCircle, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'event-volunteers',
      icon: <Users className="w-6 h-6" />,
      title: 'Event Volunteers',
      description: 'We provide trained volunteers for all types of events including:',
      eventTypes: [
        'College events',
        'Corporate events',
        'Exhibitions',
        'Trade shows',
        'Seminars & workshops',
        'Sports events'
      ],
      additionalInfo: 'Our volunteers assist in registration, crowd handling, guest support, stage management and logistics.',
      image: "/event_volunteer.png",
      imagePosition: 'left'
    },
    {
      id: 'brand-promoters',
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Brand Promoters',
      description: 'Our professional brand promoters help you promote your product or service through:',
      eventTypes: [
        'Mall promotions',
        'Market activations',
        'Product demos',
        'Sampling campaigns',
        'Traffic signals'
      ],
      additionalInfo: 'We ensure your brand reaches the right audience with impact.',
      image: "/brand_promotor.png",
      imagePosition: 'right'
    },
    {
      id: 'pamphlet-distribution',
      icon: <FileText className="w-6 h-6" />,
      title: 'Pamphlet Distribution',
      description: 'We provide a dedicated team for flyer and pamphlet distribution in:',
      eventTypes: [
        'Residential areas',
        'Colleges',
        'Offices',
        'Markets',
        'Traffic signals'
      ],
      additionalInfo: 'Door-to-door and hand-to-hand distribution available.',
      image: "/pamplate.png",
      imagePosition: 'left'
    },
    {
      id: 'product-launch',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Product Launch Support',
      description: 'Launching a new product or service? We provide volunteers and promoters to support:',
      eventTypes: [
        'Brand setup',
        'Crowd engagement',
        'Lead collection',
        'On-ground coordination'
      ],
      additionalInfo: '',
      image: "/product_launch.png",
      imagePosition: 'right'
    },
    {
      id: 'custom-staffing',
      icon: <UserPlus className="w-6 h-6" />,
      title: 'Custom Staffing',
      description: 'Need specialized support? We provide custom staffing solutions tailored to your requirements.',
      eventTypes: [
        'Field marketing teams',
        'Event coordinators',
        'Customer service representatives',
        'Promotional staff'
      ],
      additionalInfo: 'Flexible staffing solutions designed around your unique needs.',
      image: "/custom_staffing.png",
      imagePosition: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ================= BREADCRUMB ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-medium">Service</span>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-8">
            Trusted Local Manpower Partner
          </h1>
          <p className="text-xl mb-0 text-blue-100">
            Professional Volunteers & Brand Promoters
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Reliable on-ground manpower solutions for events, promotions, product launches & campaigns in Prayagraj.
          </p>
          <a className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300" href='/contact' target='_blank'>
            Get Volunteers Now
          </a>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`mb-24 last:mb-0 ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
          >
            <div className={`flex flex-col ${service.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl w-full h-120 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Service {index + 1}
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.eventTypes.map((type, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </li>
                  ))}
                </ul>

                {service.additionalInfo && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 italic">{service.additionalInfo}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;