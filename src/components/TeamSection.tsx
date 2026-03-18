const team = [
  {
    name: "Elena Rossi",
    role: "Co-Founder & Head Baker",
    initials: "ER",
    bio: "Elena grew up kneading dough alongside her grandmother in a small Tuscan kitchen. Her passion for traditional bread-making led her to study at the Culinary Institute of Florence before bringing those old-world techniques to The Bakery.",
  },
  {
    name: "Marco Rossi",
    role: "Co-Founder & Pastry Chef",
    initials: "MR",
    bio: "A trained pastry chef with over 20 years of experience, Marco perfected his craft in Parisian patisseries before returning home to co-found The Bakery. His croissants are legendary — crisp, buttery, and endlessly flaky.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-3 font-body">
          The People Behind the Bread
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
          Our Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((person) => (
            <div key={person.name} className="group">
              <div className="overflow-hidden rounded-sm mb-6 bg-secondary flex items-center justify-center h-80">
                <div className="text-5xl font-display text-secondary-foreground opacity-40">{person.initials}</div>
              </div>
              <h3 className="font-display text-2xl text-foreground">{person.name}</h3>
              <p className="text-accent font-body text-sm tracking-wider uppercase mt-1">{person.role}</p>
              <p className="text-muted-foreground font-body mt-4 leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
