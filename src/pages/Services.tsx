import React from 'react';
import Header from '@/components/Header';
import FooterLight from '@/components/FooterLight';
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
  Zap,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Search,
      title: 'Penetration Testing',
      subtitle: 'Advanced Security Assessment',
      description: 'Comprehensive penetration testing services that simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them.',
      features: [
        'Network Infrastructure Testing',
        'Web Application Security Assessment',
        'Mobile Application Penetration Testing',
        'Wireless Network Security Testing',
        'Social Engineering Assessments',
        'Physical Security Testing'
      ],
      benefits: [
        'Identify critical vulnerabilities',
        'Compliance with industry standards',
        'Detailed remediation guidance',
        'Executive and technical reporting'
      ],
      pricing: 'Starting at $5,000',
      timeline: '2-4 weeks',
      aiPowered: true,
      web3Ready: false
    },
    {
      icon: Brain,
      title: 'AI Security Solutions',
      subtitle: 'Next-Generation Threat Detection',
      description: 'Cutting-edge AI-powered security solutions that provide real-time threat detection, behavioral analysis, and automated incident response.',
      features: [
        'Machine Learning Threat Detection',
        'Behavioral Anomaly Analysis',
        'Automated Incident Response',
        'Predictive Security Analytics',
        'AI-Driven Vulnerability Assessment',
        'Intelligent Security Orchestration'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        'Real-time automated responses',
        'Reduced false positives',
        'Continuous learning and adaptation'
      ],
      pricing: 'Starting at $10,000/month',
      timeline: 'Immediate deployment',
      aiPowered: true,
      web3Ready: true
    },
    {
      icon: Link,
      title: 'Web3 Security',
      subtitle: 'Blockchain & DeFi Protection',
      description: 'Specialized security services for blockchain applications, smart contracts, and decentralized finance (DeFi) protocols.',
      features: [
        'Smart Contract Security Audits',
        'DeFi Protocol Security Assessment',
        'NFT Security Analysis',
        'Blockchain Forensics',
        'Cryptocurrency Security',
        'Decentralized Identity Security'
      ],
      benefits: [
        'Prevent smart contract exploits',
        'Ensure DeFi protocol safety',
        'Protect digital assets',
        'Compliance with Web3 standards'
      ],
      pricing: 'Starting at $15,000',
      timeline: '3-6 weeks',
      aiPowered: true,
      web3Ready: true
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      subtitle: 'Comprehensive Security Evaluation',
      description: 'Systematic identification and evaluation of security weaknesses across your entire digital infrastructure.',
      features: [
        'Automated Vulnerability Scanning',
        'Manual Security Testing',
        'Risk Assessment & Prioritization',
        'Compliance Gap Analysis',
        'Configuration Review',
        'Security Architecture Assessment'
      ],
      benefits: [
        'Complete security visibility',
        'Risk-based prioritization',
        'Compliance assurance',
        'Continuous monitoring'
      ],
      pricing: 'Starting at $3,000',
      timeline: '1-2 weeks',
      aiPowered: true,
      web3Ready: false
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      subtitle: '24/7 Emergency Response',
      description: 'Rapid response to security incidents with expert containment, investigation, and recovery services.',
      features: [
        'Immediate Threat Containment',
        'Digital Forensics Investigation',
        'Malware Analysis',
        'Data Recovery Services',
        'Legal & Compliance Support',
        'Post-Incident Security Hardening'
      ],
      benefits: [
        'Minimize business disruption',
        'Preserve digital evidence',
        'Rapid recovery',
        'Prevent future incidents'
      ],
      pricing: 'Retainer: $25,000/year',
      timeline: 'Immediate response',
      aiPowered: true,
      web3Ready: true
    },
    {
      icon: FileCheck,
      title: 'Security Auditing',
      subtitle: 'Compliance & Risk Management',
      description: 'Comprehensive security audits to ensure compliance with industry standards and regulatory requirements.',
      features: [
        'ISO 27001 Compliance Audits',
        'SOC 2 Type II Assessments',
        'GDPR Compliance Review',
        'HIPAA Security Evaluations',
        'PCI DSS Assessments',
        'Custom Compliance Frameworks'
      ],
      benefits: [
        'Regulatory compliance',
        'Risk mitigation',
        'Audit readiness',
        'Stakeholder confidence'
      ],
      pricing: 'Starting at $8,000',
      timeline: '4-6 weeks',
      aiPowered: false,
      web3Ready: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-foreground mb-6">
                <span className="text-primary">Cybersecurity</span> <span className="text-accent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive security solutions powered by advanced AI and designed for the Web3 era. 
                Protect your digital assets with our cutting-edge cybersecurity services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-6 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium">
                  🤖 AI-Enhanced Security
                </span>
                <span className="px-6 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm font-medium">
                  ⛓️ Web3 & Blockchain Ready
                </span>
                <span className="px-6 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium">
                  🛡️ 24/7 Protection
                </span>
              </div>
              <Button className="btn-cyber text-lg px-8 py-4">
                Get Free Security Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {mainServices.map((service, index) => (
                <Card
                  key={service.title}
                  className="group p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow relative overflow-hidden"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {service.aiPowered && (
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            🤖 AI-Powered
                          </span>
                        )}
                        {service.web3Ready && (
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                            ⛓️ Web3 Ready
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="text-sm text-muted-foreground">Pricing</div>
                        <div className="font-semibold text-foreground">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-semibold text-foreground">{service.timeline}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full btn-cyber-outline group-hover:btn-cyber transition-all duration-300">
                      Learn More <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6 text-center text-primary-foreground">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Don't wait for a security incident to happen. Take proactive steps to protect your organization 
              with our comprehensive cybersecurity services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg font-semibold">
                🛡️ Start Free Assessment
              </Button>
              <Button className="bg-transparent border-2 border-background text-primary-foreground hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold">
                📞 Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
};

export default ServicesPage;