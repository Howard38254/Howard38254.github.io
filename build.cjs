// Rebuild the public homepage after editing template/refined-builder.html.
const fs = require('node:fs');
const path = require('node:path');
const source = path.join(__dirname, 'template', 'refined-builder.html');
let html = fs.readFileSync(source, 'utf8');
html = html.replace(/<div id="template-editor">[\s\S]*?<\/div>(?=<main)/, '');
html = html.replace(/<script>[\s\S]*?<\/script>/g, script => script.includes("getElementById('template-editor')") ? '' : script);
html = html.replace(/ contenteditable="(?:true|false)"/g, '');
html = html.replace('Howard Huang — Refined Builder editable template', 'Howard Huang | Mechanical Engineering Portfolio');
html = html.replace('</head>', '<meta name="description" content="Howard Huang’s mechanical engineering portfolio: UAV research, competition robotics, architected materials, and hands-on design."></head>');
html = html.replace('</body>', '<style>button,a{cursor:pointer}#huang-bold .detail,#huang-bold .nav-panel{min-height:100%;height:auto}#huang-bold .detail-body{overflow-wrap:anywhere}@media(min-width:900px){#huang-bold .refined h1{font-size:100px}#huang-bold .refined .machine{right:120px;transform:scale(1.05) rotate(7deg)}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}</style></body>');
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
fs.writeFileSync(path.join(__dirname, '.nojekyll'), '');
console.log('Public homepage rebuilt.');
