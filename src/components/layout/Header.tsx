"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS, SCHOOL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GraduationCap, Menu, X, Phone } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar — hidden on mobile, hidden once scrolled */}
      <div
        className={`hidden lg:block bg-navy-700 text-white text-sm transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-2 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              {SCHOOL_INFO.phone}
            </span>
            <span>✉️ {SCHOOL_INFO.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="italic font-medium text-gold-300">
              &ldquo;{SCHOOL_INFO.motto}&rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "bg-navy-500" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <GraduationCap
                  className={`w-6 h-6 lg:w-7 lg:h-7 ${
                    isScrolled ? "text-white" : "text-gold-400"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg lg:text-xl font-heading font-bold leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-navy-700" : "text-white"
                  }`}
                >
                  Early Bird
                </span>
                <span
                  className={`text-xs lg:text-sm font-medium leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isScrolled
                      ? "text-neutral-700 hover:text-navy-500"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-navy-500" : "bg-gold-400"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className={
                  isScrolled
                    ? ""
                    : "border-white text-white hover:bg-white hover:text-navy-700"
                }
              >
                Parent Portal
              </Button>
              <Button
                variant={isScrolled ? "gold" : "primary"}
                size="sm"
                className={
                  isScrolled
                    ? ""
                    : "bg-gold-500 text-navy-900 hover:bg-gold-400"
                }
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-neutral-800" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-neutral-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl mt-2 mb-4 p-6 border border-neutral-100">
              <nav className="flex flex-col space-y-1">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-neutral-700 hover:text-navy-500 hover:bg-navy-50 font-medium py-3 px-4 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-neutral-200">
                  <Button variant="outline" size="sm">
                    Parent Portal
                  </Button>
                  <Button variant="gold" size="sm">
                    Apply Now
                  </Button>
                </div>
              </nav>

              {/* Mobile contact info */}
              <div className="mt-6 pt-4 border-t border-neutral-200 text-sm text-neutral-500 space-y-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> {SCHOOL_INFO.phone}
                </p>
                <p>✉️ {SCHOOL_INFO.email}</p>
                <p className="italic text-navy-600 font-medium mt-2">
                  &ldquo;{SCHOOL_INFO.motto}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
