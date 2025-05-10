
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    demoRequested: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, demoRequested: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        demoRequested: false
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="bg-primary-800 py-20 text-white bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 24, 57, 0.8), rgba(0, 24, 57, 0.9)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="max-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/90">
                Ready to streamline your inventory and point-of-sale operations? Get in touch with our team today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information and Form */}
        <section className="bg-white">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Visit Us</h3>
                        <p className="text-gray-600">
                          No 11 Shuaibu Gani Street<br />
                          Gwarinpa, Abuja<br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Email Us</h3>
                        <a href="mailto:support@masashipos.com.ng" className="text-gray-600 hover:text-orange-500 transition-colors">
                          support@masashipos.com.ng
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Call Us</h3>
                        <a href="tel:+2347077217173" className="text-gray-600 hover:text-orange-500 transition-colors">
                          +234 707 721 7173
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday<br />
                          9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <img 
                        src="/lovable-uploads/96ab36ed-301f-45b1-bee9-5d8d9742c160.png" 
                        alt="POS System Features" 
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium">Company</label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="resize-none"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="demoRequested"
                        name="demoRequested"
                        type="checkbox"
                        checked={formData.demoRequested}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <label htmlFor="demoRequested" className="ml-2 block text-sm text-gray-700">
                        I'd like to request a demo of Masashi POS
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
                
                {/* New POS Dashboard Image */}
                <div className="mt-8">
                  <img 
                    src="/lovable-uploads/2ecd2c25-348a-4490-aa52-2984886833e5.png" 
                    alt="Masashi POS Dashboard" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-white pt-12">
          <div className="max-w-full">
            <div className="h-96 w-full bg-gray-200 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0887316284344!2d7.406341!3d9.105391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745528ce9ddd%3A0x6e7d7cc4e59bba84!2sGwarinpa%20Estate%2C%20Abuja!5e0!3m2!1sen!2sng!4v1683891234!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Masashi POS Office Location"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
