import React from 'react';

export default function Faq() {
  const faqs = [
    { 
      q: 'What am I actually paying ₹4,999 for?', 
      a: "The complete setup of your store by our team. You share your products and we hand over a fully functional store with your branding, your domain pointed with SSL, and all integrations (Razorpay, WhatsApp, Shiprocket) built-in and ready for your keys." 
    },
    { 
      q: 'What are the recurring charges?', 
      a: "Just ₹999/month for your subscription, which includes hosting. Beyond that, only what you already pay today and would on any platform: your gateway's transaction charge, Shiprocket's rates, WhatsApp's per-conversation fee — all on your own accounts." 
    },
    {
      q: 'When does the 0.5% platform fee start?',
      a: "Only after your first ₹50,000 in lifetime sales. Before that, there is no platform fee at all."
    },
    { 
      q: 'How do my products and customers move?', 
      a: "Products move in one spreadsheet upload. Customer records and order history do not move — no platform exports passwords, and moving old orders without their payment records creates a mess. You keep your old admin panel running for a month to process returns, and point the domain to the new store for all new orders." 
    },
    { 
      q: 'Who builds the features that aren\'t there yet?', 
      a: "We do, when they are useful to everyone. The platform is not frozen; it gets updates like any SaaS. But we do not build bespoke features for single stores. If your business depends on a very specific checkout rule, you need custom development, not this product." 
    }
  ];

  return (
    <div className="max-w-[700px] mx-auto px-[22px] py-[clamp(60px,8vw,100px)]" id="faq">
      <div className="text-center max-w-[480px] mx-auto mb-[50px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
          Before you ask
        </div>
        <h2 className="text-[32px] md:text-[40px] leading-[1.15]">
          The questions everyone opens with.
        </h2>
      </div>

      <div className="flex flex-col">
        {faqs.map((faq, i) => (
          <details key={i} className="border-b border-surfaceBorder group">
            <summary className="cursor-pointer py-[24px] font-bold text-[18px] text-navy list-none flex justify-between items-center outline-none">
              {faq.q}
              <span className="text-orange text-[24px] group-open:hidden">+</span>
              <span className="text-orange text-[24px] hidden group-open:block">–</span>
            </summary>
            <div className="pb-[24px] text-[16px] text-navy-soft leading-relaxed pr-6">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
