
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { number: "01.", name: "About", href: "#about" },
    { number: "02.", name: "Skills", href: "#skills" },
    { number: "03.", name: "Projects", href: "#projects" },
    { number: "04.", name: "Interests", href: "#interests" },
    { number: "05.", name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-teal font-mono text-2xl font-bold">
          S<span className="text-lightestSlate">.</span>S<span className="text-lightestSlate">.</span>M
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="nav-link">
                  <span className="nav-link-number">{item.number}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-lightestSlate hover:text-teal hover:bg-transparent"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-navy/95 flex flex-col justify-center items-center z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <nav>
            <ul className="flex flex-col gap-6 items-center">
              {navItems.map((item, index) => (
                <li key={index} className="text-center">
                  <a 
                    href={item.href} 
                    className="nav-link text-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-link-number text-base">{item.number}</div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
