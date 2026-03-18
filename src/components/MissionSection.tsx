const MissionSection = () => {
  return (
    <section id="mission" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-3 font-body">
          What Drives Us
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
          Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-accent" />
            <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              To craft exceptional artisan breads and pastries using time-honored techniques and the finest locally-sourced ingredients. We believe that every loaf tells a story — of patience, of tradition, and of the hands that shaped it. Our mission is to nourish our community with honest, wholesome baked goods made without shortcuts.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-accent" />
            <h3 className="font-display text-2xl text-foreground">Our Vision</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              To become the heart of every neighborhood we serve — a place where the aroma of fresh bread brings people together. We envision a future where artisan baking thrives, where sustainable practices are the standard, and where every bite carries the warmth of a hand-crafted tradition passed down through generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
