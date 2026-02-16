import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  className="group relative overflow-hidden rounded-lg aspect-[3/2] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
