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
