import { useState, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Heart,
  Users,
  Globe2,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const queryClient = new QueryClient();

const BASE = import.meta.env.BASE_URL;

/* ─── Logo ──────────────────────────────────────────────────────────────── */
function WingsLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* left wing */}
      <path
        d="M20 20 C14 16, 4 18, 2 10 C6 12, 10 10, 14 14 C10 8, 6 4, 2 2 C8 2, 16 8, 20 20Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* right wing */}
      <path
        d="M20 20 C26 16, 36 18, 38 10 C34 12, 30 10, 26 14 C30 8, 34 4, 38 2 C32 2, 24 8, 20 20Z"
        fill="currentColor"
      />
      {/* body */}
      <ellipse cx="20" cy="22" rx="2.5" ry="4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Impact', id: 'impact' },
    { label: 'Stories', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 group"
          data-testid="link-home"
        >
          <WingsLogo className="w-8 h-6 text-primary group-hover:text-primary/80 transition-colors" />
          <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'} group-hover:opacity-80`}>
            Bright Wings
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-foreground/80' : 'text-white/90 hover:text-white'
              }`}
              data-testid={`link-${l.id}`}
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('donate')}
            size="sm"
            className="bg-primary text-white rounded-full px-5 hover:bg-primary/90 ml-2"
            data-testid="link-donate-nav"
          >
            Donate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-white'}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-white'}`} />
          <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary text-left"
            >
              {l.label}
            </button>
          ))}
          <Button onClick={() => scrollTo('donate')} size="sm" className="bg-primary text-white rounded-full w-full">
            Donate Now
          </Button>
        </div>
      )}
    </motion.nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${BASE}hero.jpg`}
          alt="Child with disability standing confidently at school"
          className="w-full h-full object-cover object-center"
        />
        {/* Much lighter overlay — lets the photo breathe */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/30"
        >
          <WingsLogo className="w-5 h-4 text-white" />
          Bright Wings Foundation · Lucknow, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          data-testid="text-hero-headline"
        >
          Every Child Deserves<br className="hidden sm:block" /> a Chance to Shine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          data-testid="text-hero-subtext"
        >
          Supporting children with disabilities through education, therapy,
          healthcare, inclusion, and hope.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollTo('donate')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            data-testid="button-donate-hero"
          >
            Donate Now
          </Button>
          <Button
            onClick={() => scrollTo('programs')}
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-10 py-6 rounded-full transition-all hover:scale-105"
          >
            Our Programs
          </Button>
        </motion.div>
      </div>

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

/* ─── About ──────────────────────────────────────────────────────────────── */
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Who We Are
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              data-testid="text-about-heading"
            >
              A Home of Hope for Every Child
            </h2>
            <p
              className="text-lg text-foreground/75 leading-relaxed mb-6"
              data-testid="text-about-description"
            >
              Bright Wings Foundation is a nonprofit organization dedicated to
              empowering children with physical, intellectual, hearing, visual,
              and developmental disabilities in Lucknow, India.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed mb-8">
              We believe every child deserves education, dignity, love, and
              equal opportunities to succeed — regardless of their abilities.
              Our holistic programs reach children, families, and communities
              across 40+ regions.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: GraduationCap, label: 'Inclusive Education' },
                { icon: Heart, label: 'Medical Care' },
                { icon: Users, label: 'Family Support' },
                { icon: Globe2, label: 'Social Inclusion' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-primary/8 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={`${BASE}classroom.jpg`}
                alt="Children learning together in an inclusive classroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2,500+</div>
                <div className="text-sm text-foreground/60">Children Supported</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Programs ───────────────────────────────────────────────────────────── */
interface ProgramCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  delay: number;
}

function ProgramCard({ icon: Icon, title, description, image, delay }: ProgramCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-7">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`text-program-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-foreground/65 leading-relaxed text-sm" data-testid={`text-program-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
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
      description: 'Accessible learning materials, trained educators, scholarships, and mainstream school partnerships.',
      image: `${BASE}classroom.jpg`,
    },
    {
      icon: Heart,
      title: 'Medical Support',
      description: 'Physiotherapy, speech therapy, assistive devices, rehabilitation, and mobile health camps.',
      image: `${BASE}therapy.jpg`,
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Counselling, awareness workshops, parent networks, and peer support groups.',
      image: `${BASE}testimonial.jpg`,
    },
    {
      icon: Globe2,
      title: 'Social Inclusion',
      description: 'Sports, arts, cultural events, and skill development for every child to belong.',
      image: `${BASE}celebrate.jpg`,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-programs-heading"
          >
            Our Programs
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            Four pillars of support — creating holistic, lasting change in every child's life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} {...p} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Impact Stats ───────────────────────────────────────────────────────── */
interface StatCounterProps {
  icon: React.ElementType;
  end: number;
  label: string;
  description: string;
  suffix?: string;
  delay: number;
}

function StatCounter({ icon: Icon, end, label, description, suffix = '', delay }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-6xl md:text-7xl font-extrabold text-white mb-2 leading-none tabular-nums">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-xl font-semibold text-white mb-2">{label}</div>
      <div className="text-sm text-white/65 max-w-[160px] leading-relaxed">{description}</div>
    </motion.div>
  );
}

