const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'src', 'data', 'articlesContent.json');
let data = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

// Delete removed modules
delete data['instagram'];
delete data['mcp'];
delete data['ai'];
delete data['ai-setup'];
delete data['seo'];

// Update tracking (remove CAPI)
if (data['tracking']) {
  data['tracking'].title = 'Meta Pixel and GA4';
  data['tracking'].content = data['tracking'].content.replace(/CAPI/g, '');
  // Quick and dirty clean up of any CAPI specific paragraphs if any, but since it's just HTML string,
  // let's just do a basic replace. We can refine if needed.
}

// Update campaigns (remove journeys)
if (data['campaigns']) {
  data['campaigns'].title = 'Broadcast campaigns';
  // simple replace
  data['campaigns'].content = data['campaigns'].content.replace(/and journeys/gi, '');
}

// Update whatsapp (remove instagram)
if (data['whatsapp']) {
  data['whatsapp'].title = 'WhatsApp';
  data['whatsapp'].content = data['whatsapp'].content.replace(/and Instagram/gi, '');
}

fs.writeFileSync(contentPath, JSON.stringify(data, null, 2));
console.log('Cleaned articlesContent.json');
