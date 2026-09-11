const https = require('https');
const fs = require('fs');

const extractLinks = () => {
  return [
    { slug: 'first-steps', url: 'https://gosell.in/docs/first-steps/' },
    { slug: 'settings', url: 'https://gosell.in/docs/settings/' },
    { slug: 'payments', url: 'https://gosell.in/docs/payments/' },
    { slug: 'shipping', url: 'https://gosell.in/docs/shipping/' },
    { slug: 'appearance', url: 'https://gosell.in/docs/appearance/' },
    { slug: 'products', url: 'https://gosell.in/docs/products/' },
    { slug: 'import', url: 'https://gosell.in/docs/import/' },
    { slug: 'categories', url: 'https://gosell.in/docs/categories/' },
    { slug: 'reviews', url: 'https://gosell.in/docs/reviews/' },
    { slug: 'orders', url: 'https://gosell.in/docs/orders/' },
    { slug: 'shipments', url: 'https://gosell.in/docs/shipments/' },
    { slug: 'customers', url: 'https://gosell.in/docs/customers/' },
    { slug: 'coupons', url: 'https://gosell.in/docs/coupons/' },
    { slug: 'reports', url: 'https://gosell.in/docs/reports/' },
    { slug: 'integrations', url: 'https://gosell.in/docs/integrations/' },
    { slug: 'razorpay', url: 'https://gosell.in/docs/razorpay/' },
    { slug: 'cashfree', url: 'https://gosell.in/docs/cashfree/' },
    { slug: 'phonepe', url: 'https://gosell.in/docs/phonepe/' },
    { slug: 'payu', url: 'https://gosell.in/docs/payu/' },
    { slug: 'shiprocket', url: 'https://gosell.in/docs/shiprocket/' },
    { slug: 'email-smtp', url: 'https://gosell.in/docs/email-smtp/' },
    { slug: 'meta-whatsapp', url: 'https://gosell.in/docs/meta-whatsapp/' },
    { slug: 'instagram', url: 'https://gosell.in/docs/instagram/' },
    { slug: 'tracking', url: 'https://gosell.in/docs/tracking/' },
    { slug: 'ai-setup', url: 'https://gosell.in/docs/ai-setup/' },
    { slug: 'storage', url: 'https://gosell.in/docs/storage/' },
    { slug: 'mcp', url: 'https://gosell.in/docs/mcp/' },
    { slug: 'recovery', url: 'https://gosell.in/docs/recovery/' },
    { slug: 'campaigns', url: 'https://gosell.in/docs/campaigns/' },
    { slug: 'whatsapp', url: 'https://gosell.in/docs/whatsapp/' },
    { slug: 'ai', url: 'https://gosell.in/docs/ai/' },
    { slug: 'self-hosting', url: 'https://gosell.in/docs/self-hosting/' },
    { slug: 'maintenance', url: 'https://gosell.in/docs/maintenance/' },
    { slug: 'pages', url: 'https://gosell.in/docs/pages/' },
    { slug: 'seo', url: 'https://gosell.in/docs/seo/' },
    { slug: 'domain', url: 'https://gosell.in/docs/domain/' },
  ];
};

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

const parseContent = (html, slug) => {
  // Very basic extraction of the main content area based on typical article structures.
  // This will extract the raw HTML of the article body to be injected via dangerouslySetInnerHTML
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  
  if (!mainMatch) {
    return "<p>Content could not be parsed for this article.</p>";
  }
  
  let content = mainMatch[1];
  
  // Clean up the extracted HTML slightly to remove scripts/styles if any exist in the body
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // We'll clean up the header/h1 since our HelpArticle component renders its own Title and Desc
  content = content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '');

  // Convert typical classnames to Tailwind if necessary, though basic HTML will render fine
  return content.trim();
};

async function run() {
  console.log("Starting scraper...");
  const links = extractLinks();
  const articlesData = {};
  
  for (const link of links) {
    console.log(`Fetching ${link.slug}...`);
    try {
      const html = await fetchUrl(link.url);
      const content = parseContent(html, link.slug);
      
      articlesData[link.slug] = content;
      
      // Delay to be polite
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`Failed to fetch ${link.slug}:`, err.message);
    }
  }
  
  fs.writeFileSync('src/data/articlesContent.json', JSON.stringify(articlesData, null, 2));
  console.log("Scraping complete. Data saved to src/data/articlesContent.json");
}

run();
