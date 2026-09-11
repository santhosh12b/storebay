import React from 'react';
import { CreditCard, FileSpreadsheet, Globe, Zap } from 'lucide-react';

const Onboarding = () => {
  const steps = [
    {
      title: "Pay once",
      desc: "₹35,400 at checkout, GST invoice included. No call to book, no quote to wait for.",
      icon: <CreditCard className="text-gosell-text" size={24} />
    },
    {
      title: "Your catalog goes in as one file",
      desc: "Export from what you use today, match the columns on screen, upload. Four hundred products in an afternoon, not a fortnight of typing.",
      icon: <FileSpreadsheet className="text-gosell-text" size={24} />
    },
    {
      title: "Point your domain",
      desc: "One DNS record. The certificate is issued and the old address redirects, so nothing you have shared stops working.",
      icon: <Globe className="text-gosell-text" size={24} />
    },
    {
      title: "Live in 7–10 working days",
      desc: "Your branding applied, your gateway and WhatsApp connected with your own keys, and thirty days of support while you settle in.",
      icon: <Zap className="text-gosell-text" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gosell-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-50 border border-gosell-border rounded-xl flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gosell-text/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gosell-bg border border-gosell-border rounded-xl text-sm text-gosell-text/70 text-center shadow-sm">
          <strong className="text-gosell-text font-semibold">Note:</strong> Order history and customer records do not move over — no platform lets them out cleanly. Your catalog, your domain and your customers' next orders do.
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
