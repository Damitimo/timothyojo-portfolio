const fs = require('fs')
const path = require('path')

// Simple template engine
function buildSite() {
  // Read content files
  const aboutContent = fs.readFileSync('./content/about.md', 'utf8')
  
  // Read HTML template
  let html = fs.readFileSync('./index.html', 'utf8')
  
  // Replace placeholders
  html = html.replace('{{about-content}}', aboutContent)
  
  // Write output
  fs.writeFileSync('./dist/index.html', html)
  console.log('Site built successfully!')
}

buildSite()
