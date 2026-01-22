const CTA = () => {
    return (
        <>
        {/* ================= CTA ================= */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Need Reliable Manpower for Your Next Event?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Hire trained volunteers & professional promoters with fast
            deployment, affordable pricing, and local expertise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300" href='/contact' target='_blank'>
              Contact ProVol Promotions
            </a>
          </div>
        </div>
      </section>
      </>
    )
};
export default CTA;