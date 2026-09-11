const fs = require('fs');

const html = fs.readFileSync('features.html', 'utf-8');

const modules = [];

let result = [];
const mods = html.split('<div class="mod"');
mods.shift(); // remove first part before any mod

for (let i = 0; i < mods.length; i++) {
  const m = mods[i];
  
  // id
  const idMatch = m.match(/id="([^"]+)"/);
  const id = idMatch ? idMatch[1] : '';

  // num
  const numMatch = m.match(/<span class="mod-num">([^<]+)<\/span>/);
  const num = numMatch ? numMatch[1] : '';

  // title
  const titleMatch = m.match(/<h2>(.*?)<\/h2>/);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : '';

  // desc
  const descMatch = m.match(/<p>([\s\S]*?)<\/p>/);
  let desc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ').replace(/&mdash;/g, '—') : '';

  // specs
  const specs = [];
  const specsSection = m.split('<div class="spec">')[1];
  if (specsSection) {
    const specDivs = specsSection.split('<div>');
    specDivs.shift(); // remove first empty or prefix
    for (const sd of specDivs) {
      if (!sd.includes('<b>')) continue;
      const tMatch = sd.match(/<b>(.*?)<\/b>/);
      const dMatch = sd.match(/<span>(.*?)<\/span>/);
      
      let t = tMatch ? tMatch[1].replace(/<[^>]+>/g, '').trim().replace(/&amp;/g, '&') : '';
      let d = dMatch ? dMatch[1].replace(/<[^>]+>/g, '').trim().replace(/&amp;/g, '&') : '';
      
      specs.push({ title: t, desc: d });
    }
  }

  modules.push({ id, num, title, desc, specs });
}

fs.writeFileSync('parsed_features.json', JSON.stringify(modules, null, 2));
console.log('Parsed ' + modules.length + ' modules');
