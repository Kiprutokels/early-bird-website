'use client';

import React from 'react';
import { PROGRAMMES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import {
  Baby,
  BookOpen,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  BookOpen,
  GraduationCap,
};

export const Programmes: React.FC = () => {
  const colorSchemes: Record<
    string,
    {
      bg: string;
      iconBg: string;
      badge: string;
      border: string;
      accent: string;
    }
  > = {
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      badge: 'bg-blue-100 text-blue-700',
      border: 'border-blue-200 hover:border-blue-400',
      accent: 'text-blue-600',
    },
    navy: {
      bg: 'bg-navy-50',
      iconBg: 'bg-navy-500',
      badge: 'bg-navy-100 text-navy-700',
      border: 'border-navy-200 hover:border-navy-400',
      accent: 'text-navy-600',
    },
    gold: {
      bg: 'bg-gold-50',
      iconBg: 'bg-gold-500',
      badge: 'bg-gold-100 text-gold-600',
      border: 'border-gold-200 hover:border-gold-400',
      accent: 'text-gold-600',
    },
  };

  return (
    <section id="programmes" className="section-padding gradient-bg-light">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Programmes</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            From early years through junior secondary, our carefully designed
            programmes inspire curiosity, build knowledge, and develop
            character at every stage.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROGRAMMES.map((programme) => {
            const Icon = iconMap[programme.icon] || BookOpen;
            const colors = colorSchemes[programme.color] || colorSchemes.navy;

            return (
              <div
                key={programme.id}
                className={`group relative bg-white rounded-2xl overflow-hidden border-2 ${colors.border} transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Top Banner */}
                <div className={`${colors.bg} p-6 pb-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span
                      className={`${colors.badge} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {programme.ageRange}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
                    {programme.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {programme.description}
                  </p>

                  <ul className="space-y-3">
                    {programme.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <CheckCircle
                          className={`w-4.5 h-4.5 ${colors.accent} shrink-0 mt-0.5`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};