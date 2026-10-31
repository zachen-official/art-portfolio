import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "public", "artworks");
mkdirSync(dir, { recursive: true });

function write(name, svg) {
  writeFileSync(join(dir, name), svg.trim() + "\n");
}

write(
  "quiet-horizons.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="Quiet Horizons placeholder">
  <defs>
    <linearGradient id="qh-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F4E2C5"/>
      <stop offset="38%" stop-color="#D7E6EF"/>
      <stop offset="72%" stop-color="#A9C4B0"/>
      <stop offset="100%" stop-color="#7F9B86"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#qh-sky)"/>
  <ellipse cx="1180" cy="220" rx="90" ry="90" fill="#F7E7C3" opacity="0.85"/>
  <ellipse cx="1180" cy="220" rx="140" ry="140" fill="#F7E7C3" opacity="0.18"/>
  <path d="M0 430 C 280 390, 420 470, 640 430 C 900 380, 1100 460, 1600 400 L 1600 1000 L 0 1000 Z" fill="#C9D7C2" opacity="0.7"/>
  <path d="M0 560 C 220 520, 480 600, 760 540 C 1040 480, 1280 580, 1600 520 L 1600 1000 L 0 1000 Z" fill="#8FA88A"/>
  <path d="M0 720 C 300 680, 520 760, 820 710 C 1120 660, 1360 740, 1600 700 L 1600 1000 L 0 1000 Z" fill="#5E7462"/>
  <path d="M0 860 C 400 840, 800 900, 1600 850 L 1600 1000 L 0 1000 Z" fill="#3F5346"/>
</svg>`,
);

write(
  "organic-forms.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="Organic Forms placeholder">
  <rect width="1200" height="1200" fill="#E8F0EA"/>
  <style>
    .og { transform-origin: 600px 600px; animation: spin 18s linear infinite; }
    .og2 { transform-origin: 600px 620px; animation: spin 26s linear infinite reverse; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { .og, .og2 { animation: none; } }
  </style>
  <ellipse class="og" cx="600" cy="600" rx="280" ry="360" fill="#9BB8A8" opacity="0.7"/>
  <ellipse class="og2" cx="620" cy="580" rx="220" ry="300" fill="#C4A35A" opacity="0.35"/>
  <ellipse cx="600" cy="600" rx="120" ry="160" fill="#F6F1E7" opacity="0.8"/>
  <ellipse cx="560" cy="540" rx="40" ry="70" fill="#D7E6EF" opacity="0.9"/>
</svg>`,
);

