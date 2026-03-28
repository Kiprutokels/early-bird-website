'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import {
  ClipboardList,
  FileText,
  CalendarCheck,
  UserCheck,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
} from 'lucide-react';

export const Admissions: React.FC = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: '01',
      title: 'Submit Enquiry',
      description:
        'Fill out our online enquiry form or visit the school to collect an admission form. Provide your child\'s details and preferred programme.',
    },
    {
      icon: FileText,
      step: '02',
      title: 'Submit Documents',
      description:
        'Provide required documents including birth certificate, previous school reports (if applicable), passport photographs, and immunisation records.',
    },
    {
      icon: CalendarCheck,
      step: '03',
      title: 'Assessment & Interview',
      description:
        'Your child will undergo a simple age-appropriate assessment. Parents will also have a brief interview with the Head Teacher to discuss expectations.',
    },
    {
      icon: UserCheck,
      step: '04',
      title: 'Admission Confirmation',
      description:
        'Upon successful assessment, you receive an admission letter. Complete the registration, pay fees, and collect the school uniform and materials.',
    },
  ];

  const requirements = [
    'Completed Admission Form',
    'Birth Certificate (Original & Copy)',
    'Passport Photographs (4 copies)',
    'Previous School Report (Transfers)',
    'Immunisation Card',
    'Parent/Guardian Valid ID',
  ];

  return (
    <section id="admissions" className="section-padding gradient-bg-light">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Join Our Family
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            <span className="text-gradient">Admissions</span> Process
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We welcome new families every term. Follow our simple four-step
            process to secure a place for your child at Early Bird Academy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-navy-200 z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-navy-300" />
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 border border-neutral-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300 text-center h-full">
                  {/* Step Number */}
                  <div className="text-xs font-bold text-navy-300 uppercase tracking-widest mb-3">
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirements & CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-navy-500" />
              Required Documents
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                Ready to Enrol?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Admission is ongoing for the current academic session. Spaces
                are limited, so we encourage early registration. Contact our
                admissions office today to begin the process.
              </p>

              <div className="space-y-3 mb-8">
                <a
                  href="tel:+2348123456789"
                  className="flex items-center gap-3 text-white/90 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+234 (0) 812 345 6789</span>
                </a>
                <a
                  href="mailto:admissions@earlybirdacademy.edu.ng"
                  className="flex items-center gap-3 text-white/90 hover:text-gold-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>admissions@earlybirdacademy.edu.ng</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="lg"
                className="flex-1"
              >
                Download Admission Form
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-white text-white hover:bg-white hover:text-navy-700"
              >
                Book a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};