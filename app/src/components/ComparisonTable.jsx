import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-white border-y border-gosell-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Add up what the plan doesn't include.</h2>
          <p className="text-lg text-gosell-text/70 max-w-2xl mx-auto">
            The subscription is the small part. The apps for the things a store needs anyway each arrive with a bill of their own, and they all keep arriving. Every row on the right is already inside Storebay.
          </p>
        </div>

        <div className="bg-gosell-bg rounded-2xl border border-gosell-border p-2 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* The Subscription Side */}
            <div>
              <div className="mb-6 pb-4 border-b border-gosell-border/60">
                <h3 className="font-bold text-xl mb-1 text-gosell-text/50">The Rent</h3>
                <p className="text-sm text-gosell-text/60">Shopify Basic + Apps</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: "Monthly Platform Plan", price: "₹1,499/mo", apps: "Shopify Basic" },
                  { name: "WhatsApp Campaigns & Carts", price: "₹2,500/mo", apps: "Interakt, AiSensy" },
                  { name: "Reviews with photos", price: "₹1,200/mo", apps: "Judge.me, Loox" },
                  { name: "Email & SMS", price: "₹1,500/mo", apps: "Klaviyo" },
                  { name: "COD & Pincode Verify", price: "₹800/mo", apps: "Indian COD App" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        <X size={16} className="text-red-400" />
                        {item.name}
                      </div>
                      <div className="text-xs text-gosell-text/50 ml-6">{item.apps}</div>
                    </div>
                    <div className="font-mono text-sm font-medium text-gosell-text/60">{item.price}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gosell-border/60 flex justify-between items-center">
                <div className="font-bold">Estimated Monthly</div>
                <div className="font-mono font-bold text-lg text-red-500">₹7,499/mo</div>
              </div>
            </div>

            {/* The StoreBay Side */}
            <div className="bg-white rounded-xl p-6 shadow-floating border border-gosell-green/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gosell-green/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
              <div className="mb-6 pb-4 border-b border-gosell-border">
                <h3 className="font-bold text-xl mb-1 text-gosell-green">Storebay Ownership</h3>
                <p className="text-sm text-gosell-text/60">One-time payment</p>
              </div>

              <div className="space-y-6">
                {[
                  "No monthly platform fee",
                  "Built-in WhatsApp & Abandoned Cart",
                  "Built-in Photo Reviews",
                  "Built-in Email & SMS tooling",
                  "Built-in COD & Pincode Verification",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={18} className="text-gosell-green mt-0.5 shrink-0" />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gosell-border flex justify-between items-center">
                <div className="font-bold">Total Cost</div>
                <div className="font-mono font-extrabold text-2xl text-gosell-green">₹30,000 <span className="text-sm font-normal text-gosell-text/50">once</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
