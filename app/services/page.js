import Link from "next/link";

const services = [
  {
    title: "Wedding Photography",
    description: "Capture the most special day of your life with our professional wedding photography services.",
    icon: "💍", // Replace with an actual icon or image
    link: "/services/wedding",
  },
  {
    title: "Portrait Photography",
    description: "Stunning portraits that reflect your personality and style, perfect for personal or professional use.",
    icon: "📸", // Replace with an actual icon or image
    link: "/services/portrait",
  },
  {
    title: "Event Photography",
    description: "Document your events with creativity and precision, ensuring every moment is remembered.",
    icon: "🎉", // Replace with an actual icon or image
    link: "/services/event",
  },
  {
    title: "Commercial Photography",
    description: "High-quality images for your business, branding, and marketing needs.",
    icon: "🏢", // Replace with an actual icon or image
    link: "/services/commercial",
  },
  {
    title: "Landscape Photography",
    description: "Breathtaking landscapes that capture the beauty of nature in its purest form.",
    icon: "🌄", // Replace with an actual icon or image
    link: "/services/landscape",
  },
  {
    title: "Product Photography",
    description: "Showcase your products with professional photography that highlights their best features.",
    icon: "📦", // Replace with an actual icon or image
    link: "/services/product",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
            We offer a wide range of photography services to meet your needs. From weddings to commercial shoots, we’ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;