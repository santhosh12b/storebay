import React from 'react';
import adminImg from '../assets/admin.webp';
import whatsappImg from '../assets/whatsapp.webp';
import apiImg from '../assets/api.webp';

export default function DayInLife() {
  const chapters = [
    {
      time: '08:40',
      title: 'The morning numbers.',
      desc: 'Revenue, paid orders, abandoned carts and the last fortnight on one screen. Nothing to export, nothing to reconcile.',
      url: 'yourbrand.in/admin/',
      img: adminImg
    },
    {
      time: '09:15',
      title: 'A customer asks where her order is.',
      desc: 'WhatsApp and Instagram messages land in one inbox, next to her orders. You answer from the same screen, with the order number already in front of you.',
      url: 'yourbrand.in/admin/conversations/',
      img: whatsappImg
    },
    {
      time: '19:20',
      title: 'API Integrations',
      desc: 'Manage API keys for mail, payment gateways, and delivery partners.',
      url: 'yourbrand.in/admin/integrations/',
      img: apiImg
    }
  ];

  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-bgSoft">
      <div className="max-w-[1000px] mx-auto px-[22px]">
        
        <div className="text-center max-w-[600px] mx-auto mb-[60px]">
          <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
            A day on Storebay
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-[1.15] mb-[18px]">
            Not a feature list. A Tuesday.
          </h2>
          <p className="text-[16px] text-navy-soft leading-relaxed">
            Six screens from the admin, in the order a store owner meets them. Every one is a real screenshot of the software you would be buying, showing the demo store's data.
          </p>
        </div>

        <div className="flex flex-col gap-[80px] lg:gap-[120px]">
          {chapters.map((ch, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:grid-cols-[1fr_400px] lg:dir-rtl' : 'lg:grid-cols-[400px_1fr]'}`}>
              
              {/* Text Side */}
              <div className={idx % 2 !== 0 ? 'dir-ltr lg:order-2' : ''}>
                <div className="inline-block font-display font-bold text-[18px] bg-orange text-white px-3 py-1 rounded-lg shadow-sm mb-4">
                  {ch.time}
                </div>
                <h3 className="text-[24px] md:text-[28px] leading-[1.2] mb-3">
                  {ch.title}
                </h3>
                <p className="text-[15.5px] text-navy-soft leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              {/* Image Side (Mockup) */}
              <div className={idx % 2 !== 0 ? 'dir-ltr lg:order-1' : ''}>
                <div className="relative shadow-premium rounded-xl overflow-hidden bg-white border border-surfaceBorder">
                  <div className="bg-bgSoft border-b border-surfaceBorder flex items-center px-4 py-2.5 gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex-1 text-center pr-10">
                      <span className="bg-white px-8 py-1 rounded text-[11px] text-ink-muted border border-surfaceBorder font-medium">
                        {ch.url}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFC] w-full flex flex-col">
                    {ch.img ? (
                      <img src={ch.img} alt={ch.title} className="w-full h-auto object-cover" />
                    ) : (
                      <div className="aspect-[4/3] p-6 w-full">
                        <div className="text-[14px] text-ink-muted text-center border-2 border-dashed border-gray-300 w-full h-full flex items-center justify-center rounded-lg">
                          [ Image Space: {ch.title} ]
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-[80px] text-center flex flex-col items-center justify-center gap-4">
          <a href="#features" className="inline-block font-sans font-semibold text-[15px] text-navy bg-transparent border border-surfaceBorder py-[12px] px-[24px] rounded-xl hover:bg-gray-100 transition-colors">
            Every module, listed
          </a>
          <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="text-[14.5px] font-medium text-orange hover:text-orange-dark transition-colors">
            Or open the demo and click around &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
