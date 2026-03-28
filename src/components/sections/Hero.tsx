"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { SCHOOL_INFO } from "@/lib/constants";
import {
  GraduationCap,
  BookOpen,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerFired = useRef(false);
  const videoIsLoaded = useRef(false);

  // Attempt to play the video
  const tryPlay = useCallback(() => {
    if (timerFired.current && videoIsLoaded.current && videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShowVideo(true);
          setVideoReady(true);
        })
        .catch(() => {
          // Autoplay blocked — still show the video (it'll be paused on first frame)
          setShowVideo(true);
          setVideoReady(true);
        });
    }
  }, []);

  // 2-second delay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      timerFired.current = true;
      tryPlay();
    }, 2000);

    return () => clearTimeout(timer);
  }, [tryPlay]);

  // Called when the browser has enough data to play
  const handleCanPlayThrough = () => {
    videoIsLoaded.current = true;
    tryPlay();
  };

  // Fallback: also listen for loadeddata
  const handleLoadedData = () => {
    videoIsLoaded.current = true;
    tryPlay();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== STATIC GRADIENT BACKGROUND ===== */}
      <div
        className={`absolute inset-0 gradient-bg transition-opacity duration-[1500ms] ease-in-out ${
          showVideo && videoReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-navy-900/30" />
      </div>

      {/* ===== HERO VIDEO BACKGROUND ===== */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
          showVideo && videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={handleCanPlayThrough}
          onLoadedData={handleLoadedData}
        >
          {/* Add multiple formats for maximum browser compatibility */}
          <source src="/videos/hero-school.mp4" type="video/mp4" />
          <source src="/videos/hero-school.webm" type="video/webm" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy-900/50" />
        {/* Bottom gradient for blending into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-900/80 to-transparent" />
      </div>

      {/* ===== ANIMATED BACKGROUND ELEMENTS ===== */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-[1500ms] ${
          showVideo && videoReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* ===== DECORATIVE PATTERN ===== */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1500ms] ${
          showVideo && videoReady ? "opacity-0" : "opacity-5"
        }`}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white pt-32 sm:pt-36 lg:pt-40 xl:pt-44 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-white/90">
              Established {SCHOOL_INFO.established} &bull; Excellence in
              Education
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 animate-fade-in-up delay-100 drop-shadow-lg">
            Welcome to{" "}
            <span className="text-gradient-gold">{SCHOOL_INFO.name}</span>
          </h1>

          {/* Motto */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up delay-200">
            <div className="w-12 h-px bg-gold-400/60" />
            <p className="text-lg md:text-xl font-heading font-semibold text-gold-300 italic tracking-wide drop-shadow-md">
              &ldquo;{SCHOOL_INFO.motto}&rdquo;
            </p>
            <div className="w-12 h-px bg-gold-400/60" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300 drop-shadow-md">
            {SCHOOL_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <Button
              size="lg"
              variant="gold"
              className="w-full sm:w-auto text-base"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Enrol Your Child
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-navy-700 text-base"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Programmes
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up delay-500">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                label: "Pre-Primary",
                sub: "Ages 2 - 5",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                label: "Primary",
                sub: "Ages 6 - 11",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                label: "JSS",
                sub: "Ages 12 - 14",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-navy-600/60 hover:border-gold-400/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-white group-hover:text-white drop-shadow-sm">
                    {item.label}
                  </span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-1 text-white/60">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};