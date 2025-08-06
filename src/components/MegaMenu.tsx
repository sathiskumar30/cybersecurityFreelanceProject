import React, { useEffect, useState, useRef } from 'react';

interface MegaMenuItem {
  name: string;
  href: string;
  icon: string;
  category?: string;
}

interface MegaMenuProps {
  isActive: boolean;
  items: MegaMenuItem[];
  activeCategory?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ 
  isActive, 
  items, 
  activeCategory,
  onMouseEnter,
  onMouseLeave 
}) => {
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive) {
      setMounted(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else {
      timeoutRef.current = setTimeout(() => setMounted(false), 500);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isActive]);

  if (!mounted && !isActive) return null;

  const filteredItems = activeCategory 
    ? items.filter(item => item.category === activeCategory)
    : items;

  return (
    <div 
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed inset-x-0 top-[64px] w-screen bg-card/95 backdrop-blur-lg border-t border-border shadow-lg z-50 transition-all duration-500 ease-in-out ${
        isActive ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
      style={{ height: '50vh' }}
    >
      <div className="container mx-auto px-6 py-12 h-full">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full transition-all duration-500 ease-in-out ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {filteredItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 transition-opacity duration-500 group-hover:opacity-90">
                    Learn more about our {item.name.toLowerCase()} services
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-primary opacity-0 transform translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                Explore →
              </div>
            </a>
          ))}
        </div>
        
        {/* Additional CTA Section */}
        <div className={`mt-12 p-8 rounded-2xl bg-primary text-primary-foreground text-center transition-all duration-500 ease-in-out ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="font-orbitron text-2xl font-bold mb-4">
            Need Custom Security Solutions?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Our experts can design tailored cybersecurity strategies for your unique needs
          </p>
          <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-500 hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};