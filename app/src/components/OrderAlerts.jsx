import React from 'react';

export default function OrderAlerts() {
  const alerts = [
    { icon: '📦', title: 'New order → you', desc: 'Instant WhatsApp alert the second an order is placed — pack it and go.' },
    { icon: '✅', title: 'Order confirmed → customer', desc: 'Your customer gets a confirmation the moment they check out.' },
    { icon: '🚚', title: 'Shipped → customer', desc: "Tracking link sent automatically once it's on the way." },
    { icon: '⭐', title: 'After delivery → customer', desc: 'A review request goes out — feeding straight into your downloadable review cards.' }
  ];

  return (
    <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
      <div className="text-center max-w-[480px] mx-auto mb-[34px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange">
          Never miss an order
        </div>
        <h2 className="text-[28px] my-2">We message you. We message them.</h2>
      </div>
      <div className="flex flex-col gap-2.5">
        {alerts.map((alert, i) => (
          <div key={i} className="flex gap-3 items-start bg-bgSoft rounded-[14px] py-4 px-[18px]">
            <div className="text-[18px] shrink-0">{alert.icon}</div>
            <div>
              <div className="font-display font-semibold text-[14.5px] mb-0.5">{alert.title}</div>
              <div className="text-[13.5px] text-ink-muted">{alert.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
