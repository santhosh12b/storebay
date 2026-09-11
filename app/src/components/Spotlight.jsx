import React from 'react';

export default function Spotlight() {
  return (
    <div className="max-w-[680px] mx-auto px-[22px] py-[56px]">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-[260px] bg-[linear-gradient(155deg,#FAFAFC_0%,#F0EFF3_100%)] rounded-[18px] p-[26px] shadow-premium relative">
          <div className="text-orange text-[16px] mb-2.5">★★★★★</div>
          <div className="font-display text-[15px] font-medium text-navy mb-3.5 leading-[1.4]">
            "Loved the quality — packaging was excellent too!"
          </div>
          <div className="text-[12px] text-ink-muted mb-3.5">
            — Priya, Chennai · Verified Purchase
          </div>
          <div className="flex justify-between items-center border-t border-surfaceBorder pt-3">
            <div className="font-display font-bold text-[13px]">Your Store</div>
            <div className="text-[10px] text-ink-muted">via storebay.in</div>
          </div>
          <div className="absolute -bottom-3.5 right-[18px] bg-navy text-white text-[11.5px] font-semibold py-[7px] px-3.5 rounded-[20px] shadow-premium-sm">
            ⬇ Download
          </div>
        </div>
        <div className="text-center max-w-[420px]">
          <h3 className="text-[20px] mb-2">Turn every good review into a post.</h3>
          <p className="text-[14.5px] text-ink-muted">
            One tap downloads a clean, branded photo card from any review — ready to share straight to your Instagram Stories or feed. Free social proof, generated automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
