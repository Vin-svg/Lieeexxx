// Typewriter on h1
const text = "Lieeexxx";
const el = document.querySelector('header h1');
el.textContent = '';
let i = 0;
function type() {
  if (i < text.length) {
    el.textContent += text[i++];
    setTimeout(type, 80);
  }
}
type();

// Neofetch animation
const logo = [
  "                   -`                    ",
  "                  .o+`                   ",
  "                 `ooo/                   ",
  "                `+oooo:                  ",
  "               `+oooooo:                 ",
  "               -+oooooo+:                ",
  "             `/:-:++oooo+:               ",
  "            `/++++/+++++++:              ",
  "           `/++++++++++++++:             ",
  "          `/+++ooooooooooooo/`           ",
  "         ./ooosssso++osssssso+`          ",
  "        .oossssso-````/ossssss+`         ",
  "       -osssssso.      :ssssssso.        ",
  "      :osssssss/        osssso+++.       ",
  "     /ossssssss/        +ssssooo/-       ",
  "   `/ossssso+/:-        -:/+osssso+-     ",
  "  `+sso+:-`                 `.-/+oso:   ",
  " `++:.                           `-/+/  ",
  " .`                                 `/  ",
];

const infos = [
  { type: 'user',   text: "lieeexxx@arch" },
  { type: 'sep',    text: "─────────────" },
  { type: 'kv',     key: "OS",       val: " Arch Linux x86_64" },
  { type: 'kv',     key: "Kernel",   val: " 6.18.23-1-lts" },
  { type: 'kv',     key: "Shell",    val: " bash" },
  { type: 'kv',     key: "Uptime",   val: " trop longtemps" },
  { type: 'kv',     key: "Packages", val: " bcp (pacman)" },
  { type: 'kv',     key: "Homelab",  val: " Proxmox" },
];

function buildLine(logoStr, info) {
  let logoHtml = `<span class="nf-logo">${escHtml(logoStr)}</span>`;
  let infoHtml = '';
  if (!info) return logoHtml;
  if (info.type === 'user')   infoHtml = `<span class="nf-user">${escHtml(info.text)}</span>`;
  if (info.type === 'sep')    infoHtml = `<span class="nf-sep">${escHtml(info.text)}</span>`;
  if (info.type === 'kv')     infoHtml = `<span class="nf-key">${escHtml(info.key)}</span><span class="nf-colon">:</span><span class="nf-val">${escHtml(info.val)}</span>`;
  return logoHtml + infoHtml;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const out = document.getElementById('neofetch-out');
const totalLines = Math.max(logo.length, infos.length);

for (let i = 0; i < totalLines; i++) {
  const span = document.createElement('span');
  span.className = 'nf-line';
  span.style.animationDelay = `${600 + i * 55}ms`;
  span.innerHTML = buildLine(logo[i] || ' '.repeat(44), infos[i]);
  out.appendChild(span);
}

// Scroll fade-in
const targets = document.querySelectorAll('section, .project, footer');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
targets.forEach(el => observer.observe(el));

// PowerGlitch
window.addEventListener('load', () => {
  if (typeof PowerGlitch !== 'undefined') {
    PowerGlitch.glitch('.glitch-text', { timing: { duration: 4000 } });
    PowerGlitch.glitch('.glitch');
  }
});
