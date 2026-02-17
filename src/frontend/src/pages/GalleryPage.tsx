import ImageGalleryGrid from '../components/ImageGalleryGrid';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/assets/generated/bm-enterprises-gallery-01.dim_1200x800.png',
      alt: 'Electrical installation project 1',
    },
    {
      src: '/assets/generated/bm-enterprises-gallery-02.dim_1200x800.png',
      alt: 'Electrical installation project 2',
    },
    {
      src: '/assets/generated/bm-enterprises-gallery-03.dim_1200x800.png',
      alt: 'Electrical installation project 3',
    },
    {
      src: '/assets/generated/bm-enterprises-gallery-04.dim_1200x800.png',
      alt: 'Electrical installation project 4',
    },
    {
      src: '/assets/generated/bm-enterprises-gallery-05.dim_1200x800.png',
      alt: 'Electrical installation project 5',
    },
    {
      src: '/assets/generated/bm-enterprises-gallery-06.dim_1200x800.png',
      alt: 'Electrical installation project 6',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.54 PM.jpeg',
      alt: 'Electrical busbar installation with red support structures',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.56 PM.jpeg',
      alt: 'Professional electrical distribution panel with organized wiring',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.54 PM (1).jpeg',
      alt: 'Electrical worker installing cables on steel structure framework',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM (1).jpeg',
      alt: 'Industrial construction site with steel framework and electrical infrastructure',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.52 PM (2).jpeg',
      alt: 'Safety team conducting site inspection at construction project',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.58 PM (1).jpeg',
      alt: 'Construction site with crane lifting large yellow cable reel',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.58 PM.jpeg',
      alt: 'Workers loading metal framework onto truck at construction site',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.57 PM.jpeg',
      alt: 'Electrician in blue hard hat working on electrical panel installation',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.59.00 PM.jpeg',
      alt: 'Cable tray installation in underground concrete structure',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.59 PM.jpeg',
      alt: 'Overhead cable tray system installation in industrial facility',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.59.02 PM.jpeg',
      alt: 'Worker on steel framework structure during construction phase',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.59.03 PM.jpeg',
      alt: 'Heavy machinery crane with yellow cable reel at construction site',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.59.01 PM.jpeg',
      alt: 'Underground cable ladder installation in concrete pit with electrical conduits',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-16 at 8.58.57 PM (1).jpeg',
      alt: 'Large-scale industrial construction site with steel structures and cranes at dusk',
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Project Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of completed electrical projects. Each image represents our commitment to quality, safety, and professional excellence.
          </p>
        </div>

        <ImageGalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
