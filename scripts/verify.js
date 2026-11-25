const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const mustBePresent = [
  'Mr. Rathore Tech',
  'EKASHRINGA 3D Engine',
  'Mahipal Singh Rathore',
  'Founder &amp; Principal Engineer',
  'rathoretecnology@gmail.com',
  'https://github.com/mrrathoretech602',
  'https://www.youtube.com/@Mr.Rathore-q4o',
  'https://www.linkedin.com/in/mr-rathore-759236388/',
  'id="organization-schema"',
  'seo-engine.js',
  'id="contact-form"',
  '&copy; 2026 Mr. Rathore Tech. All rights reserved.'
];

const mustBeAbsent = [
  'cute-cursor-container',
  'cute-animal-switcher',
  '100+ categories',
  '100+ languages',
  'Hire me',
  'I am a developer',
  'My skills',
  'Lorem ipsum',
  'three.min.js',
  'gsap.min.js'
];

let allPassed = true;

console.log('--- Checking Required Enterprise Elements ---');
for (const item of mustBePresent) {
  if (html.includes(item)) {
    console.log('✓ Found required:', item);
  } else {
    console.error('✗ Missing required:', item);
    allPassed = false;
  }
}

console.log('\n--- Checking Removal of Legacy / Hype / Dead Elements ---');
for (const item of mustBeAbsent) {
  if (!html.includes(item)) {
    console.log('✓ Cleanly absent:', item);
  } else {
    console.error('✗ Legacy/hype element still present:', item);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\nALL VERIFICATION CHECKS PASSED!');
} else {
  process.exit(1);
}
