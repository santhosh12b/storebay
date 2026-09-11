import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <>
      <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
          Pricing
        </div>
        <h1 className="text-[clamp(2rem,4.4vw,2.9rem)] leading-[1.1] my-[18px]">
          ₹4,999 setup, plus a simple monthly subscription.
        </h1>
        <p className="text-[17px] text-navy-soft mt-4">
          One-time ₹4,999 for our team to build your store, then ₹999/month. A 0.5% platform fee only kicks in after you cross ₹50,000 in sales. No hidden tiers and no per-app bleed.
        </p>
      </div>

      <div className="max-w-[760px] mx-auto px-[22px] pb-[80px]">
        
        {/* Main Pricing Card */}
        <div className="bg-navy rounded-[22px] py-[40px] px-[32px] text-white relative overflow-hidden shadow-premium mb-16">
          <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] bg-orange opacity-[0.18] rounded-full" />
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6 relative z-10 border-b border-[rgba(255,255,255,0.1)] pb-8">
            <div>
              <div className="text-[14px] text-[#b8bacb] uppercase tracking-wider font-bold mb-2">Setup</div>
              <div className="font-display font-bold text-[46px] leading-none">
                ₹4,999
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[rgba(255,255,255,0.2)] mx-4"></div>
            <div>
              <div className="text-[14px] text-[#b8bacb] uppercase tracking-wider font-bold mb-2">Subscription</div>
              <div className="font-display font-bold text-[32px] leading-none">
                ₹999<span className="text-[16px] text-[#b8bacb] font-sans font-normal">/month</span>
              </div>
            </div>
          </div>
          
          <ul className="list-none p-0 m-0 mb-8 relative z-10">
            {[
              'The complete platform — every module included, no tiers.',
              'Store completely built & connected by our team',
              'Your branding applied — logo, colours, fonts',
              'Every integration built in (Razorpay, Shiprocket, WhatsApp)',
              'Free .in domain registration',
              'Full admin panel access — edit anytime after',
              '30 days of post-launch support included'
            ].map((item, i) => (
              <li key={i} className="flex gap-3 py-[10px] text-[15.5px] border-b border-[rgba(255,255,255,0.08)] last:border-0 items-start">
                <span className="text-orange font-bold mt-0.5">✓</span> <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-[14px] text-[#b8bacb] bg-[rgba(255,255,255,0.06)] rounded-xl py-4 px-5 mb-8 relative z-10 leading-relaxed">
            A small <strong className="text-white">0.5% + GST platform fee</strong> applies only after your first <strong className="text-white">₹50,000 in lifetime sales</strong>. So there's nothing extra to worry about while you're just starting out.
          </div>
          
          <a href="#" className="block text-center bg-orange text-white font-display font-bold text-[18px] p-[16px] rounded-xl no-underline relative z-10 hover:opacity-90 transition-opacity shadow-premium-sm">
            Get started
          </a>
        </div>

        {/* Detailed Sections */}
        <div className="prose prose-lg max-w-none prose-headings:text-navy prose-h3:text-[22px] prose-h3:mt-12 prose-h3:mb-4 prose-li:my-1 text-navy-soft text-[16px]">
          
          <h3>What you pay elsewhere</h3>
          <p>Real costs, but they are yours and you'd pay them on any platform:</p>
          <ul className="list-disc pl-5">
            <li><strong>Your domain</strong> — bought and renewed by you (if not using the free .in provided).</li>
            <li><strong>Your payment gateway</strong> — Razorpay, Cashfree, PhonePe or PayU, at their standard transaction charges.</li>
            <li><strong>Shiprocket</strong> — their shipping rates.</li>
            <li><strong>WhatsApp Cloud API</strong> — Meta's per-conversation pricing.</li>
          </ul>
          <p>None of it routes through us. Every account stays in your name.</p>

          <h3>Not included in the setup</h3>
          <ul className="list-disc pl-5">
            <li>Custom features beyond the standard store</li>
            <li>Logo design, product photography or copywriting</li>
            <li>Running your ads or managing content</li>
            <li>Ongoing maintenance after the first 30 days (your subscription covers platform access and hosting)</li>
          </ul>
          <p>We quote these separately, per project, only if you want them.</p>

          <h3>Not offered at all</h3>
          <ul className="list-disc pl-5">
            <li>Transferring order history or customer records from another platform</li>
            <li>Filling in your import sheet — the bulk tool is yours to use, but the typing is yours too</li>
            <li>Live training — the admin is built to be picked up without it, and the help pages cover the rest</li>
          </ul>

          <h3>Payment & Billing</h3>
          <p>
            The ₹4,999 setup fee is paid in full at checkout. A GST invoice is emailed with your receipt. Once your store is built and handed over, your ₹999/month subscription mandate will begin. The 0.5% fee is billed separately only once you cross the ₹50,000 lifetime sales threshold.
          </p>
          <p>
            You can cancel your subscription at any time. There is no lock-in.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-surfaceBorder text-center">
          <h2 className="text-[28px] font-bold text-navy mb-6">Look around it before you spend a rupee.</h2>
          <p className="text-[16px] text-navy-soft mb-8 max-w-[500px] mx-auto">
            The demo store is open — no form, no call. Add a product, run the checkout, open the admin. When you have seen enough, start your own.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Get started
            </a>
            <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-navy border border-surfaceBorder font-semibold px-6 py-3 rounded-xl hover:border-navy transition-colors">
              Open the live demo
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
