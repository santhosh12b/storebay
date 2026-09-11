import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-navy text-white">
      <div className="max-w-[700px] mx-auto px-[22px]">
        
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
          Why we build it for you
        </div>
        <h2 className="text-[32px] md:text-[40px] leading-[1.15] mb-8 text-white">
          Platform setup is the hardest part. So we do it.
        </h2>
        
        <div className="flex flex-col gap-5 text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
          <p>
            Most platforms give you a blank template and leave you to figure out the design, the payment gateways, the shipping integrations, and the WhatsApp APIs. It takes weeks of trial and error before you can make your first sale.
          </p>
          <p>
            We charge a one-time ₹4,999 setup fee so our team can do all of that for you. You send us your products, and we hand over a completely finished, ready-to-sell store. No apps to configure, no code to write. You just focus on selling.
          </p>
          <p className="font-serif italic text-white text-[19px] mt-4">
            — Storebay
          </p>
        </div>

      </div>
    </section>
  );
}
