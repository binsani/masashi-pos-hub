
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
        <section className="bg-primary-800 py-20 text-white">
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
                          123 Business Avenue<br />
                          Tech District, City<br />
                          10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Email Us</h3>
                        <a href="mailto:info@masashi-pos.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                          info@masashi-pos.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Call Us</h3>
                        <a href="tel:+1234567890" className="text-gray-600 hover:text-orange-500 transition-colors">
                          +1 (234) 567-890
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
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-white pt-0">
          <div className="max-w-full">
            <div className="h-96 w-full bg-gray-200">
              {/* In a real implementation, you'd embed a Google Maps iframe here */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Google Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
