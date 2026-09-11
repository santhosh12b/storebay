import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="max-w-[680px] mx-auto px-[22px] py-[60px] text-center">
        <h2 className="text-[30px] mb-3.5">Your store deserves<br/>to feel premium.</h2>
        <p className="text-[15px] text-ink-muted mb-[26px]">
          ₹4,999, and our team builds it — domain, homepage, everything. You just show up and sell.
        </p>
        <Link to="/pricing" className="inline-block font-display font-semibold text-[16px] text-white bg-orange py-[15px] px-[30px] rounded-xl shadow-[0_12px_30px_-10px_rgba(230,116,13,0.5)] no-underline hover:opacity-90 transition-opacity">
          Get your store built
        </Link>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-[22px]">
        <footer className="border-t border-surfaceBorder pt-[40px] pb-[40px]">
          <div className="flex flex-col md:flex-row justify-between mb-[40px] gap-10">
            <div className="flex flex-col">
              <div className="font-display font-bold text-[17px]">
                store<span className="text-orange">bay</span>
              </div>
              <p className="text-[13px] text-ink-muted max-w-[220px] mt-2">
                Premium storefronts, zero complexity.
              </p>
            </div>
            
            <div className="flex gap-[50px] md:gap-[80px] flex-wrap">
              <div className="flex flex-col">
                <h4 className="font-display text-[11.5px] tracking-[1px] uppercase text-ink-muted mb-4 font-semibold">
                  Product
                </h4>
                <Link to="/features" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">Features</Link>
                <Link to="/pricing" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">Pricing</Link>
                <a href="/#faq" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">FAQ</a>
              </div>
            
              <div className="flex flex-col">
                <h4 className="font-display text-[11.5px] tracking-[1px] uppercase text-ink-muted mb-4 font-semibold">
                  Company
                </h4>
                <a href="#" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">About</a>
                <a href="#" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">Contact</a>
              </div>
            
              <div className="flex flex-col">
                <h4 className="font-display text-[11.5px] tracking-[1px] uppercase text-ink-muted mb-4 font-semibold">
                  Talk to us
                </h4>
                <a href="#" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">WhatsApp</a>
                <a href="#" className="block text-[13.5px] text-navy no-underline mb-[10px] hover:text-orange">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="text-[12.5px] text-ink-muted border-t border-surfaceBorder pt-4 text-center">
            © Storebay.in
          </div>
        </footer>
      </div>
    </>
  );
}
