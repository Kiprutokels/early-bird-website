'use client';

import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Users, BookOpen, Trophy, Music } from 'lucide-react';

export const Gallery: React.FC = () => {
  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'classroom', label: 'Classrooms', icon: BookOpen },
    { id: 'students', label: 'Our Pupils', icon: Users },
    { id: 'events', label: 'Events', icon: Trophy },
    { id: 'activities', label: 'Activities', icon: Music },
  ];

  const galleryItems = [
    { id: 1, category: 'classroom', title: 'Primary Classroom', description: 'Interactive learning session in Primary 3' },
    { id: 2, category: 'students', title: 'Morning Assembly', description: 'Pupils during morning assembly' },
    { id: 3, category: 'events', title: 'Sports Day', description: 'Annual inter-house sports competition' },
    { id: 4, category: 'activities', title: 'Science Fair', description: 'JSS students showcasing science projects' },
    { id: 5, category: 'classroom', title: 'Pre-Primary Class', description: 'Play-based learning in KG 1' },
    { id: 6, category: 'students', title: 'Graduation Day', description: 'KG 2 graduation ceremony' },
    { id: 7, category: 'events', title: 'Cultural Day', description: 'Celebrating Nigerian cultural heritage' },
    { id: 8, category: 'activities', title: 'Music Class', description: 'Choir rehearsal for Easter concert' },
    { id: 9, category: 'students', title: 'Reading Time', description: 'Library reading session' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const bgColors: Record<string, string> = {
    classroom: 'from-navy-100 to-blue-50',
    students: 'from-blue-100 to-navy-50',
    events: 'from-gold-100 to-gold-50',
    activities: 'from-navy-50 to-blue-100',
  };

  const iconColors: Record<string, string> = {
    classroom: 'text-navy-400',
    students: 'text-blue-400',
    events: 'text-gold-500',
    activities: 'text-navy-300',
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            School Life
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A glimpse into the vibrant daily life, events, and activities at
            Early Bird Academy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-navy-500 text-white shadow-lg shadow-navy-500/30'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-navy-50 hover:text-navy-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-neutral-100 hover:border-navy-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${bgColors[item.category]} flex flex-col items-center justify-center p-6 text-center`}
              >
                <ImageIcon
                  className={`w-12 h-12 ${iconColors[item.category]} mb-3 group-hover:scale-110 transition-transform duration-300`}
                />
                <p className="text-neutral-500 text-sm font-medium">
                  Photo
                </p>
                <p className="text-neutral-400 text-xs mt-1">
                  Recommended: 600 × 450px
                </p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note for adding photos */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-5 py-3 rounded-xl text-sm">
            <Camera className="w-4 h-4" />
            <span>Photos coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};