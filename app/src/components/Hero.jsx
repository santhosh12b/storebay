import React from 'react';
import homeImg from '../assets/home.webp';

export default function Hero() {
  return (
    <div className="max-w-[1000px] mx-auto px-[22px] pt-[60px] pb-[40px] text-center">
      <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
        Storebay
      </div>
      <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.1] my-[18px] text-navy max-w-[800px] mx-auto">
        Get your entire store built for ₹4,999. Then just ₹999/month.
      </h1>
      <p className="text-[17px] text-navy-soft max-w-[580px] mx-auto mb-[32px] leading-relaxed">
        We build your store, domain and all. It's ready before you've had to touch a thing. 0.5% fee only after your first ₹50,000 in sales.
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-4 items-center">
        <a href="#pricing" className="inline-block font-display font-semibold text-[16px] text-white bg-orange py-[15px] px-[30px] rounded-xl shadow-premium-sm hover:opacity-90 transition-opacity">
          Get your store built
        </a>
        <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="inline-block font-sans font-semibold text-[15px] text-navy bg-bgSoft border border-surfaceBorder py-[14px] px-[26px] rounded-xl hover:bg-gray-100 transition-colors">
          Or look around the demo store first &rarr;
        </a>
      </div>
      <div className="text-[13px] text-ink-muted mb-[60px]">
        + 18% GST • cancel anytime • hosting included
      </div>

      {/* Browser Mockup Placeholder */}
      <div className="relative max-w-[900px] mx-auto">
        <div className="bg-white rounded-t-xl border border-surfaceBorder border-b-0 flex items-center px-4 py-3 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          </div>
          <div className="mx-auto bg-bgSoft text-[12px] text-ink-muted px-12 sm:px-32 py-1 rounded-md font-medium">
            yourbrand.in
          </div>
        </div>
        <div className="bg-[#f8f9fa] border border-surfaceBorder rounded-b-xl aspect-[16/9] flex items-center justify-center shadow-premium overflow-hidden">
          <img src={homeImg} alt="Store Home" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
