import React from 'react';
import PiantlyNavbar from './components/PaintlyNavbar';
import Footer from './components/sections/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="scroll-smooth min-h-screen bg-radial from-[#bb5a0099] via-[#ffd8b399] font-sans to-[#bb46ff99]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="h-40 w-full "></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <PiantlyNavbar />
      
      <main className="pt-32 pb-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Contact The Paint<span className="text-orange-400">ly</span> Team
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make inquiries, reach out! We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Reach Us With Our</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Office Address</h4>
                  <p className="text-slate-600">
                    123 Main Street<br />
                    Suite 400<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Support Hours</h3>
              <p className="opacity-90 mb-2">Monday - Friday</p>
              <p className="opacity-90">9:00 AM - 6:00 PM WAT</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/40">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us A Message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Label</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email " 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject Label</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject " 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message Label</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Message" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/30"
              >
                <span>Send</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;