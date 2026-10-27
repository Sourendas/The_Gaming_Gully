import './style.css';
import './logo.css';
import './community.css';
import './linkfix.css';
import './neon-bg.css';

const links = { instagram: 'https://www.instagram.com/thegaminggully/', discord: 'https://discord.gg/fQWzusJYU', youtube: 'https://www.youtube.com/@TheGamingGully-b2g', email: 'mailto:thegaminggully@gmail.com' };
const games = [
  ['Valorant', '⚡', 'Tactical shooter', 'https://playvalorant.com/'],
  ['BGMI', '🎯', 'Battle royale', 'https://www.battlegroundsmobileindia.com/'],
  ['Counter-Strike 2', '🔫', 'Tactical shooter', 'https://www.counter-strike.net/cs2'],
  ['Minecraft', '⛏️', 'Sandbox', 'https://www.minecraft.net/'],
  ['Call of Duty', '🪖', 'Shooter', 'https://www.callofduty.com/'],
  ['GTA Online', '🚗', 'Open world', 'https://www.rockstargames.com/gta-online'],
  ['Fortnite', '🦙', 'Battle royale', 'https://www.fortnite.com/'],
  ['Rocket League', '🚀', 'Sports', 'https://www.rocketleague.com/'],
  ['Genshin Impact', '✨', 'Action RPG', 'https://genshin.hoyoverse.com/en/'],
  ['Shadow Fight', '🥋', 'Fighting', 'https://shadowfight.com/']
];
const app = document.querySelector('#app');
const external = (href, label, className = '') => `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

function header() { return `<header class="topbar"><a class="brand" href="#home"><img class="brand-logo" src="/assets/gaming-gully-emblem.png" alt="The Gaming Gully emblem"><span>THE GAMING <b>GULLY</b></span></a><nav id="mainNav"><a href="#home">Home</a><a href="#games">Games</a><a href="#community">Community</a><a href="#lfg">LFG</a><a href="#updates">Updates</a></nav><div class="header-actions"><button class="login-btn" id="loginBtn">Login</button>${external(links.discord, '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> <span>Discord</span>', 'discord mini')}</div><button class="hamburger" id="hamburger" aria-label="Open menu">☰</button></header>`; }
function tiles() { return games.map((g, i) => external(g[3], `<span class="game-icon">${g[1]}</span><span class="game-name">${g[0]}</span><small>${g[2]}</small><i>Official site ↗</i>`, `game-tile g${i}`)).join(''); }
function empty(title, copy, action = '') { return `<div class="empty-state"><span class="empty-mark">✦</span><h3>${title}</h3><p>${copy}</p>${action}</div>`; }
function footer() { return `<footer id="contact"><div class="footer-brand"><a class="brand" href="#home"><img class="brand-logo" src="/assets/gaming-gully-emblem.png" alt="The Gaming Gully emblem"><span>THE GAMING <b>GULLY</b></span></a><p>India’s gaming adda.</p></div><div class="footer-column"><h4>Explore</h4><a href="#games">Games</a><a href="#community">Community</a><a href="#lfg">LFG</a><a href="#updates">Updates</a></div><div class="footer-column"><h4>Official game pages</h4>${games.slice(0, 5).map(g => external(g[3], `${g[0]} ↗`)).join('')}</div><div class="footer-column"><h4>Connect</h4><a href="${links.email}">thegaminggully@gmail.com</a><div class="socials">${external(links.instagram, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`, 'social instagram')}${external(links.youtube, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`, 'social youtube')}${external(links.discord, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`, 'social discord-social')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} The Gaming Gully</span><span>All game names and logos belong to their respective owners.</span></div></footer>`; }
function render() { app.innerHTML = `${header()}<div class="news-ticker" id="newsTicker"><div class="label">LIVE UPDATES</div><div class="ticker-wrap"><div class="ticker-content" id="tickerContent"><span class="news-item">Loading game updates…</span></div></div></div><main><section class="cover" id="home"><img src="/assets/bg-neon-hub.webp" alt="The Gaming Gully game community banner featuring a range of games"><div class="cover-overlay"><span class="eyebrow"><i></i> INDIA'S GAMING ADDA</span><h1>One Gully.<br><em>Every Game.</em></h1><p id="heroCopy">A home for Indian gamers to connect, discover games, and build the community together.</p><div class="hero-actions">${external(links.discord, 'Join the Discord <b>→</b>', 'primary') }<a class="secondary" href="#games">Explore games</a></div></div></section><section class="section intro" id="community"><div><span class="kicker">THE COMMUNITY</span><h2>Built for gamers. Ready for what’s next.</h2></div><p>The Gaming Gully is the community space for Indian players across PC, console, and mobile. Community posts, events, rankings, and squad finding will appear here when they are published.</p></section><section class="section games-section" id="games"><div class="section-head"><div><span class="kicker">CHOOSE YOUR ARENA</span><h2>Official game links</h2></div><p class="section-note">Each card opens the game’s official website.</p></div><div class="games-grid">${tiles()}</div></section><section class="section community-grid" id="lfg"><div class="content-panel"><div class="panel-head"><div><span class="kicker">SQUAD FINDER</span><h2>LFG / Squad Finder</h2></div></div>${empty('Not live yet', 'Squad posts are not published on this site yet. Join Discord to meet other players.', external(links.discord, 'Open Discord ↗', 'discord'))}</div><div class="content-panel"><div class="panel-head"><div><span class="kicker">EVENTS</span><h2>Matches & tournaments</h2></div></div>${empty('No events announced', 'No match or tournament dates have been published yet. Updates will be added here when confirmed.')}</div></section><section class="section updates" id="updates"><div class="section-head"><div><span class="kicker">UPDATES</span><h2>News & guides</h2></div></div>${empty('Nothing published yet', 'There are no news articles or guides published on this website yet. Follow the community channels for future announcements.', `<div class="follow-row">${external(links.instagram, 'Instagram ↗', 'outline-link')}${external(links.youtube, 'YouTube ↗', 'outline-link')}</div>`)}</section><section class="discord-banner"><div><span class="discord-logo">♬</span><h2>Join the Gully.</h2><p>Connect with the community on Discord.</p></div>${external(links.discord, 'Join Discord <b>→</b>', 'discord')}</section></main>${footer()}${loginModal()}`; bind(); }
function bind() { 
  document.querySelector('#hamburger').onclick = () => document.querySelector('#mainNav').classList.toggle('open');
  document.querySelector('#loginBtn').onclick = () => {
    const modal = document.querySelector('#loginModal');
    if (modal) modal.classList.add('show');
  };
  document.addEventListener('click', e => {
    if (e.target.id === 'loginModal' || e.target.classList.contains('close-login')) {
      document.querySelector('#loginModal')?.classList.remove('show');
    }
  });
  document.querySelector('#gmailLogin')?.addEventListener('click', () => {
    alert('Gmail login coming soon. Connect your Google account.');
  });
  document.querySelector('#mobileLogin')?.addEventListener('click', () => {
    const num = prompt('Enter mobile number (with country code):');
    if (num) alert('OTP sent to ' + num + ' (demo only)');
  });
}
function loginModal() {
  return `<div class="modal-backdrop" id="loginModal">
    <div class="modal login-modal">
      <button class="close close-login">×</button>
      <h2>Login to The Gaming Gully</h2>
      <p>Join India's gaming adda. Sign in to find squads, events, and more.</p>
      <button class="primary" id="gmailLogin">Continue with Gmail</button>
      <div class="or-divider"><span>or</span></div>
      <button class="secondary" id="mobileLogin">Continue with Mobile</button>
    </div>
  </div>`;
}

const newsFeeds = [
  { game: 'Valorant', url: 'https://playvalorant.com/en-us/news/', rss: null },
  { game: 'Fortnite', url: 'https://www.fortnite.com/news', rss: null },
  { game: 'CS2', url: 'https://www.counter-strike.net/news', rss: null },
  { game: 'Minecraft', url: 'https://www.minecraft.net/en-us/article', rss: null },
  { game: 'Genshin', url: 'https://genshin.hoyoverse.com/en/news', rss: null },
  { game: 'Call of Duty', url: 'https://www.callofduty.com/blog', rss: null },
  { game: 'GTA Online', url: 'https://www.rockstargames.com/newswire', rss: null },
  { game: 'Rocket League', url: 'https://www.rocketleague.com/news/', rss: null }
];

async function loadNewsFeed() {
  const ticker = document.querySelector('#tickerContent');
  if (!ticker) return;
  // Fallback headlines (updated manually or via future backend)
  const fallback = [
    { game: 'Valorant', title: 'New Agent & Map updates live', link: 'https://playvalorant.com/' },
    { game: 'BGMI', title: 'Latest season patch notes released', link: 'https://www.battlegroundsmobileindia.com/' },
    { game: 'CS2', title: 'Premier Season changes announced', link: 'https://www.counter-strike.net/' },
    { game: 'Fortnite', title: 'New Chapter content dropping soon', link: 'https://www.fortnite.com/' },
    { game: 'Minecraft', title: 'Snapshot updates and features', link: 'https://www.minecraft.net/' },
    { game: 'Genshin Impact', title: 'Version update banners live', link: 'https://genshin.hoyoverse.com/' },
    { game: 'Call of Duty', title: 'Seasonal content and balances', link: 'https://www.callofduty.com/' },
    { game: 'GTA Online', title: 'Weekly bonuses and new vehicles', link: 'https://www.rockstargames.com/gta-online' },
    { game: 'Rocket League', title: 'Ranked season rewards', link: 'https://www.rocketleague.com/' },
    { game: 'Shadow Fight', title: 'Event rewards and new fighters', link: 'https://shadowfight.com/' }
  ];
  const items = fallback.map(n => 
    `<a class="news-item" href="${n.link}" target="_blank" rel="noopener"><span class="game-tag">${n.game}</span> ${n.title}</a>`
  ).join('');
  // Duplicate for seamless loop
  ticker.innerHTML = items + items;
}

render();
loadNewsFeed();
