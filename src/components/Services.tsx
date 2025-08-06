import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  FileCheck, 
  Brain, 
  Link,
  Cloud,
  Smartphone,
  Building,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      features: ['Network Penetration', 'Web App Testing', 'Mobile App Security', 'Social Engineering'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Systematic evaluation of security weaknesses in your digital infrastructure.',
      features: ['Automated Scanning', 'Manual Verification', 'Risk Prioritization', 'Remediation Guidance'],
      color: 'accent'
    },
    {
      icon: FileCheck,
      title: 'Security Auditing',
      description: 'Thorough compliance checks and security policy evaluations.',
      features: ['Compliance Audits', 'Policy Review', 'Security Controls', 'Documentation'],
      color: 'primary'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: '24/7 rapid response to security incidents and breach containment.',
      features: ['Threat Containment', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident Review'],
      color: 'accent'
    },
    {
      icon: Brain,
      title: 'AI Security Solutions',
      description: 'Advanced AI-powered threat detection and automated security responses.',
      features: ['ML Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Predictive Security'],
      color: 'primary'
    },
    {
      icon: Link,
      title: 'Web3 Security',
      description: 'Specialized security services for blockchain and decentralized applications.',
      features: ['Smart Contract Audit', 'DeFi Security', 'NFT Protection', 'Blockchain Forensics'],
      color: 'accent'
    }
  ];

  const additionalServices = [
    { icon: Cloud, title: 'Cloud Security', color: 'primary' },
    { icon: Smartphone, title: 'IoT Security', color: 'accent' },
    { icon: Building, title: 'Enterprise Security', color: 'primary' },
    { icon: Zap, title: 'Zero Trust Architecture', color: 'accent' }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Light Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            <span className="text-primary">Our</span> <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions powered by cutting-edge AI and blockchain technology 
            to protect your digital assets in an ever-evolving threat landscape.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="px-6 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-sm font-medium">
              🤖 AI-Powered Protection
            </span>
            <span className="px-6 py-2 bg-accent/20 text-accent rounded-full border border-accent/30 text-sm font-medium">
              ⛓️ Web3 Ready
            </span>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-lg hover:scale-105 relative overflow-hidden"
            >
              {/* Light Background Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-cyber-outline group-hover:btn-cyber transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-8">
            Additional Security Solutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <service.icon className={`w-8 h-8 text-${service.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 bg-primary rounded-3xl text-primary-foreground">
          <h3 className="text-3xl font-orbitron font-bold mb-4">
            Ready to Secure Your Digital Future?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a comprehensive security assessment and discover how our AI-powered, 
            Web3-ready solutions can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg font-semibold">
              🛡️ Free Security Audit
            </Button>
            <Button className="bg-transparent border-2 border-background text-primary-foreground hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold">
              📞 Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;