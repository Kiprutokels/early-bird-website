'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mrs. Adaeze Okafor',
      role: 'Parent',
      child: 'Mother of Chisom (Primary 4)',
      content:
        'Early Bird Academy has been a blessing to our family. My daughter has grown so much in confidence and academics. The teachers truly care about each child\'s progress, and the school environment is safe and nurturing.',
      rating: 5,
      initials: 'AO',
    },
    {
      name: 'Mr. Tunde Bakare',
      role: 'Parent',
      child: 'Father of Femi (JSS 2)',
      content:
        'We moved our son here two years ago and it was the best decision. His performance in Mathematics and Science improved dramatically. The discipline and moral training are exactly what we wanted for him.',
      rating: 5,
      initials: 'TB',
    },
    {
      name: 'Mrs. Grace Mensah',
      role: 'Parent',
      child: 'Mother of Ama (KG 2)',
      content:
        'The pre-primary programme is wonderful! My little girl loves going to school every morning. The play-based learning approach is brilliant, and I can see her reading and writing skills developing beautifully.',
      rating: 5,
      initials: 'GM',
    },
    {
      name: 'Mr. Ibrahim Yusuf',
      role: 'Parent',
      child: 'Father of Aisha (Primary 6)',
      content:
        'The preparation of final exams is thorough and the teachers go above and beyond. My daughter is well prepared for secondary school. I also appreciate the extracurricular activities — she discovered her love for debate here.',
      rating: 5,
      initials: 'IY',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Parent Voices
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Trusted by{' '}
            <span className="text-gradient">Families</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from parents who have entrusted their children&apos;s education
            to Early Bird Academy and witnessed remarkable growth.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-navy-100 absolute top-6 right-6 group-hover:text-navy-200 transition-colors" />

              <div className="space-y-5">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4.5 h-4.5 text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-neutral-700 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-2 border-t border-neutral-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.child}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-navy-500 to-blue-600 rounded-2xl text-white">
          <h3 className="text-2xl font-heading font-bold mb-3">
            Give Your Child the Best Start in Life
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join hundreds of families who trust Early Bird Academy for quality
            education, strong values, and a bright future for their children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold">
              Enrol Your Child Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-navy-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Book a School Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};