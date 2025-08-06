import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Globe, Brain, Lock, Cpu, Star, CheckCircle } from 'lucide-react';

const HeroLight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          const intensity = (index + 1) * 5;
          element.style.transform = `translate3d(${deltaX * intensity}px, ${deltaY * intensity}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Shield, position: 'top-20 left-20', color: 'primary' },
    { icon: Zap, position: 'top-32 right-32', color: 'accent' },
    { icon: Globe, position: 'bottom-32 left-32', color: 'primary' },
    { icon: Brain, position: 'bottom-20 right-20', color: 'accent' },
    { icon: Lock, position: 'top-1/2 left-10', color: 'primary' },
    { icon: Cpu, position: 'top-1/2 right-10', color: 'accent' }
  ];

  const features = [
    { icon: CheckCircle, text: '99.9% Threat Detection' },
    { icon: Star, text: 'AI-Powered Security' },
    { icon: Shield, text: 'Web3 Protected' },
    { icon: Brain, text: '24/7 Monitoring' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div ref={containerRef} className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-slide-down">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium">
                  🤖 AI-Powered Security
                </div>
                <div className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm font-medium">
                  ⛓️ Web3 Ready
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-foreground mb-6 leading-tight">
                Next-Gen <br />
                <span className="text-primary">Cyber</span>
                <span className="text-accent">Security</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Protect your digital assets with our advanced AI-powered cybersecurity solutions.
                Built for the modern web and ready for Web3.
              </p>



              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - 3D Element */}

          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-card border border-border rounded-lg">
              <span className="font-semibold text-foreground">TechCorp</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg">
              <span className="font-semibold text-foreground">SecureBank</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg">
              <span className="font-semibold text-foreground">DataSystems</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg">
              <span className="font-semibold text-foreground">CyberFlow</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroLight;

{/* <div className="relative animate-slide-up">
<div className="relative w-full max-w-lg mx-auto"> */}

  {/* Security Stats */}
  {/* <div className="grid grid-cols-2 gap-4 mt-12">
    <div className="text-center p-4 bg-card border border-border rounded-lg">
      <div className="text-2xl font-orbitron font-bold text-primary mb-1">500+</div>
      <div className="text-sm text-muted-foreground">Clients Protected</div>
    </div>
    <div className="text-center p-4 bg-card border border-border rounded-lg">
      <div className="text-2xl font-orbitron font-bold text-accent mb-1">0</div>
      <div className="text-sm text-muted-foreground">Breaches</div>
    </div>
  </div>
</div>
</div> */}

{/* Main Shield */ }
{/* <div className="relative w-80 h-80 mx-auto"> */ }
{/* <div className="absolute inset-0 bg-card border-2 border-primary/30 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-32 h-32 text-primary animate-float" />
                  </div> */}
{/* </div> */ }

{/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="btn-cyber text-lg px-8 py-4">
                  🛡️ Get Protected Now
                </Button>
                <Button className="btn-cyber-outline text-lg px-8 py-4">
                  📊 Free Security Audit
                </Button>
              </div> */}


// Unwanted code ( Added For the reference ):

{/* Orbiting Elements */ }
{/* <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}> */ }
{/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div> */}
{/* </div> */ }

{/* Floating 3D Elements */ }
{/* {floatingIcons.map(({ icon: Icon, position, color }, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) floatingElementsRef.current[index] = el;
          }}
          className={`absolute ${position} animate-float`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className={`p-3 bg-${color}/10 backdrop-blur-sm rounded-lg border border-${color}/20 hover:border-${color}/40 transition-all duration-500`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
        </div>
      ))} */}

{/* Light Background Elements */ }
{/* <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div> */}