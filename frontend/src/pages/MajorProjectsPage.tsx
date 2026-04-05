import ProjectCard from '../components/ProjectCard';
import ImageGalleryGrid from '../components/ImageGalleryGrid';

export default function MajorProjectsPage() {
  const projects = [
    {
      title: 'Metropolitan Hospital Expansion',
      location: 'Downtown District',
      description: 'Complete electrical infrastructure for a 200-bed hospital expansion including emergency power systems, surgical suite lighting, and medical equipment power distribution. Project included installation of backup generators and uninterruptible power supply systems.',
    },
    {
      title: 'TechCorp Manufacturing Facility',
      location: 'Industrial Park West',
      description: 'High-capacity electrical installation for a 150,000 sq ft manufacturing plant. Included three-phase power distribution, specialized equipment circuits, energy-efficient LED lighting throughout, and comprehensive control systems.',
    },
    {
      title: 'Riverside Shopping Complex',
      location: 'Riverside Avenue',
      description: 'Full electrical design and installation for a multi-level retail complex with 80+ stores. Featured advanced lighting control systems, tenant power distribution, parking lot lighting, and integrated security systems.',
    },
    {
      title: 'State University Science Building',
      location: 'University Campus',
      description: 'Electrical systems for a state-of-the-art research facility including laboratory power, specialized equipment circuits, emergency lighting, and fire alarm integration. Project required coordination with multiple stakeholders and strict safety protocols.',
    },
    {
      title: 'Skyline Office Towers',
      location: 'Financial District',
      description: 'Electrical infrastructure for twin 25-story office towers. Scope included main switchgear installation, floor-by-floor power distribution, energy management systems, and smart building integration for optimal efficiency.',
    },
    {
      title: 'Regional Airport Terminal Upgrade',
      location: 'Regional Airport',
      description: 'Comprehensive electrical upgrade for airport terminal including runway lighting systems, baggage handling power, security systems, and passenger area lighting. Work completed in phases to maintain operational continuity.',
    },
  ];

  const ongoingProjectImages = [
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1).jpeg', alt: 'Ongoing electrical installation project - cable management and wiring' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM (1).jpeg', alt: 'Ongoing electrical installation project - panel installation' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM (2).jpeg', alt: 'Ongoing electrical installation project - conduit work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM.jpeg', alt: 'Ongoing electrical installation project - electrical systems' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.54 PM (1).jpeg', alt: 'Ongoing electrical installation project - construction site electrical work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.54 PM.jpeg', alt: 'Ongoing electrical installation project - heavy machinery and electrical equipment' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.55 PM.jpeg', alt: 'Ongoing electrical installation project - steel framework and electrical infrastructure' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.56 PM-1.jpeg', alt: 'Ongoing electrical installation project - construction progress' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.56 PM.jpeg', alt: 'Ongoing electrical installation project - electrical panel and control systems' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.57 PM (1).jpeg', alt: 'Ongoing electrical installation project - cable tray and conduit work' },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Major Projects</h1>
          <p className="text-lg text-muted-foreground">
            BM ENTERPRISES has successfully completed numerous large-scale electrical projects across various sectors. Our portfolio demonstrates our capability to handle complex installations with precision and professionalism.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/assets/generated/major-projects-hero.dim_1600x900.jpg"
            alt="BM ENTERPRISES major electrical project - large-scale industrial installation"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="mb-12 p-6 bg-muted rounded-lg border-l-4 border-[oklch(var(--dark-red))]">
          <p className="text-lg font-semibold text-[oklch(var(--dark-red))] mb-2">
            Government Approved Electrical Contractor
          </p>
          <p className="text-muted-foreground">
            Licensed and certified to undertake electrical projects of all scales. Our credentials include all necessary government approvals and industry certifications.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Completed Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                location={project.location}
                description={project.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Ongoing Projects (Gallery)</h2>
          <ImageGalleryGrid images={ongoingProjectImages} />
        </div>
      </div>
    </div>
  );
}
