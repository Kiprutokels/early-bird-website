'use client';

import React from 'react';
import { SCHOOL_INFO, NAVIGATION_ITEMS } from '@/lib/constants';
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'School Calendar', href: '#' },
    { label: 'Parent Portal', href: '#' },
  ];

  const programmes = [
    { label: 'Pre-Primary (Crèche & Nursery)', href: '#programmes' },
    { label: 'Kindergarten (KG 1 & 2)', href: '#programmes' },
    { label: 'Primary School (Pry 1-6)', href: '#programmes' },
    { label: 'Junior Secondary (JSS 1-3)', href: '#programmes' },
    { label: 'After-School Programme', href: '#' },
    { label: 'Holiday Camp', href: '#' },
  ];

  const schoolHours = [
    { day: 'Monday - Friday', time: '7:30 AM - 3:00 PM' },
    { day: 'After-School Care', time: '3:00 PM - 5:00 PM' },
    { day: 'Admin Office (Sat)', time: '9:00 AM - 1:00 PM' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto container-padding">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: School Info */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <span className="text-lg font-heading font-bold block leading-tight">
                  Early Bird
                </span>
                <span className="text-sm text-blue-300 font-medium leading-tight">
                  Academy
                </span>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed text-sm">
              {SCHOOL_INFO.description}
            </p>

            <p className="text-gold-400 italic font-medium text-sm">
              &ldquo;{SCHOOL_INFO.motto}&rdquo;
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-heading font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programmes */}
          <div className="space-y-5">
            <h3 className="text-lg font-heading font-semibold text-white">
              Programmes
            </h3>
            <ul className="space-y-3">
              {programmes.map((prog) => (
                <li key={prog.label}>
                  <a
                    href={prog.href}
                    className="text-neutral-300 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {prog.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-5">
            <h3 className="text-lg font-heading font-semibold text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-start gap-3 text-neutral-300 hover:text-gold-400 transition-colors group text-sm"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blue-400 group-hover:text-gold-400" />
                <div>
                  <span className="block">{SCHOOL_INFO.phone}</span>
                  <span className="block">{SCHOOL_INFO.altPhone}</span>
                </div>
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="flex items-center gap-3 text-neutral-300 hover:text-gold-400 transition-colors group text-sm"
              >
                <Mail className="w-4 h-4 shrink-0 text-blue-400 group-hover:text-gold-400" />
                {SCHOOL_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-neutral-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                {SCHOOL_INFO.address}
              </div>
            </div>

            {/* School Hours */}
            <div className="pt-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gold-400" />
                School Hours
              </h4>
              <div className="space-y-2">
                {schoolHours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-xs text-neutral-400"
                  >
                    <span>{item.day}</span>
                    <span className="text-neutral-300">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-1">
                Stay Connected
              </h3>
              <p className="text-neutral-400 text-sm">
                Subscribe to receive school news, events, and important updates.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
              />
              <button className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-lg font-semibold transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Early Bird Academy. All rights reserved. Built with{' '}
            <Heart className="w-3 h-3 inline text-red-400 fill-red-400" /> for
            education.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              School Handbook
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 hover:bg-gold-500 hover:text-navy-900 rounded-lg flex items-center justify-center transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};