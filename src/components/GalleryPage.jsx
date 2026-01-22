import React, { useState } from "react";

const categories = [
  "All",
  "Event Volunteers",
  "Brand Promoters",
  "Pamphlet Distribution",
  "Product Launch Support"
];

const galleryItems = [
  {
    id: 1,
    category: "Event Volunteers",
    image: "/gallery/1.jpg"
  },
  {
    id: 2,
    category: "Brand Promoters",
    image: "/gallery/2.jpg"
  },
  {
    id: 3,
    category: "Brand Promoters",
    image: "/gallery/3.jpg"
  },
  {
    id: 4,
    category: "Event Volunteers",
    image: "/gallery/4.jpg"
  },
  {
    id: 5,
    category: "Product Launch Support",
    image: "/gallery/5.jpg"
  },
  {
    id: 6,
    category: "Brand Promoters",
    image: "/gallery/6.jpg"
  },
  {
    id: 7,
    category: "Pamphlet Distribution",
    image: "/gallery/7.jpg"
  },
  {
    id: 8,
    category: "Event Volunteers",
    image: "/gallery/8.jpg"
  },
  {
    id: 9,
    category: "Pamphlet Distribution",
    image: "/gallery/9.jpg"
  },
  {
    id: 10,
    category: "Product Launch Support",
    image: "/gallery/10.jpg"
  },
  {
    id: 11,
    category: "Brand Promoters",
    image: "/gallery/11.jpg"
  },
  {
    id: 12,
    category: "Event Volunteers",
    image: "/gallery/12.jpg"
  }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* ================= HEADER ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            See our event volunteers, brand promoters, and campaign activities in action.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-700 border hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

                {/* Category Label */}
                <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No images available in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
