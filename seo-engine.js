/**
 * ==========================================================================
 * STRUCTURED METADATA & SCHEMA ENGINE
 * Entity: Mr. Rathore Tech
 * Pillars: C++ 3D Game Engine (EKASHRINGA), Offline-First Local AI, WebGL 3D
 * ==========================================================================
 */

(() => {
  'use strict';

  const now = new Date();
  const currentDateISO = now.toISOString();
  const currentDateYMD = currentDateISO.split('T')[0];
  const currentYear = now.getFullYear();
  const vercelUrl = 'https://mrrathore-tech.vercel.app/';

  const normalizePath = (pathname) => pathname.replace(/index\.html$/i, '').replace(/\/+$/, '/') || '/';

  const siteUrl = () => {
    const origin = window.location.origin;
    if (!origin || origin === 'null' || /^file:/i.test(window.location.href)) return vercelUrl;
    return new URL(normalizePath(window.location.pathname), origin).href;
  };

  const canonical = siteUrl();
  const absolute = (path) => new URL(path, canonical).href;

  const keywords = [
    'Mr. Rathore Tech',
    'EKASHRINGA 3D Engine',
    'Bharatverse Engine',
    'C++20 3D Game Engine',
    'OpenGL Vulkan ECS Engine',
    'Offline-First Local AI',
    'Local LLM Automation',
    'NeuroAI',
    'NETRA AI',
    'RAIN Agent Systems',
    'RathoreScan 3D',
    'MRL 3.2.0',
    'CORE-FLOW',
    'Three.js WebGL Engineering',
    'Custom Software Engineering India',
    'Mahipal Singh Rathore'
  ].join(', ');

  const setMeta = (key, value, attr = 'name') => {
    let node = document.querySelector(`meta[${attr}="${key}"]`);
    if (!node) {
      node = document.createElement('meta');
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.setAttribute('content', value);
  };

  const setSchema = (id, value) => {
    let node = document.getElementById(id);
    if (!node) {
      node = document.createElement('script');
      node.id = id;
      node.type = 'application/ld+json';
      document.head.appendChild(node);
    }
    node.textContent = JSON.stringify(value);
  };

  const metaTitle = `Mr. Rathore Tech | Native C++ 3D Engines, Local AI Systems & Software Engineering (${currentYear})`;
  const metaDescription = `Mr. Rathore Tech engineers the EKASHRINGA C++ 3D game engine, offline-first local AI platforms, RathoreScan 3D, MRL 3.2.0 runtime, and interactive 3D web systems.`;

  document.title = metaTitle;
  setMeta('description', metaDescription);
  setMeta('keywords', keywords);
  setMeta('author', 'Mr. Rathore Tech');
  setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  setMeta('last-modified', currentDateISO);

  setMeta('og:title', metaTitle, 'property');
  setMeta('og:description', metaDescription, 'property');
  setMeta('og:url', canonical, 'property');
  setMeta('og:image', absolute('assets/ekarshinga-hero.png'), 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('og:site_name', 'Mr. Rathore Tech', 'property');
  setMeta('og:updated_time', currentDateISO, 'property');

  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', metaTitle);
  setMeta('twitter:description', metaDescription);
  setMeta('twitter:image', absolute('assets/ekarshinga-hero.png'));

  const canonicalEl = document.getElementById('canonical-link') || document.querySelector('link[rel="canonical"]');
  if (canonicalEl) canonicalEl.href = canonical;

  const softwareProducts = [
    {
      name: 'EKASHRINGA 3D Engine (Bharatverse)',
      alternateName: 'Ekarshinga C++ 3D Game Engine',
      type: 'SoftwareApplication',
      category: 'DeveloperApplication',
      operatingSystem: 'Windows 10, Windows 11 x64',
      version: '0.2.0',
      description: 'Native C++17/20 desktop 3D game engine and visual world editor featuring Entity-Component-System (ECS), physics simulation, mesh editing, OBJ export, and OpenGL/Vulkan pipelines.',
      image: 'assets/ekarshinga-hero.png',
      downloadUrl: 'downloads/BharatverseEngine-Setup-0.2.0-2026.09.28.exe',
      officialUrl: 'https://ekarshinga-engine.netlify.app/',
      docsUrl: 'https://ekarshinga-engine.netlify.app/guide.html'
    },
    {
      name: 'RathoreScan 3D Studio',
      alternateName: 'RathoreScan3D Photogrammetry Studio',
      type: 'SoftwareApplication',
      category: 'MultimediaApplication',
      operatingSystem: 'Linux, Windows, Web Browser (Three.js PWA)',
      version: '1.0.0',
      description: 'Self-hosted 360-degree video-to-3D photogrammetry studio built with C++17 (COLMAP + OpenMVS), Go, and Three.js PWA for Unity and Unreal Engine 5 workflows.',
      image: 'assets/rathorescan3d-shot.jpg',
      officialUrl: 'https://rathorescan3d.vercel.app/',
      docsUrl: 'https://github.com/mrrathoretech602/RathoreScan3D'
    },
    {
      name: 'NeuroAI & NETRA Local AI Suite',
      alternateName: 'NETRA Offline-First AI Workspace',
      type: 'SoftwareApplication',
      category: 'BusinessApplication',
      operatingSystem: 'Windows x64',
      version: '1.0.0',
      description: 'Offline-first local LLM orchestration and document intelligence platform for private Q&A, structured extraction, and local automation.',
      image: 'assets/neuroai-shot.jpg',
      downloadUrl: 'downloads/NeuroAI-Setup-0.0.0-x64.exe',
      url: `${canonical}#products`
    },
    {
      name: 'MRL 3.2.0 Runtime',
      alternateName: 'Multi Runtime Language 3.2.0',
      type: 'SoftwareApplication',
      category: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux',
      version: '3.2.0',
      description: 'Multi-runtime language platform with unified bytecode VM, package resolution, and cross-platform distribution tooling.',
      image: 'assets/mrl-shot.jpg',
      downloadUrl: 'downloads/mrl-windows-x64-setup-3.2.0.exe',
      officialUrl: 'https://mrl-hi.netlify.app/',
      docsUrl: 'https://mrl-hi.netlify.app/docs.html'
    },
    {
      name: 'CORE-FLOW Workspace',
      alternateName: 'CORE-FLOW Desktop Execution Suite',
      type: 'SoftwareApplication',
      category: 'ProductivityApplication',
      operatingSystem: 'Windows x64',
      version: '1.0.0',
      description: 'Structured Windows desktop workspace engineered for deep work intervals, task execution, and local state persistence.',
      image: 'assets/coreflow-shot.jpg',
      downloadUrl: 'downloads/CORE-FLOW-Setup-1.0.0.exe',
      officialUrl: 'https://core-flow-website-offi.netlify.app/',
      docsUrl: 'https://core-flow-website-offi.netlify.app/#use-guide'
    },
    {
      name: 'Thar Frontier (1971)',
      alternateName: 'Thar Frontier: A Soldier\'s Promise',
      type: 'SoftwareApplication',
      category: 'GameApplication',
      operatingSystem: 'WebGL, Windows PC',
      version: '1.0.0',
      description: '2.5D tactical adventure set during the 1971 Battle of Longewala with multi-layer parallax rendering and web/desktop builds.',
      image: 'assets/thar-battle-scene.png',
      officialUrl: 'https://thar-fronteir.vercel.app/',
      docsUrl: 'https://github.com/mr-rathoretech602/Thar-Fronteir'
    },
    {
      name: 'OMNI Desktop Suite',
      alternateName: 'OMNI Productivity Utilities',
      type: 'SoftwareApplication',
      category: 'ProductivityApplication',
      operatingSystem: 'Windows x64',
      version: '0.1.0',
      description: 'Lightweight Windows desktop productivity utilities for rapid note capture and workflow organization.',
      image: 'assets/omni-shot.jpg',
      downloadUrl: 'downloads/OMNI-Setup-0.1.0.exe'
    }
  ];

  setSchema('organization-schema', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mr. Rathore Tech',
    alternateName: ['Mr. Rathore Tech Company', 'Mr. Rathore'],
    url: canonical,
    logo: absolute('assets/logo-512.png'),
    image: absolute('assets/ekarshinga-hero.png'),
    email: 'rathoretecnology@gmail.com',
    description: 'Deep-tech software and systems engineering company building the EKASHRINGA C++ 3D game engine, offline-first local AI platforms, developer runtimes, and interactive 3D web systems.',
    founder: {
      '@type': 'Person',
      name: 'Mahipal Singh Rathore',
      jobTitle: 'Founder & Principal Engineer'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhinmal',
      addressRegion: 'Rajasthan',
      postalCode: '343029',
      addressCountry: 'IN'
    },
    knowsAbout: [
      'C++ 3D Game Engine Architecture',
      'OpenGL and Vulkan Rendering',
      'Entity Component System (ECS)',
      'Offline-First Local AI Platforms',
      'Local LLM Automation',
      'Interactive 3D WebGL and Three.js',
      'Custom Software Engineering'
    ],
    sameAs: [
      'https://github.com/mrrathoretech602',
      'https://www.linkedin.com/in/mr-rathore-759236388/',
      'https://www.youtube.com/@Mr.Rathore-q4o',
      'https://ekarshinga-engine.netlify.app/',
      'https://core-flow-website-offi.netlify.app/',
      'https://mrl-hi.netlify.app/',
      'https://rathorescan3d.vercel.app/'
    ]
  });

  setSchema('website-schema', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mr. Rathore Tech',
    url: canonical,
    description: metaDescription,
    inLanguage: ['en-US', 'en-IN'],
    dateModified: currentDateISO
  });

  setSchema('product-schema', {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Mr. Rathore Tech Platforms & Software',
        itemListElement: softwareProducts.map((p, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: p.name,
          url: p.officialUrl || (p.downloadUrl ? absolute(p.downloadUrl) : p.url)
        }))
      },
      ...softwareProducts.map((p) => ({
        '@type': p.type,
        name: p.name,
        alternateName: p.alternateName,
        applicationCategory: p.category,
        operatingSystem: p.operatingSystem,
        softwareVersion: p.version,
        description: p.description,
        image: absolute(p.image),
        url: p.officialUrl || (p.downloadUrl ? absolute(p.downloadUrl) : p.url),
        downloadUrl: p.downloadUrl ? absolute(p.downloadUrl) : undefined,
        sameAs: [p.officialUrl, p.docsUrl].filter(Boolean),
        publisher: {
          '@type': 'Organization',
          name: 'Mr. Rathore Tech',
          url: canonical
        }
      }))
    ]
  });

  const faqItems = [
    [
      'What core technologies does Mr. Rathore Tech specialize in?',
      'Mr. Rathore Tech specializes in native C++17/20 3D game engine architecture (EKASHRINGA), offline-first local AI platforms and automation, and high-performance WebGL/Three.js web systems.'
    ],
    [
      'Can businesses hire Mr. Rathore Tech for custom builds?',
      'Yes. Businesses partner with Mr. Rathore Tech for custom local AI workflows, interactive 3D web experiences, native desktop applications, and backend automation pipelines.'
    ],
    [
      'How are software downloads packaged and verified?',
      'Official installers and source archives are distributed directly alongside SHA256SUMS.txt so engineering teams can verify integrity prior to installation.'
    ],
    [
      'Do Mr. Rathore Tech AI platforms require constant internet connectivity?',
      'No. Our local AI architecture is designed around offline-first inference and local document indexing so organizations retain full control over proprietary data.'
    ]
  ];

  setSchema('faq-schema', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  });

  setSchema('breadcrumb-schema', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: canonical },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${canonical}#products` },
      { '@type': 'ListItem', position: 3, name: 'Solutions', item: `${canonical}#solutions` },
      { '@type': 'ListItem', position: 4, name: 'Architecture', item: `${canonical}#architecture` },
      { '@type': 'ListItem', position: 5, name: 'Contact', item: `${canonical}#contact` }
    ]
  });

  console.info(`[Mr. Rathore Tech SEO] Metadata & Organization schema synchronized (${currentDateYMD}).`);
})();
