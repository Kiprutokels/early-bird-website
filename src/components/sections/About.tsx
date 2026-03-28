'use client';

import React from 'react';
import { SCHOOL_INFO, SCHOOL_VALUES } from '@/lib/constants';
import {
  Heart,
  Award,
  Shield,
  Sparkles,
  CheckCircle,
  Target,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Award,
  Shield,
  Sparkles,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            About <span className="text-gradient">Early Bird Academy</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Since {SCHOOL_INFO.established}, we have been committed to nurturing
            young minds and building future leaders through quality education,
            strong moral values, and holistic development.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left – Image Placeholder / Welcome Message */}
          <div className="space-y-6">
            {/* Image placeholder area */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 to-blue-50 aspect-[4/3]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-navy-500/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-navy-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-700 mb-2">
                  Our School
                </h3>
                <p className="text-neutral-500 text-sm">
                  school photo
                </p>
                <p className="text-neutral-400 text-xs mt-2">
                  Recommended: 800 × 600px
                </p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/20 rounded-bl-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy-500/10 rounded-tr-[100px]" />
            </div>
          </div>

          {/* Right – About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
                Shaping Tomorrow&apos;s Leaders Today
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Early Bird Academy is a distinguished Pre-Primary, Primary, and Junior
                Secondary School that provides a conducive learning environment where
                every child is given the opportunity to thrive. Our experienced and
                dedicated staff employ modern teaching methods alongside our rich
                Kenyan educational heritage.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We believe every child is unique and gifted. Our mission is to discover,
                nurture, and develop the God-given potential in every pupil — academically,
                morally, socially, and physically — preparing them for excellence in all
                areas of life.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Qualified & Passionate Teachers',
                'Safe & Secure Environment',
                'Modern Learning Facilities',
                'Small Class Sizes',
                'Regular Progress Reports',
                'Active PTA Engagement',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8">
          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
              Our Foundation
            </p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">
              Core Values That Guide Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHOOL_VALUES.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart;
              const colors = [
                'from-navy-500 to-blue-600',
                'from-blue-500 to-blue-700',
                'from-navy-600 to-navy-800',
                'from-gold-500 to-gold-600',
              ];
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};