'use client';

import React from 'react';
import { EXTRACURRICULARS } from '@/lib/constants';
import {
  Trophy,
  Music,
  Drama,
  Megaphone,
  Palette,
  Cpu,
  Users,
  Waves,
} from 'lucide-react';

const activityIcons = [
  Trophy,   // Football & Athletics
  Music,    // Music & Choir
  Users,    // Drama & Cultural Dance
  Megaphone, // Debate & Public Speaking
  Palette,  // Art & Craft Club
  Cpu,      // STEM / Robotics Club
  Users,    // Scouts & Community Service
  Waves,    // Swimming
];

const activityColors = [
  'bg-blue-500',
  'bg-gold-500',
  'bg-navy-500',
  'bg-blue-600',
  'bg-gold-400',
  'bg-navy-600',
  'bg-blue-400',
  'bg-navy-400',
];

export const Extracurriculars: React.FC = () => {
  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Beyond the Classroom
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Extracurricular Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We believe education goes beyond textbooks. Our vibrant
            extracurricular programme helps pupils discover passions, develop
            teamwork, and build confidence.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {EXTRACURRICULARS.map((activity, index) => {
            const Icon = activityIcons[index] || Trophy;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-400/30 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${activityColors[index]} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm lg:text-base">
                  {activity}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Activities vary by term and age group. Ask our admissions team for
            the current activity schedule.
          </p>
        </div>
      </div>
    </section>
  );
};