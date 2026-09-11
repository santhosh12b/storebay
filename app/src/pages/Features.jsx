import React from 'react';
import { modules } from '../data/features';

export default function Features() {

  const subNav = modules.map((m) => ({ id: m.id, label: m.title }));

  return (
    <>
      <section className="bg-navy text-white pb-[clamp(40px,5vw,60px)] pt-[40px]">
        <div className="max-w-[800px] mx-auto px-[22px] text-center">
          <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
            Features
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.1] my-[18px] text-white">
            Everything a D2C brand needs, <span className="font-serif italic font-normal">in the box</span>.
          </h1>
          <p className="text-[1.15rem] mt-[20px] text-[rgba(255,255,255,0.7)] leading-relaxed max-w-[680px] mx-auto">
            There is no free tier and no paid tier. There is one product, and this page is all of it —
            every module and capability is included in the ₹4,999 setup and ₹999/month subscription. No app marketplace, no upgrade prompt, nothing
            switched off until you pay more.
          </p>
          <div className="flex gap-[12px] mt-[28px] justify-center flex-wrap">
            <a href="#start" className="inline-block font-display font-semibold text-[16px] text-navy bg-white py-[15px] px-[30px] rounded-xl no-underline hover:bg-gray-100 transition-colors">
              Get started
            </a>
            <a href="#pricing" className="inline-block font-sans font-semibold text-[15px] text-white bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] py-[14px] px-[26px] rounded-xl no-underline hover:bg-[rgba(255,255,255,0.15)] transition-colors">
              What it costs
            </a>
          </div>
        </div>
      </section>

      <nav className="sticky top-[73px] bg-[#f8f9fa] border-b border-surfaceBorder z-40">
        <div className="max-w-[1200px] mx-auto px-[22px] overflow-x-auto custom-scrollbar">
          <div className="flex gap-8 whitespace-nowrap py-[18px]">
            {subNav.map((nav) => (
              <a key={nav.id} href={`#${nav.id}`} className="text-[14.5px] font-semibold text-navy hover:text-orange no-underline transition-colors">
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="pt-[clamp(40px,5vw,80px)] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[22px] flex flex-col gap-[80px]">
          {modules.map((mod, idx) => (
            <React.Fragment key={mod.id}>
              <div id={mod.id} className="scroll-mt-[160px] grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
                
                <div>
                  <div className="lg:sticky lg:top-[160px]">
                    <span className="font-display font-bold text-blue-600 text-[22px] mb-2 block">
                      {mod.num}
                    </span>
                    <h2 className="text-[28px] font-bold text-navy mb-4 leading-tight">{mod.title}</h2>
                    <p className="text-[15px] text-ink-muted leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                {/* Right Column: Image Placeholder & Specs */}
                <div>
                  {/* Image Placeholder */}
                  {(mod.id === 'storefront' || mod.id === 'pages') && (
                    <div className="bg-[#f8f9fa] border border-[#e9ecef] rounded-2xl aspect-[16/9] mb-10 flex items-center justify-center shadow-sm overflow-hidden">
                      {mod.img ? (
                        <img src={mod.img} alt={mod.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-gray-400 font-medium text-sm">[ Image space for {mod.title} ]</span>
                      )}
                    </div>
                  )}

                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                    {mod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="border-t border-surfaceBorder pt-5">
                        <b className="block font-sans font-bold text-navy text-[15px] mb-2">
                          {spec.title}
                        </b>
                        <span className="block text-ink-muted text-[14px] leading-relaxed">
                          {spec.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Divider between modules (hide for last item) */}
              {idx < modules.length - 1 && (
                <hr className="border-t border-surfaceBorder my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
