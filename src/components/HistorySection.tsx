const timeline = [
  { year: "1998", title: "A Dream Takes Shape", description: "Elena & Marco Rossi open a small bread oven in their garage, selling loaves at the local farmer's market." },
  { year: "2003", title: "Our First Storefront", description: "After years of growing demand, The Bakery opens its doors on Elm Street with a team of three passionate bakers." },
  { year: "2010", title: "Award-Winning Sourdough", description: "Our signature sourdough wins 'Best Artisan Bread' at the National Bakers' Guild competition." },
  { year: "2016", title: "The Pastry Workshop", description: "We expand with a dedicated pastry kitchen, introducing French-inspired croissants, tarts, and seasonal specials." },
  { year: "2024", title: "A Community Institution", description: "Now with 25 bakers and two locations, The Bakery continues to serve the community with the same love and craft." },
];

const HistorySection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-3 font-body">
          Where It All Began
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
          Our Story
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-[1px]" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.year} className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-2 ring-4 ring-secondary" />
                <div className="pl-12 md:pl-0 md:w-1/2">
                  <span className="text-accent font-display text-lg font-semibold">{item.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground font-body mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
