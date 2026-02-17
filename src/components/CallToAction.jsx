function CallToAction() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Visit our showroom or give us a call today. Our team of experts is
          ready to help you find the perfect vehicle at the right price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+15551234567"
            className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
          <a
            href="#inventory"
            className="border-2 border-white hover:bg-white hover:text-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            View Inventory
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
