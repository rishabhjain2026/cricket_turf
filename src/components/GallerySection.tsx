import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-turf.jpg";

const images = [
  { src: gallery1, alt: "Cricket match at T20 Arena", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Pickleball court", span: "" },
  { src: gallery3, alt: "Stadium atmosphere", span: "" },
  { src: gallery4, alt: "Bowler in action", span: "" },
  { src: heroImg, alt: "Aerial view of T20 Arena", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Gallery</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Life at <span className="gradient-text">T20 Arena</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.span} rounded-2xl overflow-hidden group relative`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
