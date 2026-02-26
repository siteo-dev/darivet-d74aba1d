import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Pets' },
    { value: 5, suffix: '', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
    { value: 24, suffix: '/7', label: 'Support' }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Expertise", 
      description: "Our certified veterinarians ensure your pet receives the best professional care with years of experience in animal health.", 
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" /> 
    },
    { 
      Icon: Award, 
      name: "Quality", 
      description: "We use only premium-grade products and equipment to maintain the highest standards of hygiene and safety.", 
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.03} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]" /> 
    },
    { 
      Icon: Users, 
      name: "Personalized Care", 
      description: "Every pet gets a customized treatment plan based on their breed, age, and specific needs.", 
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" /> 
    },
    { 
      Icon: Clock, 
      name: "Reliability", 
      description: "Fast and reliable appointments with flexible scheduling options for busy pet owners.", 
      className: "col-span-3 lg:col-span-1",
      background: <DotPattern opacity={0.03} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]" /> 
    }
  ];

  const reviews = [
    {
      name: "Maria T.",
      gender: "F",
      text: "My dog's deworming was quick and painless. The staff is so caring and professional!",
      rating: 5
    },
    {
      name: "Alexandru M.",
      gender: "M",
      text: "I've been coming here for years now. They always make sure my pets are healthy and happy.",
      rating: 5
    },
    {
      name: "Elena R.",
      gender: "F",
      text: "Best place in domnesti for pet health services. Clean, modern, and very friendly staff.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How often should I deworm my pet?",
      answer: "We recommend deworming every 3 months for dogs and cats, or as advised by your veterinarian."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide urgent care during our business hours for any emergency pet health needs."
    },
    {
      question: "What should I bring for my pet's visit?",
      answer: "Please bring vaccination records and a list of any medications your pet is taking to ensure safe treatment."
    },
    {
      question: "Can I book an appointment online?",
      answer: "Yes, you can schedule through WhatsApp or by calling our number directly for convenient booking."
    },
    {
      question: "Do you provide pet supplies too?",
      answer: "Absolutely! We stock high-quality food, toys, and accessories to keep your pets happy and healthy."
    },
    {
      question: "What are your opening hours?",
      answer: "We operate Monday through Saturday from 9 AM to 6 PM, with special arrangements for emergencies."
    }
  ];

  return (
    <>
      <DemoBanner />
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors">{link.label}</a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip bg-background"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#07bcd4" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
          <DotPattern opacity={0.05} className="absolute inset-0" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Pet Care</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 bg-gradient-to-b from-white to-cyan-400 bg-clip-text text-transparent">
            Your Pet's Health Is Our Priority
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Darivet offers professional pet care services in domnesti, Ilfov. We focus on wellness, happiness, and quality for your beloved companions.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl" background="rgba(7,188,212, 1)">
              <span className="text-sm font-medium text-black">Book Appointment</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(7,188,212,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose Darivet?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Founded in 2019, we've been dedicated to providing the best care for your pets with compassion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
            {[
              { 
                icon: Shield, 
                title: "Professional Veterinarian Services", 
                description: "Our certified veterinarians provide expert care for your pets' health and wellbeing." 
              },
              { 
                icon: Award, 
                title: "Premium Quality Supplies", 
                description: "We source only the highest quality products to ensure your pet's comfort and safety." 
              },
              { 
                icon: Users, 
                title: "Personalized Care Plans", 
                description: "Each pet receives a customized treatment plan based on their specific needs and characteristics." 
              },
              { 
                icon: Clock, 
                title: "Trusted by Local Pet Owners", 
                description: "Years of experience serving the domnesti community with reliable and compassionate service." 
              }
            ].map((item, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={15} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Pet Wellness Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Comprehensive care services tailored to your pet's needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {[
              {
                title: "Deworming",
                description: "Complete parasite treatment for dogs and cats",
                price: "400 RON",
                cta: "Book Now"
              }
            ].map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={15} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-cyan-50 transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">{service.price}</span>
                    <ShimmerButton className="shadow-2xl" background="rgba(7,188,212, 1)">
                      <span className="text-sm font-medium text-black">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why-Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We offer more than just services — we provide peace of mind through quality, expertise, and care.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-3">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index}
                Icon={feature.Icon}
                name={feature.name}
                description={feature.description}
                className={feature.className}
                background={feature.background}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Pet Parents Love Us</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real experiences from our satisfied customers.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover w-full max-w-md mx-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={15} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-cyan-400 text-cyan-400' : 'text-zinc-600'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="multiple" className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4 border-white/[0.06] rounded-xl">
                  <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200 rounded-lg">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Let's Get Your Pet Healthy Together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Contact us today for appointments or inquiries about our pet care services in domnesti.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+4075728379480" },
                { icon: Mail, label: "Email", value: "contact@darivet.com" },
                { icon: MapPin, label: "Address", value: "domnesti, ilfov, romania" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <ShimmerButton className="shadow-2xl" background="rgba(7,188,212, 1)">
                  <span className="text-sm font-medium text-black">WhatsApp</span>
                </ShimmerButton>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[500px]">
              <iframe
                src={"https://www.google.com/maps?q=" + encodeURIComponent("domnesti, ilfov, romania") + "&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-x-clip py-8 pb-32 bg-background">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Darivet. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/darivet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-cyan-500/10 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      {/* Progressive Blur */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}
