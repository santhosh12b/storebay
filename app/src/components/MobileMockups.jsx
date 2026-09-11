import React from 'react';
import homeImg from '../assets/imobilehome.webp';
import productImg from '../assets/mobileproduct.webp';
import cartImg from '../assets/mobilecart.webp';

const MobileMockups = () => {
  return (
    <section className="py-32 bg-gosell-bg overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Your brand, on the phone it will be shopped from.</h2>
        <p className="text-lg text-gosell-text/70">
          Most orders arrive from a phone, usually one tap away from Instagram. These are the demo store's home, product and checkout pages, shot on one.
        </p>
      </div>

      <div className="flex justify-center gap-6 px-6 overflow-x-auto pb-8 snap-x">
        {/* Mockup 1: Home */}
        <div className="w-[280px] shrink-0 snap-center">
          <div className="bg-white border-[6px] border-gosell-text rounded-[2.5rem] shadow-floating h-[580px] overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gosell-text rounded-b-xl z-10"></div>
            <img src={homeImg} alt="Home Mobile Mockup" className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center mt-4 text-sm font-semibold text-gosell-text/60">Home</div>
        </div>

        {/* Mockup 2: Product */}
        <div className="w-[280px] shrink-0 snap-center relative top-8">
          <div className="bg-white border-[6px] border-gosell-text rounded-[2.5rem] shadow-floating h-[580px] overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gosell-text rounded-b-xl z-10"></div>
            <img src={productImg} alt="Product Mobile Mockup" className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center mt-4 text-sm font-semibold text-gosell-text/60">Product</div>
        </div>

        {/* Mockup 3: Checkout */}
        <div className="w-[280px] shrink-0 snap-center">
          <div className="bg-white border-[6px] border-gosell-text rounded-[2.5rem] shadow-floating h-[580px] overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gosell-text rounded-b-xl z-10"></div>
            <img src={cartImg} alt="Checkout Mobile Mockup" className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center mt-4 text-sm font-semibold text-gosell-text/60">Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default MobileMockups;
