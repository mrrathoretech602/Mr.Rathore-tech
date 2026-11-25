const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const mustBePresent = [
  'assets/vendor/three.min.js',
  'assets/vendor/gsap.min.js',
  'id="cute-cursor-container"',
  'Mr. Rathore Tech Company',
  'NETRA AI',
  'RAIN AI',
  'CORE-FLOW',
  'MRL 3.2',
  'Ekarshinga',
  'seo-engine.js'
];

const mustBeAbsent = [
  'mahadev-cv.css',
  'mahadev-cv.js',
  'id="mahadev-cv-top"',
  'id="cv-printable-modal"',
  'ramhipalsingh602@gmail.com',
  'id="website-pricing-engine"',
  'id="conversion-engine"',
  'id="wa-floating-container"',
  'Transparent Website Pricing Packages',
  'Build Your High-Converting Website'
];

let allPassed = true;

console.log('--- Checking Required Elements ---');
for (const item of mustBePresent) {
  if (html.includes(item)) {
    console.log('✓ Found required:', item);
  } else {
    console.error('✗ Missing required:', item);
    allPassed = false;
  }
}

console.log('\n--- Checking Clean Removal of Personal Info, CV & Pricing ---');
for (const item of mustBeAbsent) {
  if (!html.includes(item)) {
    console.log('✓ Cleanly removed (absent):', item);
  } else {
    console.error('✗ Leaked element still present:', item);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n=============================================');
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
  console.log('=============================================');
} else {
  process.exit(1);
}
