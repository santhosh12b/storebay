const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, 'src', 'data', 'articlesContent.json'),
  path.join(__dirname, 'src', 'fix-docs.js'),
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace all instances of the old URL with the new one
    content = content.replace(/https:\/\/storebay\.in/g, 'https://storebay-two.vercel.app');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log("Done! All help links have been updated.");