write(
  "the-last-light.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1400" role="img" aria-label="The Last Light placeholder">
  <defs>
    <linearGradient id="ll-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3E4A5A"/>
      <stop offset="42%" stop-color="#C48B7A"/>
      <stop offset="68%" stop-color="#E8C58A"/>
      <stop offset="100%" stop-color="#4E5E4C"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1400" fill="url(#ll-sky)"/>
  <circle cx="500" cy="720" r="110" fill="#F3D9A0" opacity="0.95"/>
  <path d="M0 900 L 140 780 L 220 860 L 340 700 L 430 820 L 560 640 L 690 800 L 820 680 L 1000 860 L 1000 1400 L 0 1400 Z" fill="#2C3530"/>
  <path d="M0 1120 C 250 1080, 520 1180, 1000 1100 L 1000 1400 L 0 1400 Z" fill="#1E2622"/>
</svg>`,
);

write(
  "refractions.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="Refractions placeholder">
  <rect width="1600" height="1000" fill="#D7E6EF"/>
  <polygon points="120,180 540,80 720,520 180,640" fill="#F6F1E7" opacity="0.7"/>
  <polygon points="620,120 1280,60 1420,700 700,780" fill="#C9D7C2" opacity="0.55"/>
  <polygon points="200,420 980,300 1100,920 80,860" fill="#C4A35A" opacity="0.28"/>
  <polygon points="900,200 1580,340 1400,980 760,820" fill="#C48B7A" opacity="0.22"/>
  <rect x="0" y="0" width="1600" height="1000" fill="#ffffff" opacity="0.08"/>
</svg>`,
);

write(
  "distant-places.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="Distant Places placeholder">
  <defs>
    <linearGradient id="dp-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E7F0F5"/>
      <stop offset="100%" stop-color="#C9D7C2"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#dp-sky)"/>
  <path d="M0 420 C 200 360, 360 400, 520 340 C 700 270, 820 330, 980 280 C 1160 220, 1320 300, 1600 240 L 1600 900 L 0 900 Z" fill="#B7C9C4"/>
  <path d="M0 560 C 260 500, 480 580, 760 520 C 1040 460, 1260 540, 1600 500 L 1600 900 L 0 900 Z" fill="#8FA39A"/>
  <path d="M0 700 C 300 660, 700 740, 1600 680 L 1600 900 L 0 900 Z" fill="#5F736C"/>
</svg>`,
);

write(
  "abstract-motion.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1400" role="img" aria-label="Abstract Motion placeholder">
  <rect width="900" height="1400" fill="#2C3530"/>
  <style>
    .am { animation: rise 10s ease-in-out infinite; }
    .am2 { animation: rise 14s ease-in-out infinite reverse; }
    @keyframes rise { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-40px); } }
    @media (prefers-reduced-motion: reduce) { .am, .am2 { animation: none; } }
  </style>
  <g class="am">
    <ellipse cx="450" cy="900" rx="180" ry="320" fill="#C9D7C2" opacity="0.35"/>
  </g>
  <g class="am2">
    <ellipse cx="430" cy="640" rx="120" ry="260" fill="#C4A35A" opacity="0.4"/>
  </g>
  <ellipse cx="470" cy="420" rx="80" ry="180" fill="#D7E6EF" opacity="0.45"/>
  <ellipse cx="450" cy="240" rx="40" ry="90" fill="#F6F1E7" opacity="0.7"/>
</svg>`,
);

write(
  "valley-haze.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="Valley Haze placeholder">
  <rect width="1600" height="1000" fill="#E4EEE8"/>
  <ellipse cx="800" cy="280" rx="420" ry="80" fill="#F6F1E7" opacity="0.8"/>
  <path d="M0 380 C 400 300, 700 420, 1100 340 C 1400 280, 1500 360, 1600 320 L 1600 1000 L 0 1000 Z" fill="#C9D7C2"/>
  <path d="M0 620 C 350 560, 800 680, 1600 580 L 1600 1000 L 0 1000 Z" fill="#7E9A84"/>
  <path d="M0 820 C 500 780, 900 860, 1600 800 L 1600 1000 L 0 1000 Z" fill="#4E6554"/>
</svg>`,
);

write(
  "wind-garden.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="Wind Garden placeholder">
  <rect width="1200" height="1200" fill="#DCE8D8"/>
  <style>
    .wg { transform-origin: center bottom; animation: sway 6s ease-in-out infinite; }
    @keyframes sway { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(4deg); } }
    @media (prefers-reduced-motion: reduce) { .wg { animation: none; } }
  </style>
  <circle cx="900" cy="220" r="70" fill="#F6F1E7"/>
  <g class="wg">
    <ellipse cx="420" cy="780" rx="40" ry="260" fill="#6E8B6E"/>
    <ellipse cx="560" cy="740" rx="50" ry="300" fill="#8FA88A"/>
    <ellipse cx="700" cy="800" rx="36" ry="240" fill="#5E7462"/>
    <ellipse cx="840" cy="760" rx="44" ry="280" fill="#A3B89A"/>
  </g>
  <path d="M0 980 C 300 940, 700 1020, 1200 960 L 1200 1200 L 0 1200 Z" fill="#4E6554"/>
</svg>`,
);

write(
  "evening-field.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="Evening Field placeholder">
  <defs>
    <linearGradient id="ef-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5A4A5C"/>
      <stop offset="55%" stop-color="#C48B7A"/>
      <stop offset="100%" stop-color="#C4A35A"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#ef-sky)"/>
  <circle cx="1180" cy="360" r="80" fill="#F3D9A0"/>
  <path d="M0 620 C 400 580, 900 680, 1600 600 L 1600 1000 L 0 1000 Z" fill="#6B5A48"/>
  <path d="M0 780 C 500 740, 1000 820, 1600 760 L 1600 1000 L 0 1000 Z" fill="#3F352C"/>
</svg>`,
);

write(
  "drift.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1400" role="img" aria-label="Drift placeholder">
  <rect width="900" height="1400" fill="#D7E6EF"/>
  <style>
    .dr { animation: float 12s ease-in-out infinite; }
    @keyframes float { 0%,100% { transform: translate(0,0); } 50% { transform: translate(16px,-28px); } }
    @media (prefers-reduced-motion: reduce) { .dr { animation: none; } }
  </style>
  <g class="dr">
    <ellipse cx="450" cy="520" rx="260" ry="140" fill="#F6F1E7" opacity="0.9"/>
    <ellipse cx="500" cy="680" rx="220" ry="110" fill="#C9D7C2" opacity="0.7"/>
    <ellipse cx="380" cy="840" rx="180" ry="90" fill="#ffffff" opacity="0.55"/>
  </g>
</svg>`,
);

write(
  "moss-light.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1400" role="img" aria-label="Moss Light placeholder">
  <rect width="1000" height="1400" fill="#3F5346"/>
  <rect x="180" y="0" width="80" height="1400" fill="#2C3530" opacity="0.45"/>
  <rect x="720" y="0" width="60" height="1400" fill="#2C3530" opacity="0.35"/>
  <ellipse cx="500" cy="200" rx="220" ry="80" fill="#C4A35A" opacity="0.35"/>
  <ellipse cx="520" cy="640" rx="280" ry="360" fill="#8FA88A" opacity="0.45"/>
  <ellipse cx="480" cy="980" rx="340" ry="220" fill="#C9D7C2" opacity="0.25"/>
</svg>`,
);

write(
  "still-current.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="Still Current placeholder">
  <rect width="1600" height="900" fill="#8FB0B8"/>
  <style>
    .sc { animation: wave 9s ease-in-out infinite; }
    @keyframes wave { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-40px); } }
    @media (prefers-reduced-motion: reduce) { .sc { animation: none; } }
  </style>
  <g class="sc">
    <path d="M-80 280 C 200 220, 480 340, 760 260 C 1040 180, 1320 300, 1680 240 L 1680 900 L -80 900 Z" fill="#D7E6EF" opacity="0.55"/>
    <path d="M-80 480 C 240 420, 520 540, 840 460 C 1160 380, 1400 520, 1680 460 L 1680 900 L -80 900 Z" fill="#5E8A90" opacity="0.55"/>
    <path d="M-80 680 C 280 640, 640 740, 1680 660 L 1680 900 L -80 900 Z" fill="#2C4A50" opacity="0.7"/>
  </g>
</svg>`,
);

write(
  "studio-portrait.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="Studio portrait placeholder">
  <rect width="800" height="1000" fill="#E7E0D4"/>
  <rect x="0" y="620" width="800" height="380" fill="#C9D7C2"/>
  <circle cx="400" cy="390" r="140" fill="#C48B7A" opacity="0.55"/>
  <path d="M220 980 C 240 700, 560 700, 580 980 Z" fill="#5E7462"/>
  <rect x="40" y="40" width="720" height="920" fill="none" stroke="#C4A35A" stroke-width="1" opacity="0.4"/>
</svg>`,
);

console.log("placeholders written");
