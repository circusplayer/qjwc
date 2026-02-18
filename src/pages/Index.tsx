import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Shield, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCategories } from '@/hooks/useCategories';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroBg from '@/assets/qjwcbackground.jpg';
import introVideo from '@/assets/qjwcvid.mp4';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We source only the highest quality construction materials from trusted manufacturers.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery service to keep your projects on schedule.',
  },
  {
    icon: CheckCircle,
    title: 'Competitive Pricing',
    description: 'Best prices in the market without compromising on quality.',
  },
];

const projects = [
  {
    image: project1,
    title: 'Steel Roofing Installation',
    description: 'Commercial building roofing project completed on schedule with premium steel sheets.',
    location: 'Davao City',
  },
  {
    image: project2,
    title: 'Industrial Warehouse Build',
    description: 'Full structural steel and corrugated roofing supply for a large industrial warehouse.',
    location: 'General Santos City',
  },
  {
    image: project3,
    title: 'Residential Metal Roofing',
    description: 'Modern home outfitted with durable long-span color roof and steel framing.',
    location: 'Koronadal City',
  },
  {
    image: project4,
    title: 'Multi-Purpose Hall',
    description: 'Community hall construction using QJWC-supplied structural steel and roofing materials.',
    location: 'South Cotabato',
  },
];

// Project Showcase Carousel
function ProjectSlider() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div key={index} className="relative flex-none w-full">
              <div className="relative h-[420px] md:h-[520px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  <span className="inline-block text-xs font-medium uppercase tracking-widest bg-primary/80 px-3 py-1 rounded-full mb-3">
                    {project.location}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm md:text-base max-w-xl">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next project"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Video Section
function VideoSection() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-foreground/5 shadow-lg aspect-video">
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        aria-label="QJWC Construction introduction video"
        poster={heroBg}
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function Index() {
  const { data: categories, isLoading } = useCategories();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container relative">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-4 font-medium">
              Quality Construction Supplies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building the Future with 
              <span className="block">Premium Steel & Materials</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              QJWC Construction is your trusted partner for high-quality roofing, steel products, 
              and construction materials. Serving contractors and builders with excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="group shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
                asChild
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

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-soft bg-background">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">Our Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Completed Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what we've built together with our clients — from residential roofing to large-scale 
              commercial structures, powered by QJWC materials.
            </p>
          </div>
          <ProjectSlider />
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Partner in Construction Supply
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                QJWC Construction has been serving contractors, builders, and homeowners with premium 
                quality steel products and roofing materials. We take pride in providing the right 
                materials at competitive prices with reliable delivery.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need long-span roofing sheets, C-purlins, angle bars, or other structural 
                steel components — we have everything your project requires, backed by expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="hover:scale-105 transition-all duration-300">
                  <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild className="hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
            {/* Video side */}
            <VideoSection />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">Our Products</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of construction supplies and steel products, 
              carefully curated to meet your building needs.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories?.slice(0, 8).map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.slug}`}
                  className="group relative bg-secondary rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-elevated"
                >
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 line-clamp-2">
                    {category.description || 'View products'}
                  </p>
                  <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button variant="outline" asChild className="hover:scale-105 transition-all duration-300">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote on your construction material needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href="tel:09150998094">
                <Phone className="mr-2 h-5 w-5" />
                0915 099 8094
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
