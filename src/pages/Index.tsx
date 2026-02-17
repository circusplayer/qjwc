import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCategories } from '@/hooks/useCategories';
import heroBg from '@/assets/qjwcbackground.jpg';

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
