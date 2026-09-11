import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingFooter = () => {
  return (
    <div className="bg-white">
      {/* Pricing CTA */}
      <section className="py-24 border-y border-gosell-border" id="pricing">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gosell-text text-white rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-floating">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gosell-green/20 rounded-bl-full -mr-16 -mt-16 pointer-events-none blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gosell-green/10 rounded-tr-full -ml-16 -mb-16 pointer-events-none blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Pay once. Then it's yours.</h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                ₹35,400 — that is ₹30,000 plus GST — and your store is live in 7–10 working days, on your domain, with the code in your hands.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gosell-green text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gosell-lightGreen transition-colors w-full sm:w-auto">
                  Get started — ₹35,400
                  <ArrowRight size={20} />
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold text-lg transition-colors w-full sm:w-auto">
                  Open live demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="font-heading font-extrabold text-2xl tracking-tight mb-4 text-gosell-text">Storebay</div>
              <p className="text-sm text-gosell-text/60 leading-relaxed">
                A complete D2C commerce stack for Indian brands. Built once, hosted for the first year, yours for good.
              </p>
              <div className="mt-4 text-xs font-bold bg-gosell-bg border border-gosell-border px-3 py-1.5 rounded-full inline-block">
                ₹30,000 one-time · no monthly plan
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gosell-text/40">Product</h4>
              <ul className="space-y-3 text-sm font-medium text-gosell-text/80">
                <li><a href="#" className="hover:text-gosell-green transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">Compare</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gosell-text/40">Talk to us</h4>
              <ul className="space-y-3 text-sm font-medium text-gosell-text/80">
                <li><a href="#" className="hover:text-gosell-green transition-colors">Get started</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">Staff panel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gosell-text/40">Legal</h4>
              <ul className="space-y-3 text-sm font-medium text-gosell-text/80">
                <li><a href="#" className="hover:text-gosell-green transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-gosell-green transition-colors">Refund policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gosell-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gosell-text/50">
            <div>© {new Date().getFullYear()} Storebay. All rights reserved.</div>
            <div className="text-center md:text-right">
              Razorpay, Shiprocket, WhatsApp, Instagram, Shopify and WooCommerce are trademarks of their respective owners.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingFooter;
