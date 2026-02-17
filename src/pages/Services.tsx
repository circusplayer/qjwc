import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  FileText, 
  Truck, 
  Percent, 
  MapPin, 
  Clock, 
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Wrench,
    title: 'Custom Roofing Fabrication',
    description: 'We offer custom roofing fabrication services tailored to your specific project requirements. Our skilled team ensures precise measurements and quality craftsmanship for perfect fits.',
  },
  {
    icon: FileText,
    title: 'Free Quotation & Site Measurement',
    description: 'Get accurate quotes with our free site measurement service. Our experts visit your location to assess requirements and provide detailed, transparent pricing.',
  },
  {
    icon: Truck,
    title: 'Cash on Delivery & Pick-up',
    description: 'Flexible payment and delivery options to suit your convenience. Pay upon delivery or pick up directly from our warehouse at your preferred schedule.',
  },
  {
    icon: Percent,
    title: 'Discount for Bulk Orders',
    description: 'Save more on large orders with our bulk pricing. Whether you\'re a contractor or developer, we offer competitive rates for volume purchases.',
  },
  {
    icon: MapPin,
    title: 'Delivery (CALABARZON & Metro Manila)',
    description: 'Fast and reliable delivery service covering CALABARZON and Metro Manila areas. We ensure your materials arrive on time and in perfect condition.',
  },
  {
    icon: Clock,
    title: 'Made-to-Order (2–3 days)',
    description: 'Custom orders completed in just 2-3 days. We prioritize quick turnaround without compromising on quality for your urgent project needs.',
  },
];

function FadeInCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-4 font-medium">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From custom fabrication to reliable delivery, we provide comprehensive services 
              to support your construction projects from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeInCard key={index} delay={index * 100}>
                <Card 
                  className="border-none shadow-soft hover:shadow-elevated transition-all duration-300 group h-full"
                >
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your specific requirements. Our team is ready 
              to help you find the perfect solution for your construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="hover:scale-105 transition-all duration-300"
              >
                <a href="tel:09150998094">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
