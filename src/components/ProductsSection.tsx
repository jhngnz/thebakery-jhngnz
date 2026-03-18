import productBread from "@/assets/product-bread.jpg";
import productPastries from "@/assets/product-pastries.jpg";
import productCakes from "@/assets/product-cakes.jpg";
import productCookies from "@/assets/product-cookies.jpg";

const products = [
  {
    name: "Artisan Breads",
    image: productBread,
    description: "From our signature sourdough to rustic ciabatta and hearty rye, every loaf is slow-fermented for at least 24 hours and baked in our stone-deck oven.",
    items: ["Sourdough Boule", "Ciabatta", "Country Rye", "Olive Focaccia"],
  },
  {
    name: "French Pastries",
    image: productPastries,
    description: "Handmade with imported French butter, our pastries are laminated over three days for the perfect flaky, golden layers that shatter with every bite.",
    items: ["Classic Croissant", "Pain au Chocolat", "Almond Croissant", "Danish Pastries"],
  },
  {
    name: "Celebration Cakes",
    image: productCakes,
    description: "Custom-designed cakes for every occasion — birthdays, weddings, and milestones. Each cake is made from scratch with seasonal fruits and natural flavors.",
    items: ["Berry Layer Cake", "Chocolate Ganache", "Carrot Cake", "Custom Wedding Cakes"],
  },
  {
    name: "Cookies & Biscotti",
    image: productCookies,
    description: "Crispy, chewy, and irresistible. Our cookies are made in small batches using real butter, dark chocolate, and toasted nuts.",
    items: ["Chocolate Chip", "Almond Biscotti", "Oatmeal Raisin", "Shortbread"],
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-3 font-body">
          Baked Fresh Daily
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
          Our Products
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div key={product.name} className="bg-card rounded-sm overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-card-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item) => (
                    <span key={item} className="text-xs font-body tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
