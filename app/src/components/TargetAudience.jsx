import React from 'react';

export default function TargetAudience() {
  const pros = [
    "You are launching a brand and want a store that is finished on day one: payments, WhatsApp, COD and shipping already wired in, instead of a free plan whose bill grows as you do.",
    "You run a D2C store on Shopify, Wix, Dukaan or WooCommerce, and pay for three or more apps on top of the plan.",
    "WhatsApp is where your customers actually talk to you, and you want it inside the store, not bolted on beside it.",
    "You ship across India with COD, and whether a pincode is serviceable matters at checkout.",
    "You want the code and the data in your own hands, so nobody can raise the rent."
  ];

  const cons = [
    "A marketplace with many sellers. Storebay is one brand, one store.",
    "A business that does not sell physical goods to customers in India. It is built around COD, pincodes, GST invoices and Indian gateways.",
    "Somebody who needs a bespoke feature by next week. Custom work is quoted separately and takes its own time.",
    "Anyone who wants us to run their ads or write their copy. The tools are in the box; that work is yours."
  ];

  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-bgSoft border-t border-surfaceBorder">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Who it's for */}
          <div>
            <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
              Who this is for
            </div>
            <h2 className="text-[32px] leading-[1.15] mb-8">
              Brands that sell, and brands about to.
            </h2>
            <ul className="flex flex-col gap-5">
              {pros.map((pro, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[15.5px] text-navy-soft leading-relaxed m-0">
                    {pro}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Who it's not for */}
          <div className="opacity-80">
            <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-ink-muted mb-4">
              Who it is not for
            </div>
            <h2 className="text-[32px] leading-[1.15] mb-8 text-ink-muted">
              Not everyone, and we would rather say so.
            </h2>
            <ul className="flex flex-col gap-5">
              {cons.map((con, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-[15.5px] text-ink-muted leading-relaxed m-0">
                    {con}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
