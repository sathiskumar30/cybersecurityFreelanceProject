import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';
import { ThemeToggle } from './ThemeToggle';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navigation = [
    {
      name: 'Services',
      id: 'services',
      items: [
        { name: 'Penetration Testing', href: '/services/penetration-testing', icon: '🔍' },
        { name: 'Vulnerability Assessment', href: '/services/vulnerability-assessment', icon: '🛡️' },
        { name: 'Security Auditing', href: '/services/security-auditing', icon: '📋' },
        { name: 'Incident Response', href: '/services/incident-response', icon: '🚨' },
        { name: 'AI Security Solutions', href: '/services/ai-security', icon: '🤖' },
        { name: 'Web3 Security', href: '/services/web3-security', icon: '⛓️' }
      ]
    },
    {
      name: 'Solutions',
      id: 'solutions',
      items: [
        { name: 'Enterprise Security', href: '/solutions/enterprise', icon: '🏢' },
        { name: 'Cloud Security', href: '/solutions/cloud', icon: '☁️' },
        { name: 'IoT Security', href: '/solutions/iot', icon: '📱' },
        { name: 'Blockchain Security', href: '/solutions/blockchain', icon: '🔗' }
      ]
    },
    {
      name: 'Resources',
      id: 'resources',
      items: [
        { name: 'Security Blog', href: '/blog', icon: '📖' },
        { name: 'Research Papers', href: '/research', icon: '📊' },
        { name: 'Security Tools', href: '/tools', icon: '🔧' },
        { name: 'Training & Certification', href: '/training', icon: '🎓' }
      ]
    }
  ];

  const handleMegaMenuEnter = (menuId: string) => {
    console.log('Entering menu:', menuId);
    setActiveMegaMenu(menuId);
  };

  const handleMegaMenuLeave = () => {
    console.log('Leaving menu');
    setActiveMegaMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
            </div>
            <div className="text-xl font-orbitron font-bold text-foreground">
              <span className="text-primary">Cyber</span>
              <span className="text-accent">Guard</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {navigation.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleMegaMenuEnter(item.id)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium py-6">
                  {item.name}
                </button>
                
                {activeMegaMenu === item.id && (
                  <div className="absolute left-0 right-0 top-full pt-2 z-[1000]">
                    <MegaMenu
                      isActive={true}
                      items={item.items}
                    />
                  </div>
                )}
              </div>
            ))}
            <a href="/about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-6">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-6">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="btn-cyber hidden lg:inline-flex">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.id}>
                  <div className="text-foreground font-medium py-2">{item.name}</div>
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {subItem.icon} {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a href="/about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <Button className="btn-cyber w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;