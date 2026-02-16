import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryGridProps {
  images: GalleryImage[];
}

export default function ImageGalleryGrid({ images }: ImageGalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
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
  );
}
