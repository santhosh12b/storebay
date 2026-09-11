import React from 'react';
import { LineChart, MessageCircle, ShoppingCart, UploadCloud, PieChart, Package } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      title: "The morning numbers.",
      desc: "Revenue, paid orders, abandoned carts and the last fortnight on one screen. Nothing to export, nothing to reconcile.",
      icon: <LineChart className="text-gosell-green" size={24} />,
      time: "09:00 AM"
    },
    {
      title: "A customer asks where her order is.",
      desc: "WhatsApp and Instagram messages land in one inbox, next to her orders. You answer from the same screen, with the order number already in front of you.",
      icon: <MessageCircle className="text-gosell-green" size={24} />,
      time: "10:15 AM"
    },
    {
      title: "Last night's abandoned carts.",
      desc: "A WhatsApp nudge and two emails compete for every abandoned cart, and the store sends more traffic to whichever recovers most.",
      icon: <ShoppingCart className="text-gosell-green" size={24} />,
      time: "11:30 AM"
    },
    {
      title: "New stock arrives as a spreadsheet.",
      desc: "One sheet, one upload. Match its columns to ours on screen and the import runs in the background while you get on with something else.",
      icon: <UploadCloud className="text-gosell-green" size={24} />,
      time: "02:00 PM"
    },
    {
      title: "Which ads actually paid.",
      desc: "Paid orders by source against the spend you logged. Instagram at 1.81×, TikTok at 0.84×. The one losing money is easy to spot.",
      icon: <PieChart className="text-gosell-green" size={24} />,
      time: "04:45 PM"
    },
    {
      title: "The order ships.",
      desc: "The Razorpay reference, the address, and one button that pushes the order to Shiprocket. The label prints from here; the tracking link reaches the customer on WhatsApp.",
      icon: <Package className="text-gosell-green" size={24} />,
      time: "05:30 PM"
    }
  ];

  return (
    <section className="py-24 bg-gosell-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Not a feature list. A Tuesday.</h2>
          <p className="text-lg text-gosell-text/70">
            Six screens from the admin, in the order a store owner meets them. Real software designed for running a brand, not just building a webpage.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-gosell-border shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-gosell-bg border border-gosell-border p-4 rounded-xl shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <span className="text-xs font-mono font-medium text-gosell-text/40 bg-gray-100 px-2 py-1 rounded-md">{step.time}</span>
                </div>
                <p className="text-gosell-text/70 text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
