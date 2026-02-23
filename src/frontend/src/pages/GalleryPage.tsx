import ImageGalleryGrid from '../components/ImageGalleryGrid';

export default function GalleryPage() {
  const galleryImages = [
    { src: '/assets/generated/bm-enterprises-gallery-01.dim_1200x800.png', alt: 'BM Enterprises electrical installation - industrial control panel' },
    { src: '/assets/generated/bm-enterprises-gallery-02.dim_1200x800.png', alt: 'BM Enterprises electrical installation - commercial lighting system' },
    { src: '/assets/generated/bm-enterprises-gallery-03.dim_1200x800.png', alt: 'BM Enterprises electrical installation - power distribution equipment' },
    { src: '/assets/generated/bm-enterprises-gallery-04.dim_1200x800.png', alt: 'BM Enterprises electrical installation - transformer installation' },
    { src: '/assets/generated/bm-enterprises-gallery-05.dim_1200x800.png', alt: 'BM Enterprises electrical installation - cable management system' },
    { src: '/assets/generated/bm-enterprises-gallery-06.dim_1200x800.png', alt: 'BM Enterprises electrical installation - switchgear room' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-1.jpeg', alt: 'Electrical installation project - cable management and wiring work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-2.jpeg', alt: 'Electrical installation project - panel installation and setup' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-3.jpeg', alt: 'Electrical installation project - conduit and wiring installation' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.57 PM.jpeg', alt: 'Electrical installation project - industrial electrical work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.58 PM (1).jpeg', alt: 'Electrical installation project - construction site electrical setup' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.58 PM.jpeg', alt: 'Electrical installation project - heavy machinery and electrical equipment' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.59 PM (1).jpeg', alt: 'Electrical installation project - steel framework and electrical infrastructure' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.59 PM-1.jpeg', alt: 'Electrical installation project - construction site progress' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.58.59 PM.jpeg', alt: 'Electrical installation project - electrical panel and control systems' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.59.00 PM.jpeg', alt: 'Electrical installation project - cable tray and conduit work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.59.01 PM.jpeg', alt: 'Electrical installation project - industrial electrical installation' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.59.02 PM.jpeg', alt: 'Electrical installation project - heavy equipment operations' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.59.03 PM (1).jpeg', alt: 'Electrical installation project - safety operations and site work' },
    { src: '/assets/WhatsApp Image 2026-02-16 at 8.59.03 PM.jpeg', alt: 'Electrical installation project - construction and electrical work' },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Project Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of completed electrical installations. Each project showcases our commitment to quality, safety, and technical excellence.
          </p>
        </div>

        <div>
          <ImageGalleryGrid images={galleryImages} />
        </div>
      </div>
    </div>
  );
}
