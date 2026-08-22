import React, { useEffect, useState } from "react";

function Services() {
  const originalServices = [
    { id: 1, name: "Banners", image: "/services/1.png" },
    { id: 2, name: "Photo Booth", image: "/services/2.png" },
    { id: 3, name: "Mall Activation Booth", image: "/services/3.png" },
    { id: 4, name: "Furniture", image: "/services/4.png" },
    { id: 5, name: "Bespoke Booth", image: "/services/5.png" },
    { id: 6, name: "QuickBuild Booths", image: "/services/6.png" },
    { id: 7, name: "Branding", image: "/services/7.png" },
    { id: 8, name: "Promotion Stands", image: "/services/8.png" },
    { id: 9, name: "Back Walls", image: "/services/9.png" },
  ];

  // Helper to determine items per view based on window width
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 768) return 1; // Mobile: 1 item
    if (window.innerWidth < 1024) return 3; // Tablet: 3 items
    return 5; // Desktop: 5 items
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const [currentIndex, setCurrentIndex] = useState(itemsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Update itemsPerView on window resize
  useEffect(() => {
    const handleResize = () => {
      const newItems = getItemsPerView();
      if (newItems !== itemsPerView) {
        setItemsPerView(newItems);
        setCurrentIndex(newItems);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  // Duplicate items to create a seamless infinite buffer dynamically
  const services = [
    ...originalServices.slice(-itemsPerView),
    ...originalServices,
    ...originalServices.slice(0, itemsPerView),
  ];

  // Auto slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle seamless jump when reaching clone boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= originalServices.length + itemsPerView) {
      setIsTransitioning(false);
      setCurrentIndex(itemsPerView);
    } else if (currentIndex < itemsPerView) {
      setIsTransitioning(false);
      setCurrentIndex(originalServices.length + currentIndex);
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl tracking-tight leading-tight">
            Our {" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our range of professional exhibition and branding solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-md flex items-center justify-center text-xl md:text-2xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-md flex items-center justify-center text-xl md:text-2xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            ›
          </button>

          {/* Viewport */}
          <div className="overflow-hidden mx-10 md:mx-14">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {services.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 w-full md:w-1/3 lg:w-1/5 px-1"
                >
                  <div className="h-[300px] md:h-[330px] bg-white border border-gray-100 flex flex-col items-center justify-center px-6 py-8 transition-all duration-300">
                    {/* Image */}
                    <div className="w-full h-[150px] flex items-center justify-center mb-5">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="max-w-[100px] max-h-[100px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
