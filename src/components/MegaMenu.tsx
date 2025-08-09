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
  const [contentVisible, setContentVisible] = useState(true);
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

  // Smoothly animate content when items change (swap effect)
  useEffect(() => {
    setContentVisible(false);
    const id = setTimeout(() => setContentVisible(true), 10);
    return () => clearTimeout(id);
  }, [items]);

  if (!mounted && !isActive) return null;

  const filteredItems = activeCategory 
    ? items.filter(item => item.category === activeCategory)
    : items;

  return (
    <div 
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed top-20 left-1/2 -translate-x-1/2 w-[min(92vw,1100px)] bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-400/30 dark:border-gray-500/25 rounded-2xl shadow-2xl z-50 transition-all duration-500 ease-in-out ${
        isActive ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className="px-6 py-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
            isActive ? (contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0') : 'translate-y-4 opacity-0'
          }`}
        >
          {filteredItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group p-6 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-400/30 dark:border-gray-500/25 hover:border-primary/60 outline outline-1 outline-gray-400/50 dark:outline-gray-500/30 group-hover:outline-transparent transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl"
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};