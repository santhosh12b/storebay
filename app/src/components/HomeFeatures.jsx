import React from 'react';

export default function HomeFeatures() {
  const features = [
    { icon: '🌐', title: 'Free .in domain, registered for you', desc: "We register and connect your domain as part of your ₹4,999 — no separate purchase, no technical steps on your end." },
    { icon: '🧩', title: 'Homepage, built by our team', desc: "Products, reviews, and your Instagram feed — we set up your complete homepage for you. Log in and edit it yourself anytime after." },
    { icon: '✆', title: 'WhatsApp order alerts', desc: "The moment an order comes in, you're notified — pack it, ship it, done. Your customer gets their own updates too." },
    { icon: '⭐', title: 'Downloadable review cards', desc: "Every review can be downloaded as a branded photo card — post it straight to your Instagram as social proof." },
    { icon: '📸', title: 'Your Instagram, on your homepage', desc: "Your last few Instagram posts show up automatically on your store's homepage — no extra posting, no manual updates." },
    { icon: '💳', title: 'Secure payments, your way', desc: "UPI, cards, net banking, and cash on delivery — all supported, settled straight to your bank account." }
  ];

  return (
    <div className="max-w-[680px] mx-auto px-[22px] py-[56px] bg-bgSoft rounded-[24px]" id="features">
      <div className="text-center max-w-[480px] mx-auto mb-[34px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange">
          What's included
        </div>
        <h2 className="text-[28px] my-2">Everything, built by our team.</h2>
        <p className="text-[15px] text-ink-muted">
          Nothing here is a paid add-on, and nothing here is left for you to figure out — it's all set up before your store goes live.
        </p>
      </div>

      <div className="flex flex-col gap-[14px]">
        {features.map((f, i) => (
          <div key={i} className="bg-white border border-surfaceBorder rounded-2xl p-6 shadow-premium-sm">
            <div className="w-[42px] h-[42px] rounded-xl bg-orange-tint text-orange-dark flex items-center justify-center text-[19px] mb-3.5">
              {f.icon}
            </div>
            <h3 className="text-[17.5px] mb-1.5">{f.title}</h3>
            <p className="text-[14px] text-ink-muted mb-0">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
