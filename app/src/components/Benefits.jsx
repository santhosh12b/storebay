import React from 'react';
import { CreditCard, FileSpreadsheet, Globe, Rocket } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-brand-400" />,
      title: 'Pay once',
      description: '₹35,400 at checkout, GST invoice included. No call to book, no quote to wait for.'
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-brand-400" />,
      title: 'Your catalog goes in as one file',
      description: 'Export from what you use today, match the columns on screen, upload. Four hundred products in an afternoon, not a fortnight of typing.'
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-400" />,
      title: 'Point your domain',
      description: 'One DNS record. The certificate is issued and the old address redirects, so nothing you have shared stops working.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-brand-400" />,
      title: 'Live in 7–10 working days',
      description: 'Your branding applied, your gateway and WhatsApp connected with your own keys, and thirty days of support while you settle in.'
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, i) => (
            <div key={i} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 p-4 rounded-full bg-surface inline-block border border-surfaceBorder shadow-inner">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-500/5" />
          <p className="text-lg text-muted relative z-10 leading-relaxed">
            Order history and customer records do not move over — no platform lets them out cleanly. <br className="hidden md:block" />
            <strong className="text-foreground">Your catalog, your domain and your customers’ next orders do.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
