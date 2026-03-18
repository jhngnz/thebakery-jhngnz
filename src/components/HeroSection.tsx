import heroBg from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Artisan bakery with fresh bread and pastries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="text-primary-foreground/80 font-body text-lg tracking-[0.3em] uppercase mb-4">
          Est. 1998
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold leading-tight mb-6">
          The Bakery
        </h1>
        <p className="text-primary-foreground/90 font-body text-xl md:text-2xl italic mb-8">
          Handcrafted breads & pastries, baked with love since 1998
        </p>
        <a
          href="#mission"
          className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
        >
          Discover Our Story
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
