import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterLight = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Penetration Testing', href: '/services/penetration-testing' },
        { name: 'Vulnerability Assessment', href: '/services/vulnerability-assessment' },
        { name: 'AI Security Solutions', href: '/services/ai-security' },
        { name: 'Web3 Security', href: '/services/web3-security' },
        { name: 'Incident Response', href: '/services/incident-response' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Security', href: '/solutions/enterprise' },
        { name: 'Cloud Security', href: '/solutions/cloud' },
        { name: 'IoT Security', href: '/solutions/iot' },
        { name: 'Blockchain Security', href: '/solutions/blockchain' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Security Blog', href: '/blog' },
        { name: 'Research Papers', href: '/research' },
        { name: 'Security Tools', href: '/tools' },
        { name: 'Training', href: '/training' },
        { name: 'Documentation', href: '/docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/cyberguard', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/cyberguard', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/cyberguard', label: 'GitHub' }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: '🏆' },
    { name: 'SOC 2 Type II', icon: '🔒' },
    { name: 'CISSP', icon: '🛡️' },
    { name: 'CISM', icon: '🎯' }
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-orbitron font-bold text-foreground mb-4">
              Stay Ahead of Cyber Threats
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest cybersecurity insights, threat intelligence, and security tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              🔒 Your privacy is protected. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Shield className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg"></div>
                </div>
                <div className="text-2xl font-orbitron font-bold">
                  <span className="text-primary">Cyber</span>
                  <span className="text-accent">Guard</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Leading cybersecurity firm providing AI-powered protection and Web3-ready security solutions 
                for the digital age. Protecting your digital assets with next-generation technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-CYBER</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@cyberguard.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications & Awards */}
      <div className="py-8 border-t border-border border-b border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h4 className="text-lg font-orbitron font-semibold text-foreground mb-6">
              Certifications & Compliance
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center space-x-2 px-4 py-3 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg">{cert.icon}</span>
                  <span className="text-sm font-medium text-foreground">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} CyberGuard. All rights reserved. | Securing the digital future with AI & Web3.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>All Systems Operational</span>
              </span>
              <a href="/status" className="hover:text-primary transition-colors">
                System Status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Light Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default FooterLight;