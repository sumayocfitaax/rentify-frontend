import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-stone-50 text-stone-900 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
        
        {/* Left Column: Connection Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-8 bg-amber-500"></span>
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-600">
                Get In Touch
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight">
              Let's Start a <br />
              <span className="text-amber-700 italic font-normal font-sans">Conversation</span>
            </h1>
            <p className="text-stone-600 max-w-sm text-sm leading-relaxed pt-2">
              Whether you are looking to list a luxury estate, lease a premium villa, or have architectural questions, our concierge team is on standby.
            </p>
          </div>

        </div>

        {/* Right Column: Premium Form Element */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-stone-200/60 shadow-md relative">
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Row: Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Your Identity</label>
              <input
                type="text"
                placeholder="e.g. Alexander Wright"
                className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all duration-200 text-sm"
              />
            </div>

            {/* Input Row: Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Email Address</label>
              <input
                type="email"
                placeholder="alexander@domain.com"
                className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all duration-200 text-sm"
              />
            </div>

            {/* Input Row: Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Your Message</label>
              <textarea
                placeholder="Tell us about your property goals..."
                rows="5"
                className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all duration-200 text-sm resize-none"
              />
            </div>

            {/* Elegant Call to Action */}
            <button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-200 shadow-sm mt-2 text-sm">
              Initiate Inquiry
            </button>

          </form>

        </div>

      </div>
    </div>
    </>
  );
}

export default Contact;