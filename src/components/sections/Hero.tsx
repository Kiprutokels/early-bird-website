'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import Slider from 'react-slick';
import {
  Briefcase,
  MonitorSmartphone,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-brand-500 mb-4" />,
      title: 'HR Solutions',
      desc: 'Tailored HR strategies that drive productivity and growth.',
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-brand-500 mb-4" />,
      title: 'ICT Consultancy',
      desc: 'Cutting-edge digital solutions to modernize your business.',
    },
    {
      icon: <Users className="w-10 h-10 text-brand-500 mb-4" />,
      title: 'Talent Management',
      desc: 'Helping you find and retain the best professionals.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-500 mb-4" />,
      title: 'Recruitment services',
      desc: 'Protecting your digital infrastructure with robust systems.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Empowering Your{' '}
            <span className="text-brand-500">Digital Future</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 animate-slide-up">
            Leading HR solutions and ICT consultancy services that transform
            businesses and accelerate growth in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Watch Demo
            </Button>
          </div>

          {/* Services Carousel */}
          <div className="mt-16">
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center hover:bg-white/20 transition">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80">{service.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
