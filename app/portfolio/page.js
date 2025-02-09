import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Wedding Bliss",
    category: "Wedding",
    image: "/images/wedding-1.jpg", // Replace with your image path
    link: "/portfolio/wedding-bliss",
  },
  {
    id: 2,
    title: "Urban Portraits",
    category: "Portrait",
    image: "/images/portrait-1.jpg", // Replace with your image path
    link: "/portfolio/urban-portraits",
  },
  {
    id: 3,
    title: "Corporate Event",
    category: "Event",
    image: "/images/event-1.jpg", // Replace with your image path
    link: "/portfolio/corporate-event",
  },
  {
    id: 4,
    title: "Nature's Beauty",
    category: "Landscape",
    image: "/images/landscape-1.jpg", // Replace with your image path
    link: "/portfolio/nature-beauty",
  },
  {
    id: 5,
    title: "Product Showcase",
    category: "Commercial",
    image: "/images/commercial-1.jpg", // Replace with your image path
    link: "/portfolio/product-showcase",
  },
  {
    id: 6,
    title: "Fashion Shoot",
    category: "Fashion",
    image: "/images/fashion-1.jpg", // Replace with your image path
    link: "/portfolio/fashion-shoot",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
            Explore my latest work and creative projects. Each piece tells a unique story.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-all group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 uppercase tracking-widest">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;