import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-stone-50 text-stone-900 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-stone-200/80">
          
          {/* Left Block: Bold Title */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-600"></span>
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-500">
                Who We Are
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight">
              Reinventing the <br />
              <span className="text-amber-700 italic font-normal font-sans">Rental Experience</span>
            </h1>
          </div>

          
          <div className="lg:col-span-7 space-y-6 lg:pt-6">
            <p className="text-lg md:text-xl text-stone-700 font-medium leading-relaxed">
              Rentify is a premium property rental platform that bridges the gap 
              between exceptional living spaces and discerning tenants. 
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              Our mission is to eliminate the friction from modern renting. By pairing beautifully 
              curated, verified property listings with secure online infrastructure, we make finding 
              your next home entirely safe, fluid, and transparent for both tenants and owners.
            </p>
          </div>
        </div>

        
        <div className="pt-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-8">
            Our Core Pillars
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            
            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 font-serif font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Verified Quality</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Every listing undergoes a selective curation framework to ensure accurate representation and tier-one condition.
              </p>
            </div>

            
            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 font-serif font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Secure Escrows</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                We handle transactions safely, preserving complete balance sheet safety for security deposits and rental transfers.
              </p>
            </div>

            
            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 font-serif font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Seamless System</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                A single hub optimized for fast applications, fluid landlord communications, and minimal document clutter.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default About;