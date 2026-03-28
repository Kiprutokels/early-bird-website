'use client';

import React from 'react';
import {
  BookOpen,
  Shield,
  Laptop,
  Bus,
  Utensils,
  Stethoscope,
  Music,
  FlaskConical,
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Modern Classrooms',
      description:
        'Spacious, well-ventilated classrooms equipped with smart boards and interactive learning tools for an engaging experience.',
      color: 'bg-navy-100 text-navy-600',
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratory',
      description:
        'A fully equipped science lab where pupils conduct hands-on experiments, fostering curiosity and scientific thinking.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Laptop,
      title: 'ICT / Computer Lab',
      description:
        'Modern computer lab with internet access, introducing pupils to digital literacy and 21st-century technology skills.',
      color: 'bg-navy-100 text-navy-600',
    },
    {
      icon: Music,
      title: 'Music & Arts Studio',
      description:
        'A creative space for music, drama, and visual arts — nurturing artistic talent and self-expression in every child.',
      color: 'bg-gold-100 text-gold-600',
    },
    {
      icon: Shield,
      title: 'Safe & Secure Campus',
      description:
        'Fully fenced and gated premises with CCTV surveillance, trained security personnel, and controlled access for peace of mind.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Bus,
      title: 'School Transportation',
      description:
        'Reliable and safe school bus service covering major routes, ensuring your child arrives at school comfortably.',
      color: 'bg-navy-100 text-navy-600',
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description:
        'A well-managed tuck shop and optional meal plans providing balanced, hygienic meals to keep pupils energised throughout the day.',
      color: 'bg-gold-100 text-gold-600',
    },
    {
      icon: Stethoscope,
      title: 'Sick Bay & First Aid',
      description:
        'On-site sick bay with trained health personnel ready to handle minor ailments and emergencies swiftly.',
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            World-Class{' '}
            <span className="text-gradient">Facilities & Care</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We provide a safe, stimulating, and well-resourced environment
            designed to support every aspect of your child&apos;s growth and
            learning journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-6 border border-neutral-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-4">
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-neutral-900 group-hover:text-navy-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};