function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" className="relative py-28 overflow-hidden" ref={ref}>
      <img
        src={`${BASE}celebrate.jpg`}
        alt="Children celebrating"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3 block">
            Our Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Impact, In Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          <StatCounter
            icon={GraduationCap}
            end={2500}
            suffix="+"
            label="Children Supported"
            description="Lives transformed through education, therapy and care"
            delay={0}
          />
          <StatCounter
            icon={Heart}
            end={180}
            suffix="+"
            label="Dedicated Volunteers"
            description="Hearts and hands working together for inclusion"
            delay={0.15}
          />
          <StatCounter
            icon={MapPin}
            end={40}
            suffix="+"
            label="Communities Reached"
            description="Building inclusion across Lucknow and beyond"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────────────── */
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  delay: number;
}

function TestimonialCard({ quote, name, role, delay }: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border flex flex-col"
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
      <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic text-base">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">{name}</div>
          <div className="text-xs text-foreground/55">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const stories = [
    {
      quote:
        "Before Bright Wings, my daughter couldn't access any school. Now she reads, writes, and has made friends. I never thought this day would come. I am forever grateful.",
      name: 'Sunita Devi',
      role: 'Mother of Priya, 9 — Physical Disability',
    },
    {
      quote:
        "The therapy sessions changed everything for our son. The team at Bright Wings treated him with such love and patience. His confidence has grown beyond our hopes.",
      name: 'Rajesh Kumar',
      role: 'Father of Aryan, 7 — Hearing Impairment',
    },
    {
      quote:
        "Volunteering here is the most meaningful work I have ever done. Seeing the children grow, laugh, and learn together fills me with so much hope for our society.",
      name: 'Anjali Sharma',
      role: 'Volunteer & Special Educator, Lucknow',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Voices of Hope
          </h2>
          <p className="text-lg text-foreground/65 max-w-xl mx-auto">
            The families and volunteers whose lives have been touched by Bright Wings Foundation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <TestimonialCard key={s.name} {...s} delay={0.1 * i} />
          ))}
        </div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-2xl overflow-hidden h-52 md:h-72 shadow-lg"
        >
          <img
            src={`${BASE}testimonial.jpg`}
            alt="Family supported by Bright Wings Foundation"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Donate ─────────────────────────────────────────────────────────────── */
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            Support Our Mission
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-5"
            data-testid="text-donate-heading"
          >
            Help Change a Life Today
          </h2>
          <p
            className="text-lg md:text-xl text-foreground/75 leading-relaxed mb-10 max-w-2xl mx-auto"
            data-testid="text-donate-description"
          >
            Your donation provides education, therapy, and medical care for
            children with disabilities. Every rupee creates meaningful change.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6" data-testid="donate-amount-selector">
            {([500, 1000, 2000, 5000] as const).map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelectedAmount(amt); setIsCustom(false); setCustomAmount(''); }}
                className={`px-6 py-3 rounded-full font-semibold text-base border-2 transition-all duration-200 ${
                  !isCustom && selectedAmount === amt
                    ? 'bg-primary text-white border-primary shadow-md scale-105'
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
                  ? 'bg-primary text-white border-primary shadow-md scale-105'
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
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            data-testid="button-donate-main"
          >
            {isLoading
              ? 'Processing...'
              : `Donate ₹${isCustom ? (customAmount || '0') : selectedAmount.toLocaleString('en-IN')} via Razorpay`}
          </Button>

          <p className="mt-4 text-sm text-foreground/45" data-testid="text-razorpay-note">
            Secured by Razorpay · UPI, Cards &amp; Net Banking accepted
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-muted/20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            Reach Out
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-contact-heading"
          >
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              label: 'Location',
              value: 'Lucknow, Uttar Pradesh, India',
              href: undefined,
              testId: 'text-contact-location',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+91 8081939363',
              href: 'tel:+918081939363',
              testId: 'text-contact-phone',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'bright4wings@gmail.com',
              href: 'mailto:bright4wings@gmail.com',
              testId: 'text-contact-email',
            },
          ].map(({ icon: Icon, label, value, href, testId }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-7 shadow-md border border-border text-center"
              data-testid={testId}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-sm text-foreground/50 mb-1 font-medium uppercase tracking-wide">{label}</div>
              {href ? (
                <a href={href} className="text-foreground font-semibold hover:text-primary transition-colors">
                  {value}
                </a>
              ) : (
                <span className="text-foreground font-semibold">{value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 mb-4 group">
              <WingsLogo className="w-8 h-6 text-background/80 group-hover:text-background transition-colors" />
              <span className="text-xl font-bold text-background">Bright Wings</span>
            </button>
            <p className="text-background/55 text-sm leading-relaxed mb-5">
              Empowering children with disabilities through education, therapy,
              and hope — Lucknow, India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-background/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Programs', id: 'programs' },
                { label: 'Our Impact', id: 'impact' },
                { label: 'Donate', id: 'donate' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-background/55 hover:text-background text-sm text-left transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-background/55 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-background/40" />
                Lucknow, Uttar Pradesh, India
              </div>
              <a href="tel:+918081939363" className="flex items-center gap-2.5 text-background/55 hover:text-background text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-background/40" />
                +91 8081939363
              </a>
              <a href="mailto:bright4wings@gmail.com" className="flex items-center gap-2.5 text-background/55 hover:text-background text-sm transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-background/40" />
                bright4wings@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-background/40 text-sm">
          <p data-testid="text-footer-copyright">
            © 2026 Bright Wings Foundation. Together we create a more inclusive future.
          </p>
          <p>Made with <Heart className="inline w-3.5 h-3.5 text-red-400 mx-0.5" /> for every child</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */
function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ImpactStats />
      <Testimonials />
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
