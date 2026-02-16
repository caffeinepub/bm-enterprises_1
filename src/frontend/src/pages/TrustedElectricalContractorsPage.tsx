import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Award, Zap } from 'lucide-react';

export default function TrustedElectricalContractorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/assets/generated/bm-enterprises-hero.dim_1920x800.png)' }}
        />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl">
                Trusted Electrical Contractors
              </h1>
              <p className="text-lg text-muted-foreground mb-8 md:text-xl">
                Delivering excellence in electrical contracting with over two decades of experience. Your partner for safe, reliable, and innovative electrical solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="font-semibold">
                    Our Services
                  </Button>
                </Link>
                <Link to="/enquiry">
                  <Button size="lg" variant="outline" className="font-semibold">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/trusted electrical contactor.jpeg"
                  alt="BM Enterprises certified electrician in safety gear working on industrial electrical control panel"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">About BM ENTERPRISES</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              BM ENTERPRISES is a leading electrical contracting company specializing in commercial, industrial, and residential electrical installations. With a commitment to excellence and safety, we have successfully completed hundreds of projects across diverse sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of certified electricians and engineers brings expertise, precision, and dedication to every project, ensuring that your electrical systems are installed, maintained, and upgraded to the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous safety protocols and compliance with all industry standards to protect our team and your property.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Certified professionals using premium materials and proven techniques for lasting results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Efficient project management ensuring timely completion without compromising quality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Expert Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Innovative electrical solutions tailored to your specific needs and industry requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a consultation and discover how we can power your success.
          </p>
          <Link to="/enquiry">
            <Button size="lg" variant="secondary" className="font-semibold">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
