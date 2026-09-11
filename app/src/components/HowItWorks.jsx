import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Pay ₹4,999 to start',
      desc: 'GST invoice included. No call to book, no quote to wait for. We build your entire store.'
    },
    {
      title: 'Your catalog goes in as one file',
      desc: 'Export from what you use today, match the columns on screen, upload. Four hundred products in an afternoon, not a fortnight of typing.'
    },
    {
      title: 'Point your domain',
      desc: 'One DNS record. The certificate is issued and the old address redirects, so nothing you have shared stops working.'
    },
    {
      title: 'Live in 7–10 working days',
      desc: 'Your branding applied, your gateway and WhatsApp connected with your own keys, and thirty days of support while you settle in.'
    }
  ];

  return (
    <section className="py-[clamp(60px,8vw,100px)]">
      <div className="max-w-[800px] mx-auto px-[22px]">
        <div className="text-center mb-[50px]">
          <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
            Moving over
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-[1.15]">
            The switch is the part people dread.<br/>It is four steps.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-bgSoft rounded-2xl p-6 md:p-8 flex gap-5 md:gap-6 items-start shadow-sm border border-transparent hover:border-surfaceBorder transition-colors">
              <div className="w-[42px] h-[42px] bg-navy text-white font-display font-bold text-[20px] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-[19px] md:text-[21px] font-bold mb-2 text-navy leading-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-navy-soft leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center max-w-[600px] mx-auto">
          <p className="text-[14px] text-ink-muted leading-relaxed">
            Order history and customer records do not move over — no platform lets them out cleanly. Your catalog, your domain and your customers' next orders do.
          </p>
        </div>
      </div>
    </section>
  );
}
