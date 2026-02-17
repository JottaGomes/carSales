function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Find Your{" "}
            <span className="text-red-400">Dream Car</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Explore our premium collection of certified pre-owned and brand-new
            vehicles. Quality you can trust, prices you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#inventory"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Browse Inventory
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Cars in Stock" },
            { value: "15k+", label: "Happy Customers" },
            { value: "20+", label: "Years Experience" },
            { value: "4.9", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-red-400">
                {stat.value}
              </p>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
