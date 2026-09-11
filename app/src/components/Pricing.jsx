import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="max-w-[800px] mx-auto px-[22px] py-[60px]" id="pricing">
      <div className="bg-navy rounded-[22px] py-[40px] px-[32px] text-white relative overflow-hidden shadow-premium text-center">
        <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] bg-orange opacity-[0.18] rounded-full" />
        
        <div className="inline-block bg-orange text-white text-[11.5px] font-bold tracking-[0.5px] py-1 px-3 rounded-[20px] mb-4 relative z-10">
          ONE SIMPLE PLAN
        </div>
        
        <h2 className="text-[32px] md:text-[40px] leading-[1.15] mb-6 relative z-10 text-white">
          ₹4,999 setup. Then ₹999/month.
        </h2>
        
        <p className="text-[17px] text-[#b8bacb] mb-[32px] relative z-10 max-w-[500px] mx-auto leading-relaxed">
          The complete platform with every module included. Our team builds your store, points your domain, and wires up your gateway. No feature is held behind a higher tier.
        </p>
        
        <Link to="/pricing" className="inline-block bg-orange text-white font-display font-bold text-[16px] p-[16px] px-8 rounded-xl no-underline relative z-10 hover:opacity-90 transition-opacity shadow-[0_12px_30px_-10px_rgba(230,116,13,0.5)]">
          View full pricing & details
        </Link>
      </div>
    </div>
  );
}
