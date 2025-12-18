import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventConcert from "@/assets/event-concert.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventWeddingDecor from "@/assets/event-wedding-decor.jpg";
import serviceSoundLighting from "@/assets/service-sound-lighting.jpg";

const categories = ["All", "Weddings", "Corporate", "Concerts", "Celebrations", "Decor"];

const galleryImages = [
  { src: heroImage, category: "Weddings", title: "Elegant Reception Setup" },
  { src: eventCorporate, category: "Corporate", title: "Tech Summit Stage" },
  { src: eventConcert, category: "Concerts", title: "Summer Festival" },
  { src: eventBirthday, category: "Celebrations", title: "Birthday Decor" },
  { src: eventWeddingDecor, category: "Weddings", title: "Wedding Mandap" },
  { src: serviceSoundLighting, category: "Decor", title: "Stage Production" },
  { src: heroImage, category: "Weddings", title: "Candlelit Dinner" },
  { src: eventCorporate, category: "Corporate", title: "Conference Hall" },
  { src: eventConcert, category: "Concerts", title: "Live Performance" },
  { src: eventBirthday, category: "Celebrations", title: "Party Setup" },
  { src: eventWeddingDecor, category: "Decor", title: "Floral Arrangement" },
  { src: serviceSoundLighting, category: "Corporate", title: "Audio Visual" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${eventWeddingDecor})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Visual Journey
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            Photo Gallery
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Browse through our collection of stunning event photography 
            showcasing the magic we create.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "gold" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-accent text-xs font-medium uppercase tracking-wide">
                      {image.category}
                    </span>
                    <h3 className="text-background font-display text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-primary border-0">
          <DialogTitle className="sr-only">
            {selectedImage !== null ? filteredImages[selectedImage]?.title : "Gallery Image"}
          </DialogTitle>
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-background/80 hover:text-background transition-colors"
            >
              <X size={24} />
            </button>
            
            {selectedImage !== null && (
              <>
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
                  <span className="text-accent text-sm font-medium uppercase tracking-wide">
                    {filteredImages[selectedImage].category}
                  </span>
                  <h3 className="text-background font-display text-xl font-semibold">
                    {filteredImages[selectedImage].title}
                  </h3>
                </div>
                
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-background p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-background p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
