export const VideoSection = () => {
  return (
    <section className="relative -mt-[24rem] sm:-mt-[28rem] md:-mt-[36rem] -mb-32 sm:-mb-40 z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center py-8 sm:py-12 md:py-20">
          {/* CTA Button */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl sm:rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 lg:gap-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="whitespace-nowrap">Experimente Grátis por 14 Dias!</span>
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border-2 sm:border-4 border-white">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="SINTAGMA - Demonstração"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Duration Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold shadow-xl border-2 border-white text-xs sm:text-sm">
              3 min
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};