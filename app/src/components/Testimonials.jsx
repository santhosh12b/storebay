import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { quote: '"My store was live the same evening — domain and all, done for me."', who: 'Hair care seller, Chennai' },
    { quote: '"The WhatsApp order alert alone saves me from checking a dashboard all day."', who: 'Home food business, Coimbatore' },
    { quote: '"No fee until I actually crossed ₹50,000 — that made starting easy."', who: 'Jewellery seller, Jaipur' }
  ];

  return (
    <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
      <div className="text-center max-w-[480px] mx-auto mb-[34px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange">
          From sellers like you
        </div>
        <h2 className="text-[28px] my-2">What sellers say, not what we say.</h2>
      </div>

      <div className="flex flex-col gap-[14px]">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border border-surfaceBorder rounded-2xl p-[22px] shadow-premium-sm">
            <div className="text-orange text-[14px] mb-2">★★★★★</div>
            <p className="text-[14.5px] mb-2.5">{t.quote}</p>
            <div className="text-[12.5px] text-ink-muted font-semibold">{t.who}</div>
          </div>
        ))}
      </div>
      <p className="text-ink-muted text-[12px] mt-2.5">
        Sample quotes shown for illustration — swap in real ones as they come in.
      </p>
    </div>
  );
}
