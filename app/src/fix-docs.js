import fs from 'fs';

const helpNav = [
  {
    title: 'Setting up',
    links: [
      { title: 'First steps', desc: 'What to do the day you get your store, in order.', slug: 'first-steps' },
      { title: 'Store settings', desc: 'Business details, currency, tax, and the basics every order depends on.', slug: 'settings' },
      { title: 'Taking payments', desc: 'Choosing a gateway, prepaid and COD.', slug: 'payments' },
      { title: 'Shipping', desc: 'Zones, rates, weights and connecting Shiprocket.', slug: 'shipping' },
      { title: 'Look and feel', desc: 'Logo, fonts, colours, header and footer.', slug: 'appearance' }
    ]
  },
  {
    title: 'Your catalog',
    links: [
      { title: 'Products', desc: 'Adding products, variants, images, pricing and stock.', slug: 'products' },
      { title: 'Importing a catalog', desc: 'Loading products from a spreadsheet, and changing prices or stock in bulk.', slug: 'import' },
      { title: 'Categories and attributes', desc: 'Organising the catalog so people can find things.', slug: 'categories' },
      { title: 'Reviews', desc: 'Collecting and moderating customer reviews.', slug: 'reviews' }
    ]
  },
  {
    title: 'Selling',
    links: [
      { title: 'Orders', desc: 'The order lifecycle, from placed to delivered.', slug: 'orders' },
      { title: 'Shipments and tracking', desc: 'Booking couriers, labels, pickups and RTO.', slug: 'shipments' },
      { title: 'Customers', desc: 'The customer record, and how one person is one record.', slug: 'customers' },
      { title: 'Discount codes', desc: 'Percentage, flat, free shipping and conditional rules.', slug: 'coupons' },
      { title: 'Reports', desc: 'Sales, traffic, attribution and what to watch.', slug: 'reports' }
    ]
  },
  {
    title: 'Integrations',
    links: [
      { title: 'How integrations work', desc: 'Credentials, test buttons, webhooks and what to connect first.', slug: 'integrations' },
      { title: 'Razorpay', desc: 'Keys, the webhook, and going live.', slug: 'razorpay' },
      { title: 'Cashfree', desc: 'App ID, secret and the webhook.', slug: 'cashfree' },
      { title: 'PhonePe', desc: 'Merchant ID, salt key and index.', slug: 'phonepe' },
      { title: 'PayU', desc: 'Merchant key, salt and the webhook.', slug: 'payu' },
      { title: 'Shiprocket', desc: 'Account, pickup location, dimensions and tracking.', slug: 'shiprocket' },
      { title: 'Resender', desc: 'Sending order confirmations and marketing email.', slug: 'email-smtp' },
      { title: 'WhatsApp Cloud API', desc: 'Meta app, permanent token, webhook and templates.', slug: 'meta-whatsapp' },
      { title: 'Meta Pixel and GA4', desc: 'Conversion tracking for your storefront.', slug: 'tracking' },
      { title: 'Storage and CDN', desc: 'Moving images off the server and serving them fast.', slug: 'storage' }
    ]
  },
  {
    title: 'Growth',
    links: [
      { title: 'Abandoned cart recovery', desc: 'Sending WhatsApps and emails when people leave without paying.', slug: 'recovery' },
      { title: 'Broadcast campaigns', desc: 'Broadcasting messages to your customers.', slug: 'campaigns' },
      { title: 'WhatsApp', desc: 'The shared inbox for answering customers where they are.', slug: 'whatsapp' }
    ]
  },
  {
    title: 'Self-hosting',
    links: [
      { title: 'Installing on your own server', desc: 'Requirements, install, cron and going live, if you host it yourself.', slug: 'self-hosting' },
      { title: 'Backups and updates', desc: 'Keeping a self-hosted store safe and current.', slug: 'maintenance' }
    ]
  },
  {
    title: 'Your storefront',
    links: [
      { title: 'Pages and navigation', desc: 'Building pages from sections, and your menus.', slug: 'pages' },
      { title: 'Your domain', desc: 'Pointing a domain at your store and getting HTTPS.', slug: 'domain' }
    ]
  }
];

const flatLinks = helpNav.flatMap(group => group.links);

function generateSidebar(currentSlug) {
  let html = `<aside class="doc-nav" aria-label="Help contents">\n    <a class="doc-home" href="https://storebay-two.vercel.app/help/">Help</a>\n`;
  helpNav.forEach(group => {
    html += `          <div class="doc-group">${group.title}</div>\n`;
    group.links.forEach(link => {
      if (link.slug === currentSlug) {
        html += `              <a href="https://storebay-two.vercel.app/help/${link.slug}/" aria-current="page">${link.title}</a>\n`;
      } else {
        html += `              <a href="https://storebay-two.vercel.app/help/${link.slug}/">${link.title}</a>\n`;
      }
    });
  });
  html += `            </aside>`;
  return html;
}

function generateMoreNav(currentSlug) {
  const currentIndex = flatLinks.findIndex(l => l.slug === currentSlug);
  let html = `<nav class="doc-more" aria-label="More chapters">\n`;
  
  if (currentIndex > 0) {
    const prev = flatLinks[currentIndex - 1];
    html += `                  <a href="https://storebay-two.vercel.app/help/${prev.slug}/"><span>Previous</span><b>${prev.title}</b></a>\n`;
  } else {
    html += `        <span></span>`;
  }
  
  if (currentIndex < flatLinks.length - 1 && currentIndex !== -1) {
    const next = flatLinks[currentIndex + 1];
    html += `                          <a class="next" href="https://storebay-two.vercel.app/help/${next.slug}/"><span>Next</span><b>${next.title}</b></a>\n`;
  }
  
  html += `              </nav>`;
  return html;
}

const p = 'c:/xampp/htdocs/storebay/app/src/data/articlesContent.json';
let data = JSON.parse(fs.readFileSync(p, 'utf8'));

for (let key in data) {
  let html = data[key];
  
  // Replace the <aside> block
  const asideRegex = /<aside class="doc-nav".*?<\/aside>/s;
  if (asideRegex.test(html)) {
    html = html.replace(asideRegex, generateSidebar(key));
  }
  
  // Replace the <nav class="doc-more"> block
  const navRegex = /<nav class="doc-more".*?<\/nav>/s;
  if (navRegex.test(html)) {
    html = html.replace(navRegex, generateMoreNav(key));
  }
  
  // Replace all other old docs links within the body
  html = html.replace(/https:\/\/storebay\.in\/docs\//g, 'https://storebay-two.vercel.app/help/');
  
  data[key] = html;
}

fs.writeFileSync(p, JSON.stringify(data, null, 2));
console.log('Successfully updated articlesContent.json');
