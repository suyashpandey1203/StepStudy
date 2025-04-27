const fs = require('fs');
const path = require('path');

function printTree(dir, indent = '', depth = 3) {
  if (depth < 0) return;

  const files = fs.readdirSync(dir).filter(f => f !== 'node_modules' && !f.startsWith('.'));
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    console.log(indent + '├── ' + file);
    if (stat.isDirectory()) {
      printTree(fullPath, indent + '│   ', depth - 1);
    }
  }
}

printTree('.', '', Infinity); // change 3 to your desired depth
