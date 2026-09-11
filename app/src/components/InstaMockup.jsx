import React from 'react';

export default function InstaMockup() {
  return (
    <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
      <div className="text-center max-w-[480px] mx-auto mb-[34px]">
        <div className="text-[12.5px] font-semibold tracking-[2px] uppercase text-orange">
          Homepage, automatically
        </div>
        <h2 className="text-[28px] my-2">Your last few posts, right on your store.</h2>
        <p className="text-[15px] text-ink-muted">
          No copy-pasting, no manual uploads — your homepage always looks current.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1.5 max-w-[340px] mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square rounded-[10px] bg-[linear-gradient(135deg,#ddd,#eee)] flex items-center justify-center text-[18px] text-[#bbb]">
            📷
          </div>
        ))}
      </div>
    </div>
  );
}
