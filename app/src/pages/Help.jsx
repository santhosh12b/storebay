import React from 'react';
import { Link } from 'react-router-dom';
import { helpNav } from '../data/helpNav';

export default function Help() {
  const sections = helpNav;

  return (
    <>
      <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange mb-4">
          Help
        </div>
        <h1 className="text-[clamp(2rem,4.4vw,2.9rem)] leading-[1.1] my-[18px]">
          Running your store.
        </h1>
        <p className="text-[17px] text-navy-soft mt-4">
          Setting StoreBay up, adding your catalog, taking orders and getting people back. Written for
          whoever runs the shop. If something here is wrong or missing, tell us — that is a bug
          in the docs.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-[22px] pb-[80px]">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-[18px] font-bold text-navy mb-4">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.links.map((link, lIdx) => (
                <Link 
                  key={lIdx} 
                  to={link.slug ? `/help/${link.slug}` : "#"} 
                  className={`block bg-white border border-surfaceBorder rounded-lg p-5 no-underline transition-all hover:border-blue-600 hover:shadow-sm group ${!link.slug && 'opacity-70 cursor-not-allowed hover:border-surfaceBorder hover:shadow-none'}`}
                >
                  <b className="block font-sans font-bold text-navy text-[15px] mb-2">
                    {link.title}
                  </b>
                  <span className="block text-ink-muted text-[13.5px] leading-snug">
                    {link.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
