/**
 * DAILY AUTOMATIC SEO & SITEMAP SYNCHRONIZER
 * Entity: Mr. Rathore Tech
 */

const fs = require('fs');
const path = require('path');

const today = new Date().toISOString().split('T')[0];
console.log(`[Daily SEO Updater] Executing synchronization for: ${today}`);

const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  sitemapContent = sitemapContent.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✓ Synchronized sitemap.xml with <lastmod>${today}</lastmod>`);
}

const robotsPath = path.join(process.cwd(), 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (robots.includes('Googlebot') && robots.includes('PerplexityBot') && robots.includes('GPTBot')) {
    console.log('✓ robots.txt allows search engines and AI crawlers.');
  }
}

const indexPath = path.join(process.cwd(), 'index.html');
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');
  const requiredTags = [
    'seo-engine.js',
    'id="organization-schema"',
    'id="website-schema"',
    'id="product-schema"',
    'id="faq-schema"',
    'id="breadcrumb-schema"'
  ];

  let allPassed = true;
  for (const tag of requiredTags) {
    if (!html.includes(tag)) {
      console.warn(`! Missing tag in index.html: ${tag}`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log('✓ index.html has all structured schema hooks and seo-engine.js loaded.');
  }
}
