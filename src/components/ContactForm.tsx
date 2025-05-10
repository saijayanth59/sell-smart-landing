
import React, { useState } from 'react';
import { toast } from 'sonner';

const licenseTypes = [
  "Enterprise Software",
  "Creative Suite",
  "Developer Tools",
  "Business Applications",
  "Other"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {

      console.log('Form data submitted:', formData);
      
      toast.success('Thank you for your message. We\'ll be in touch soon!');
      

      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    } else {
      toast.error('Please fill in all required fields correctly');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-field ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-field ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`form-field ${errors.company ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="ABC Corporation"
          />
          {errors.company && <p className="text-sm text-red-500 mt-1">{errors.company}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700">
            License Type <span className="text-red-500">*</span>
          </label>
          <select
            id="licenseType"
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className={`form-field bg-white ${errors.licenseType ? 'border-red-500 ring-1 ring-red-500' : ''}`}
          >
            <option value="" disabled>Select license type</option>
            {licenseTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.licenseType && <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="form-field"
            placeholder="Tell us about your software licenses and how we can help..."
          />
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="w-full apple-button">
            Get a Valuation
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
