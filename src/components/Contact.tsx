
import React, { useState } from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">06.</span> Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-fadeIn">
            <h3 className="text-lightestSlate text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-slate mb-8">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology. 
              Feel free to reach out through the form or via my contact details.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-teal mr-4" size={20} />
                <a href="mailto:shobith1820@gmail.com" className="link-highlight">shobith1820@gmail.com</a>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-teal mr-4" size={20} />
                <a href="tel:+919900993443" className="link-highlight">+91 9900993443</a>
              </div>
              
              <div className="flex items-center">
                <Github className="text-teal mr-4" size={20} />
                <a href="https://github.com/Acegenius20" target="_blank" rel="noopener noreferrer" className="link-highlight">
                  Acegenius20
                </a>
              </div>
            </div>
            
            <p className="text-slate mt-8">
              Based in Bangalore, Karnataka, India
            </p>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="bg-lightNavy p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lightestSlate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy border border-lightestNavy rounded px-4 py-2 text-lightSlate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-all"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-lightestSlate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy border border-lightestNavy rounded px-4 py-2 text-lightSlate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-all"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-lightestSlate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-navy border border-lightestNavy rounded px-4 py-2 text-lightSlate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center h-12"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
