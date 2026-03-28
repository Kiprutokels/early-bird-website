'use client';

import React from 'react';
import { Users, GraduationCap, Calendar, Trophy } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      label: 'Happy Pupils',
      description: 'Enrolled across all programmes',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: '50+',
      label: 'Qualified Teachers',
      description: 'Dedicated & experienced staff',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Serving community since 2009',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: '98%',
      label: 'Exam Success Rate',
      description: 'Outstanding results',
    },
  ];

  return (
    <section className="py-16 lg:py-20 gradient-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto container-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-400 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-white/90 font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-xs sm:text-sm hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};