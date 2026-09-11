import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Comparison() {
  const apps = [
    { name: 'WhatsApp campaigns & abandoned cart', examples: 'Interakt, AiSensy, Wati' },
    { name: 'Customer reviews with photos', examples: 'Judge.me, Loox' },
    { name: 'Email & SMS marketing', examples: 'Klaviyo, Omnisend' },
    { name: 'Landing pages / page builder', examples: 'GemPages, PageFly' },
    { name: 'COD verification & pincode checks', examples: 'an Indian COD app' },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="compare">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Add up what the plan doesn’t include.
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              The subscription is the small part. The apps for the things a store needs anyway each arrive with a bill of their own, and they all keep arriving. Every row on the right is already inside StoreBay.
            </p>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Shopify Basic is its published Indian price. The app figures are their list prices; change any to what you were quoted.
            </p>
            <a href="#compare-full" className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors group">
              Run the full three-year numbers 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="glass-panel p-4 md:p-8 relative">
            {/* Ambient glow behind table */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-50 rounded-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              {apps.map((app, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border border-transparent hover:border-surfaceBorder">
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{app.name}</h3>
                    <p className="text-muted text-sm mt-1">{app.examples}</p>
                  </div>
                  <div className="text-xl font-bold text-muted">₹</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
