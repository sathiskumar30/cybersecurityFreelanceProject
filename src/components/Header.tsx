import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';
import { ThemeToggle } from './ThemeToggle';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [highlight, setHighlight] = useState<{ left: number; width: number; visible: boolean }>({ left: 0, width: 0, visible: false });

  const clearCloseTimer = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const startCloseTimer = (delay: number = 200) => {
    clearCloseTimer();
    closeTimeoutRef.current = setTimeout(() => setActiveMegaMenu(null), delay);
  };

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
    setActiveMegaMenu(menuId);
    clearCloseTimer();
  };

  const handleNavMouseLeave = () => {
    startCloseTimer();
    setHighlight((h) => ({ ...h, visible: false }));
  };

  const updateHighlightFromButton = (buttonEl: HTMLButtonElement | null) => {
    if (!buttonEl || !navContainerRef.current) return;
    const containerRect = navContainerRef.current.getBoundingClientRect();
    const btnRect = buttonEl.getBoundingClientRect();
    const left = btnRect.left - containerRect.left + navContainerRef.current.scrollLeft;
    setHighlight({ left, width: btnRect.width, visible: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent rounded-b-2xl">
      <div className="container mx-auto px-6 py-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-4">
          {/* Logo (Left) */}
          <div className="flex items-center space-x-3 justify-start">
            {/* <div className="relative">
              <Shield className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div> */}
            {/* </div> */}
            {/* <div className="text-xl font-orbitron font-bold text-foreground">
              <span className="text-primary">Company </span>
              <span className="text-accent">Name</span>
            </div> */}
          </div>

          {/* Desktop Navigation (Center) */}
          <nav
            className="hidden lg:flex items-center justify-center relative"
            onMouseLeave={handleNavMouseLeave}
            onMouseEnter={clearCloseTimer}
          >

            <div
              ref={navContainerRef}
              className="relative inline-flex items-center gap-2 rounded-full bg-background/70 border border-border px-2 py-3 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 justify-start pl-2 pr-[150px]">
                <div className="relative">
                  <Shield className="w-8 h-8 text-primary" />
                  {/* <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div> */}
                </div>
                <div className="text-xl font-orbitron font-bold text-foreground">
                  <span className="text-primary">Company </span>
                  <span className="text-accent">Name</span>
                </div>
              </div>
              {/* Sliding pill highlight */}
              <span
                className={`absolute top-1 bottom-1 rounded-full bg-card shadow ${highlight.visible ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-out`}
                style={{ left: `${highlight.left}px`, width: `${highlight.width}px` }}
              />

              {navigation.map((item) => (
                <div
                  key={item.id}
                  className="relative z-10"
                  onMouseEnter={(e) => {
                    handleMegaMenuEnter(item.id);
                    updateHighlightFromButton(e.currentTarget.querySelector('button'));
                  }}
                >
                  <button
                    className="relative text-md text-foreground/90 hover:text-foreground font-medium rounded-full px-4 py-2 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
              <span
                className='pl-[150px] pr-2'
              >
                <ThemeToggle />
                <Button className="relative group hidden lg:inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                  <span className="relative z-10">Get Started</span>
                  <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                  <span aria-hidden className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span aria-hidden className="absolute left-[-30%] top-0 h-full w-1/3 -skew-x-12 bg-white/40 blur-xl opacity-0 group-hover:opacity-60 group-hover:translate-x-[240%] transition-all duration-700" />
                </Button>
              </span>
            </div>
          </nav>

          {/* Actions (Right) */}
          <div className="flex items-center justify-end space-x-4">
            {/* <ThemeToggle /> */}
            {/* <Button className="relative group hidden lg:inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
              <span className="relative z-10">Get Started</span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-white/20" />
              <span aria-hidden className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span aria-hidden className="absolute left-[-30%] top-0 h-full w-1/3 -skew-x-12 bg-white/40 blur-xl opacity-0 group-hover:opacity-60 group-hover:translate-x-[240%] transition-all duration-700" />
            </Button> */}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Shared Mega Menu (opens once; swaps content on hover) */}
        {activeMegaMenu && (
          <MegaMenu
            isActive={!!activeMegaMenu}
            items={navigation.find(n => n.id === activeMegaMenu)?.items || []}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={handleNavMouseLeave}
          />
        )}

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