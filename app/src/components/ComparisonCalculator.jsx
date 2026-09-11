import React, { useState } from 'react';

export default function ComparisonCalculator() {
  const [platformCost, setPlatformCost] = useState(1994); // Shopify Basic
  
  const [apps, setApps] = useState([
    { id: 'whatsapp', name: 'WhatsApp campaigns & abandoned cart', eg: 'Interakt, AiSensy, Wati', cost: 2799, checked: true },
    { id: 'reviews', name: 'Customer reviews with photos', eg: 'Judge.me, Loox', cost: 1200, checked: true },
    { id: 'email', name: 'Email & SMS marketing', eg: 'Klaviyo, Omnisend', cost: 1700, checked: true },
    { id: 'pages', name: 'Landing pages / page builder', eg: 'GemPages, PageFly', cost: 2400, checked: false },
    { id: 'cod', name: 'COD verification & pincode checks', eg: 'an Indian COD app', cost: 900, checked: false },
  ]);

  const toggleApp = (index) => {
    const newApps = [...apps];
    newApps[index].checked = !newApps[index].checked;
    setApps(newApps);
  };

  const updateAppCost = (index, value) => {
    const newApps = [...apps];
    newApps[index].cost = Number(value);
    setApps(newApps);
  };

  const totalMonthly = platformCost + apps.filter(a => a.checked).reduce((sum, a) => sum + a.cost, 0);
  const storebayMonthlyCost = 999;

  return (
    <section className="py-[clamp(60px,8vw,100px)]">
      <div className="max-w-[1000px] mx-auto px-[22px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
          
          {/* Left Text */}
          <div className="lg:sticky lg:top-[100px]">
            <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
              The bill you are paying now
            </div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.15] mb-[18px]">
              Add up what the plan doesn't include.
            </h2>
            <p className="text-[16px] text-navy-soft leading-relaxed mb-[18px]">
              The subscription is the small part. The apps for the things a store needs anyway each arrive with a bill of their own, and they all keep arriving. Every row on the right is already inside Storebay.
            </p>
            <p className="text-[14px] text-ink-muted">
              Shopify Basic is its published Indian price. The app figures are their list prices; change any to what you were quoted.
            </p>
          </div>

          {/* Right Calculator */}
          <div className="bg-white border border-surfaceBorder rounded-2xl shadow-premium overflow-hidden">
            <div className="bg-bgSoft px-6 py-5 border-b border-surfaceBorder flex justify-between items-center">
              <span className="font-semibold text-navy">Your monthly bill</span>
              <span className="text-[11px] font-bold tracking-wide uppercase bg-orange/10 text-orange-dark px-2.5 py-1 rounded-full">
                Storebay includes all apps
              </span>
            </div>
            
            <div className="p-6">
              {/* Platform Plan */}
              <div className="mb-6 pb-6 border-b border-surfaceBorder">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <label className="block text-[14.5px] font-semibold text-navy">Your platform plan</label>
                    <span className="text-[12.5px] text-ink-muted">Shopify Basic, India</span>
                  </div>
                  <div className="flex items-center text-[15px] font-medium">
                    <span className="mr-1">₹</span>
                    <input 
                      type="number" 
                      value={platformCost}
                      onChange={(e) => setPlatformCost(Number(e.target.value))}
                      className="w-[80px] border border-surfaceBorder rounded bg-bgSoft px-2 py-1 text-right focus:outline-none focus:border-orange transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Apps */}
              <div className="flex flex-col gap-4 mb-8">
                {apps.map((app, idx) => (
                  <div key={app.id} className="flex justify-between items-start gap-4">
                    <div className="flex gap-3">
                      <input 
                        type="checkbox" 
                        checked={app.checked}
                        onChange={() => toggleApp(idx)}
                        className="mt-1 w-4 h-4 accent-orange cursor-pointer"
                      />
                      <div>
                        <label className={`block text-[14px] cursor-pointer ${app.checked ? 'text-navy font-medium' : 'text-ink-muted'}`} onClick={() => toggleApp(idx)}>
                          {app.name}
                        </label>
                        <span className="text-[12px] text-ink-muted block mt-0.5">{app.eg}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-[14px] font-medium opacity-80">
                      <span className="mr-1">₹</span>
                      <input 
                        type="number" 
                        value={app.cost}
                        onChange={(e) => updateAppCost(idx, e.target.value)}
                        disabled={!app.checked}
                        className={`w-[70px] border border-transparent hover:border-surfaceBorder rounded px-1.5 py-0.5 text-right focus:outline-none focus:bg-bgSoft focus:border-surfaceBorder transition-colors ${!app.checked && 'opacity-50'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="bg-navy rounded-xl p-5 text-white shadow-inner">
                <div className="flex justify-between items-center mb-3 text-[14px] text-[rgba(255,255,255,0.7)]">
                  <span>Total, every month</span>
                  <strong className="text-[18px] text-white font-display tracking-tight">₹{totalMonthly.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between items-center mb-4 text-[14px] text-[rgba(255,255,255,0.7)]">
                  <span>Storebay, every month</span>
                  <strong className="text-[18px] text-white font-display tracking-tight">₹{storebayMonthlyCost.toLocaleString()}</strong>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 mt-2">
                  <div className="text-[13.5px] text-[rgba(255,255,255,0.7)] text-center">
                    Plus a one-time <b className="text-white">₹4,999</b> setup fee. We build the store for you.
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
