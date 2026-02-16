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

  const ongoingProjectsImages = [
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1).jpeg',
      alt: 'Electrical busbar installation with color-coded phase conductors showing blue, yellow, and red phases',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM.jpeg',
      alt: 'Industrial electrical control room with rows of control panels and cable management systems',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-1.jpeg',
      alt: 'Three-phase busbar system with organized conductor arrangement and mounting hardware',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-2.jpeg',
      alt: 'Close-up view of electrical busbar connections with phase separation insulators',
    },
    {
      src: '/assets/image.png',
      alt: 'Industrial chimney with blue and white striped pattern and safety ladder installation',
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Major Projects</h1>
          <p className="text-lg text-muted-foreground">
            BM ENTERPRISES has successfully delivered complex electrical projects across diverse sectors. Here are some of our notable achievements that demonstrate our capability and expertise.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/assets/IMG_20260216_183152.jpg major project.jpeg"
            alt="Major projects portfolio document showcasing completed electrical installations for Hyundai Motor India, NMDC Limited, and ACG Capsules"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              location={project.location}
              description={project.description}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ongoing Projects (Gallery)</h2>
          <p className="text-lg text-muted-foreground">
            Take a look at our current electrical installations in progress, showcasing our technical expertise and attention to detail.
          </p>
        </div>

        <ImageGalleryGrid images={ongoingProjectsImages} />
      </div>
    </div>
  );
}
