import React from 'react';
import homeImg from '../assets/imobilehome.webp';
import productImg from '../assets/mobileproduct.webp';
import cartImg from '../assets/mobilecart.webp';

export default function CustomerView() {
  const views = [
    {
      title: 'Home.',
      desc: 'A full-width slider, category tiles and an offer bar. Every section is a setting you change, not a template you fight.',
      img: homeImg
    },
    {
      title: 'Product.',
      desc: 'Variants, stock and reviews, with an add-to-cart bar that stays put while they scroll.',
      img: productImg
    },
    {
      title: 'Checkout.',
      desc: 'Pincode check, coupon, COD beside prepaid, and the address form on the same page as the cart. One screen, not four.',
      img: cartImg
    }
  ];

  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        
        <div className="text-center max-w-[700px] mx-auto mb-[60px]">
          <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
            What your customers see
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-[1.15] mb-[18px]">
            Your brand, on the phone it will be shopped from.
          </h2>
          <p className="text-[16px] text-navy-soft leading-relaxed">
            Most orders arrive from a phone, usually one tap away from Instagram. These are the demo store's home, product and checkout pages, shot on one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {views.map((view, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-[260px] h-[520px] bg-navy rounded-[36px] shadow-premium p-3 mb-6 relative">
                <div className="bg-[#f8f9fa] w-full h-full rounded-[24px] overflow-hidden flex items-center justify-center border border-surfaceBorder relative">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-navy rounded-b-[12px] w-[120px] mx-auto z-10"></div>
                  {view.img ? (
                    <img src={view.img} alt={view.title} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-gray-400 font-medium text-sm">[ Image: {view.title} ]</span>
                  )}
                </div>
              </div>
              <p className="text-[14.5px] text-navy-soft max-w-[260px] leading-relaxed">
                <strong className="text-navy font-bold">{view.title}</strong> {view.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-[60px] text-center flex flex-col items-center justify-center gap-3">
          <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="inline-block font-display font-semibold text-[16px] text-white bg-navy py-[14px] px-[28px] rounded-xl hover:opacity-90 transition-opacity shadow-premium-sm">
            Open the demo store
          </a>
          <div className="text-[13px] text-ink-muted">
            It resets on a schedule. Add something to the cart, run the checkout.
          </div>
        </div>

      </div>
    </section>
  );
}
