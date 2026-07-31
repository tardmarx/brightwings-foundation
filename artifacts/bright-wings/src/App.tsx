import { useState, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Heart, Users, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const queryClient = new QueryClient();

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          data-testid="link-home"
        >
          Bright Wings Foundation
        </button>
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-home-nav"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('programs')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-programs"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection('donate')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-donate-nav"
          >
            Donate
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80"
          alt="Happy children learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          data-testid="text-hero-headline"
        >
          Every Child Deserves a Chance to Shine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-white/95 font-light max-w-3xl mx-auto mb-12"
          data-testid="text-hero-subtext"
        >
          Supporting children with disabilities through education, therapy,
          healthcare, inclusion, and hope.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            onClick={() => scrollToSection('donate')}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            data-testid="button-donate-hero"
          >
            Make a Difference Today
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-about-heading"
          >
            About Us
          </h2>
          <p
            className="text-lg md:text-xl text-foreground/80 leading-relaxed"
            data-testid="text-about-description"
          >
            Bright Wings Foundation is a nonprofit organization dedicated to
            empowering children with physical, intellectual, hearing, visual,
            and developmental disabilities. We believe every child deserves
            education, dignity, love, and equal opportunities to succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function ProgramCard({ icon: Icon, title, description, delay }: ProgramCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-card border border-card-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
      data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3" data-testid={`text-program-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed" data-testid={`text-program-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </motion.div>
  );
}

function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programs = [
    {
      icon: GraduationCap,
      title: 'Inclusive Education',
      description:
        'Providing accessible education, learning materials, and scholarships.',
    },
    {
      icon: Heart,
      title: 'Medical Support',
      description:
        'Therapies, assistive devices, rehabilitation, and healthcare access.',
    },
    {
      icon: Users,
      title: 'Family Support',
      description:
        'Counselling, awareness workshops, and community empowerment.',
    },
    {
      icon: Globe2,
      title: 'Social Inclusion',
      description:
        'Sports, arts, cultural events, and skill development for every child.',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-programs-heading"
          >
            Our Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We work across multiple areas to create lasting impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  delay: number;
}

function StatCounter({ end, label, suffix = '', delay }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-white/90 font-light">{label}</div>
    </motion.div>
  );
}

function ImpactStats() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <StatCounter end={2500} label="Children Supported" suffix="+" delay={0} />
          <StatCounter end={180} label="Volunteers" suffix="+" delay={0.2} />
          <StatCounter end={40} label="Communities" suffix="+" delay={0.4} />
        </div>
      </div>
    </section>
  );
}

function Donate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const handleDonate = () => {
    const amount = isCustom ? parseInt(customAmount) : selectedAmount;
    if (!amount || amount < 1) return;
    setIsLoading(true);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY as string,
      amount: amount * 100,
      currency: 'INR',
      name: 'Bright Wings Foundation',
      description: 'Donation for children with disabilities',
      handler: (_response: Record<string, string>) => {
        alert('Thank you for your generous donation! Your support changes lives.');
        setIsLoading(false);
      },
      prefill: { name: '', email: '', contact: '' },
      notes: { purpose: 'Donation — Bright Wings Foundation' },
      theme: { color: '#4A90E2' },
      modal: { ondismiss: () => setIsLoading(false) },
    };
    const rzp = new (window as Record<string, unknown>).Razorpay(options);
    (rzp as { open: () => void }).open();
  };

  return (
    <section id="donate" className="py-24 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-donate-heading"
          >
            Help Change a Life
          </h2>
          <p
            className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            data-testid="text-donate-description"
          >
            Your donation helps provide education, therapy, medical care, and
            opportunities for children with disabilities. Every contribution,
            big or small, creates meaningful change.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6" data-testid="donate-amount-selector">
            {([500, 1000, 2000, 5000] as const).map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelectedAmount(amt); setIsCustom(false); setCustomAmount(''); }}
                className={`px-6 py-3 rounded-full font-semibold text-base border-2 transition-all duration-200 ${
                  !isCustom && selectedAmount === amt
                    ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
                    : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
                }`}
                data-testid={`button-amount-${amt}`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
            <button
              onClick={() => setIsCustom(true)}
              className={`px-6 py-3 rounded-full font-semibold text-base border-2 transition-all duration-200 ${
                isCustom
                  ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
                  : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
              }`}
              data-testid="button-amount-custom"
            >
              Custom
            </button>
          </div>

          {isCustom && (
            <div className="flex justify-center mb-6">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium text-lg">₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="pl-8 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none text-center text-lg w-52 bg-background"
                  min="1"
                  data-testid="input-custom-amount"
                />
              </div>
            </div>
          )}

          <Button
            onClick={handleDonate}
            disabled={isLoading || (isCustom && (!customAmount || parseInt(customAmount) < 1))}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            data-testid="button-donate-main"
          >
            {isLoading
              ? 'Processing...'
              : `Donate ₹${isCustom ? (customAmount || '0') : selectedAmount.toLocaleString('en-IN')} via Razorpay`}
          </Button>

          <p className="mt-4 text-sm text-foreground/50" data-testid="text-razorpay-note">
            Secured by Razorpay · UPI, Cards &amp; Net Banking accepted
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-muted/20" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-12"
            data-testid="text-contact-heading"
          >
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-lg">
            <div className="flex items-center gap-3" data-testid="text-contact-location">
              <span className="text-2xl">📍</span>
              <span className="text-foreground/80">Lucknow, India</span>
            </div>
            <div className="flex items-center gap-3" data-testid="text-contact-phone">
              <span className="text-2xl">📞</span>
              <a
                href="tel:+918081939363"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                +91 8081939363
              </a>
            </div>
            <div className="flex items-center gap-3" data-testid="text-contact-email">
              <span className="text-2xl">✉</span>
              <a
                href="mailto:bright4wings@gmail.com"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                bright4wings@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm" data-testid="text-footer-copyright">
          © 2026 Bright Wings Foundation. Together we create a more inclusive
          future.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ImpactStats />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
