import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Procedure from "@/components/Procedure";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    if (elements) {
      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (elements) {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, [options]);

  return containerRef;
};

const Index = () => {
  const animationRef = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col antialiased" ref={animationRef}>
      <Navbar />
      <HeroSection />
      <Procedure />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
