import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle smooth scrolling for navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });

          setIsMenuOpen(false);

          history.pushState(null, "", target.getAttribute("href") || "");
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <span
              className={`text-xl font-medium transition-colors duration-300 ${
                scrolled ? "text-softsell-blue" : "text-softsell-dark-blue"
              }`}
            >
              SoftSell
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#how-it-works"
              className={`transition-all duration-300 story-link ${
                scrolled
                  ? "text-gray-600 hover:text-softsell-blue"
                  : "text-gray-800 hover:text-white"
              }`}
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className={`transition-all duration-300 story-link ${
                scrolled
                  ? "text-gray-600 hover:text-softsell-blue"
                  : "text-gray-800 hover:text-white"
              }`}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className={`transition-all duration-300 story-link ${
                scrolled
                  ? "text-gray-600 hover:text-softsell-blue"
                  : "text-gray-800 hover:text-white"
              }`}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={`transition-all duration-300 story-link ${
                scrolled
                  ? "text-gray-600 hover:text-softsell-blue"
                  : "text-gray-800 hover:text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block apple-button text-sm hover-scale"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled ? "text-gray-600" : "text-gray-800"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 text-sm font-medium animate-fade-in bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-softsell-blue rounded-md transition-all duration-300"
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-softsell-blue rounded-md transition-all duration-300"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-softsell-blue rounded-md transition-all duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-softsell-blue rounded-md transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block mx-4 py-2 apple-button text-center hover-scale"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
