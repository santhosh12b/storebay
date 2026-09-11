import React from 'react';

const Manifesto = () => {
  return (
    <section className="py-24 bg-white border-y border-gosell-border">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Fit */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold mb-8">Brands that sell, and brands about to.</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-gosell-green shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">You are launching a brand and want a store that is finished on day one: payments, WhatsApp, COD and shipping already wired in, instead of a free plan whose bill grows as you do.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-gosell-green shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">You run a D2C store on Shopify, Wix, Dukaan or WooCommerce, and pay for three or more apps on top of the plan.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-gosell-green shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">WhatsApp is where your customers actually talk to you, and you want it inside the store, not bolted on beside it.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-gosell-green shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">You ship across India with COD, and whether a pincode is serviceable matters at checkout.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-gosell-green shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">You want the code and the data in your own hands, so nobody can raise the rent.</p>
            </li>
          </ul>
        </div>

        {/* Not Fit */}
        <div className="mb-24">
          <h2 className="text-3xl font-extrabold mb-8">Not everyone, and we would rather say so.</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">A marketplace with many sellers. Storebay is one brand, one store.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">A business that does not sell physical goods to customers in India. It is built around COD, pincodes, GST invoices and Indian gateways.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2"></span>
              <p className="text-gosell-text/80 text-lg">Somebody who needs a bespoke feature by next week. Custom work is quoted separately and takes its own time.</p>
            </li>
          </ul>
        </div>

        {/* Manifesto Quote */}
        <div className="bg-gosell-bg p-8 md:p-12 rounded-2xl border border-gosell-border shadow-sm">
          <h3 className="text-2xl font-bold mb-6">We are paid once. That changes what gets built.</h3>
          <div className="space-y-4 text-gosell-text/80 text-lg leading-relaxed">
            <p>
              A subscription platform earns more the longer you stay and the more apps you add, so it is built to keep you there. We are paid at the start, once. The only way that works for us is to hand over a finished store and get out of your way.
            </p>
            <p>
              That is why every module is included: a tier we could hold back would make us a landlord again. It is why the source code and the database are yours: if we vanished tomorrow, you would move it to any PHP host and carry on. And it is why the demo is open without a form. The software has to sell itself, because we will not be on the phone every month.
            </p>
          </div>
          <div className="mt-8 font-heading font-bold text-gosell-green">— Storebay</div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;
