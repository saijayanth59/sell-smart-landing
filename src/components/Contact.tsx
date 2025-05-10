import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-softsell-gray py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
          <h2 className="heading-lg">Get in Touch</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Ready to unlock the value of your unused software licenses? Fill out
            the form below and we'll be in touch within 24 hours
          </p>
        </div>

        <div className="mt-12 animate-on-scroll opacity-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
