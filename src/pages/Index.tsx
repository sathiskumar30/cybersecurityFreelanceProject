import React from 'react';
import Header from '@/components/Header';
import HeroLight from '@/components/HeroLight';
import Services from '@/components/Services';
import FooterLight from '@/components/FooterLight';
import Home from './Testing/HomeTestPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Home />
        {/* <HeroLight /> */}
        {/* <Services /> */}
      </main>
      {/* <FooterLight /> */}
    </div>
  );
};

export default Index;
