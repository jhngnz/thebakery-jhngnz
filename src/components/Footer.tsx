const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl mb-4">The Bakery</h3>
          <p className="font-body text-primary-foreground/70 leading-relaxed">
            Handcrafted breads & pastries, baked with love since 1998.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Visit Us</h4>
          <p className="font-body text-primary-foreground/70 leading-relaxed">
            42 Street<br />
            Mangaldan<br />
            Mon–Sat: 7am – 6pm<br />
            Sun: 8am – 2pm
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <p className="font-body text-primary-foreground/70 leading-relaxed">
            hello@thebakery.com<br />
            09123456789
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-primary-foreground/20 text-center">
        <p className="font-body text-primary-foreground/50 text-sm">
          © 2026 The Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
