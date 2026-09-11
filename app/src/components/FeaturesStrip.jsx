import React from 'react';

export default function FeaturesStrip() {
  const items = [
    "Razorpay, Cashfree, PhonePe & PayU",
    "Shiprocket fulfilment",
    "WhatsApp Cloud API",
    "Instagram DMs",
    "COD & pincode checks",
    "GST-ready invoicing"
  ];

  return (
    <div className="bg-bgSoft border-y border-surfaceBorder py-4 overflow-hidden relative">
      {/* We can use a simple flex wrap or a marquee effect. Let's use a standard flex wrap for now as in the original */}
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[14px] font-medium text-navy-soft">
          {items.map((item, idx) => (
            <span key={idx} className="whitespace-nowrap flex items-center gap-2">
              <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
