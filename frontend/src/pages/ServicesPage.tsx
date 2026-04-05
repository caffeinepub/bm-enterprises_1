import ServiceCard from '../components/ServiceCard';
import { Zap, Building2, Home, Wrench, Cable, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Electrical',
      description: 'Complete electrical solutions for offices, retail spaces, and commercial buildings including lighting, power distribution, and emergency systems.',
    },
    {
      icon: Zap,
      title: 'Industrial Installations',
      description: 'Heavy-duty electrical installations for manufacturing facilities, warehouses, and industrial complexes with high-power requirements.',
    },
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Comprehensive electrical services for homes including wiring, panel upgrades, lighting design, and smart home integration.',
    },
    {
      icon: Cable,
      title: 'Power Distribution',
      description: 'Design and installation of efficient power distribution systems, transformers, and substations for optimal energy management.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Preventive maintenance programs and emergency repair services to keep your electrical systems running smoothly and safely.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety Inspections',
      description: 'Thorough electrical safety audits, compliance testing, and certification services to ensure your systems meet all regulations.',
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            BM ENTERPRISES offers a comprehensive range of electrical contracting services tailored to meet the unique needs of each client. From design to installation and maintenance, we deliver excellence at every stage.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/assets/our services.jpeg"
            alt="BM ENTERPRISES electrical services - engineers working at electrical substation"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
