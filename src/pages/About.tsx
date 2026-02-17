import { CheckCircle, Users, Building, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'We never compromise on the quality of our materials. Every product undergoes rigorous quality checks.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We strive to exceed expectations.',
  },
  {
    icon: Building,
    title: 'Industry Expertise',
    description: 'Years of experience in the construction supply industry ensures expert guidance.',
  },
];

const reasons = [
  'Premium quality steel and construction materials',
  'Competitive wholesale and retail pricing',
  'Fast and reliable delivery service',
  'Expert product recommendations',
  'Wide range of construction supplies',
  'Trusted by contractors and builders',
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-4 font-medium">
              
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in Construction Excellence
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              QJWC Construction has been serving the construction industry with premium 
              steel products and building materials. We're committed to helping builders 
              and contractors succeed in their projects.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">
                
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building Relationships, One Project at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  QJWC Steel Trading was founded with a simple mission: to provide the construction 
                  industry with high-quality materials at competitive prices. What started as a 
                  small steel trading operation has grown into a comprehensive construction supply company.
                </p>
                <p>
                  Today, we serve contractors, builders, and homeowners across the region, offering 
                  a wide range of products from roofing materials to structural steel. Our commitment 
                  to quality and customer service has made us a trusted name in the industry.
                </p>
                <p>
                  We understand that every construction project is unique, which is why we offer 
                  personalized service and expert advice to help you choose the right materials 
                  for your specific needs.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Why Choose QJWC?</h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-soft">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-medium">
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Building Tomorrow's Infrastructure Today
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our mission is to be the most reliable and trusted construction supply partner 
              in the region. We aim to provide superior products, exceptional service, and 
              expert guidance to help our customers build with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
