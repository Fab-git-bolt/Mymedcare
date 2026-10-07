"""Assemble la version Artifact (un seul fichier) de My Med Care, dans un cadre de téléphone."""
import base64
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'preview.html')
# 2e argument optionnel : 'radial' pour ouvrir sur l'accueil simplifié
HOME = sys.argv[2] if len(sys.argv) > 2 else ''

logo = 'data:image/svg+xml;base64,' + base64.b64encode(open(os.path.join(ROOT, 'assets/logo.svg'), 'rb').read()).decode()
css = open(os.path.join(ROOT, 'styles.css')).read()
js = open(os.path.join(ROOT, 'app.js')).read()
html = open(os.path.join(ROOT, 'index.html')).read()

body = html.split('<body>')[1].split('</body>')[0].replace('<script src="app.js"></script>', '')
body = body.replace('src="assets/logo.svg"', 'src="' + logo + '"')

sw = """  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* hors ligne non disponible */ });
  }
"""
assert sw in js
js = js.replace(sw, '')
js = js.replace("(() => {\n  'use strict';", "(() => {\n  'use strict';\n  const LOGO = document.querySelector('.brand img').src;", 1)
js = js.replace('src="assets/logo.svg"', 'src="${LOGO}"')

frame_css = r"""
/* ================= Présentation : cadre de téléphone ================= */
:root {
  --stage-a: #E6EEF6;
  --stage-b: #D5E6EC;
  --stage-ink: #0F2236;
  --stage-muted: #5A6E83;
  --body-metal: #1B232C;
  --body-edge: #3A4652;
  --bezel: #05080B;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --stage-a: #08111A; --stage-b: #0D2128; --stage-ink: #E8EFF6; --stage-muted: #8FA0B3; --body-edge: #56636F;
} }
:root[data-theme="dark"] { --stage-a: #08111A; --stage-b: #0D2128; --stage-ink: #E8EFF6; --stage-muted: #8FA0B3; --body-edge: #56636F; }

.stage-copy, .statusbar, .home-ind, .island { display: none; }
.device, .screen { display: contents; }
.topbar { top: env(safe-area-inset-top, 0px); padding-top: 12px; }

@media (min-width: 640px) and (min-height: 640px) {
  html, body { height: 100%; overflow: hidden; }
  body {
    background:
      radial-gradient(60% 70% at 70% 40%, var(--stage-b), transparent 70%),
      var(--stage-a);
  }
  .stage {
    height: 100%; display: flex; align-items: center; justify-content: center; gap: 72px;
    padding-inline: 32px;
  }
  .stage-copy { display: block; max-width: 340px; color: var(--stage-ink); }
  .stage-copy img { width: 64px; height: 64px; border-radius: 18px; box-shadow: 0 12px 30px rgba(42, 106, 162, .3); }
  .stage-copy h1 { font-size: 40px; line-height: 1.05; letter-spacing: -.03em; margin: 22px 0 12px; text-wrap: balance; }
  .stage-copy h1 b { color: var(--teal-500); }
  .stage-copy p { color: var(--stage-muted); font-size: 16px; line-height: 1.55; margin: 0 0 22px; }
  .stage-copy ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; font-size: 14px; font-weight: 600; }
  .stage-copy li { display: flex; align-items: center; gap: 10px; }
  .stage-copy li::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--teal-500); flex: none; }

  .device {
    display: block; position: relative; flex: none;
    width: 414px; height: 868px; padding: 12px; border-radius: 62px;
    background: var(--bezel);
    box-shadow:
      0 0 0 2px var(--body-edge),
      0 0 0 7px var(--body-metal),
      0 0 0 8px var(--body-edge),
      0 50px 100px -20px rgba(15, 34, 54, .45),
      0 30px 60px -30px rgba(0, 0, 0, .5);
    transform: scale(var(--device-scale, 1));
    transform-origin: center center;
  }
  /* boutons latéraux */
  .device::before, .device::after {
    content: ""; position: absolute; width: 5px; border-radius: 3px; background: var(--body-metal);
    box-shadow: inset 0 0 0 1px var(--body-edge);
  }
  .device::before { left: -12px; top: 170px; height: 64px; box-shadow: inset 0 0 0 1px var(--body-edge), 0 88px 0 0 var(--body-metal); }
  .device::after { right: -12px; top: 230px; height: 100px; }

  .screen {
    display: block; position: relative; width: 100%; height: 100%;
    border-radius: 50px; overflow: hidden; background: var(--bg);
    transform: translateZ(0); /* les éléments « fixed » de l'app restent dans l'écran */
  }
  .statusbar {
    display: flex; align-items: center; justify-content: space-between;
    position: absolute; top: 0; left: 0; right: 0; height: 46px; z-index: 25;
    padding: 6px 30px 0 34px; background: var(--topbar-bg);
    font-size: 15px; font-weight: 700; color: var(--ink-900); font-variant-numeric: tabular-nums;
  }
  .statusbar .sys { display: flex; align-items: center; gap: 6px; }
  .statusbar svg { height: 12px; width: auto; }
  .island {
    display: block; position: absolute; top: 11px; left: 50%; transform: translateX(-50%); z-index: 26;
    width: 22px; height: 22px; border-radius: 50%; background: #000;
    box-shadow: inset 0 0 0 4px #10161C, inset 0 0 0 6px #000;
  }
  .home-ind {
    display: block; position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); z-index: 35;
    width: 134px; height: 5px; border-radius: 3px; background: var(--ink-900); opacity: .85;
  }
  .screen .app {
    position: absolute; top: 46px; left: 0; right: 0; bottom: 0;
    min-height: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none;
  }
  .screen .app::-webkit-scrollbar { display: none; }
  .screen .topbar { top: 0; padding-top: 6px; }
  .screen .tabbar { bottom: 24px; }
  .screen .drawer { top: 46px; border-top-left-radius: 24px; }
  .screen .toast { bottom: 112px; }
}
@media (min-width: 640px) and (max-width: 979px) { .stage-copy { display: none !important; } }
"""

status_icons = (
    '<svg viewBox="0 0 18 12" fill="currentColor" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>'
    '<span style="font-size:12px;font-weight:800">5G</span>'
    '<svg viewBox="0 0 28 13" aria-hidden="true"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".45"/><rect x="2.5" y="2.5" width="16" height="8" rx="2" fill="currentColor"/><rect x="25" y="4" width="2" height="5" rx="1" fill="currentColor" opacity=".45"/></svg>'
)

stage = f"""<div class="stage">
  <section class="stage-copy" aria-label="Présentation">
    <img src="{logo}" alt="Logo My Med Care">
    <h1>My Med <b>Care</b></h1>
    <p>Prototype interactif de l’application mobile. Toutes les fonctionnalités sont cliquables : essayez-les directement sur le téléphone.</p>
    <ul>
      <li>SOS urgence et numéros utiles</li>
      <li>Traduction médicale en 6 langues</li>
      <li>Hôpitaux, pharmacies et médecins</li>
      <li>Fiche médicale d’urgence</li>
      <li>Outdoor, premiers secours et rappels</li>
    </ul>
  </section>
  <div class="device" id="device">
    <div class="screen">
      <div class="statusbar" aria-hidden="true"><span id="clock">9:41</span><span class="sys">{status_icons}</span></div>
      <div class="island" aria-hidden="true"></div>
      {body}
      <div class="home-ind" aria-hidden="true"></div>
    </div>
  </div>
</div>"""

frame_js = """
(() => {
  const dev = document.getElementById('device');
  const fit = () => {
    const s = Math.min(1, (window.innerHeight - 48) / 884, (window.innerWidth - 48) / 430);
    dev.style.setProperty('--device-scale', String(Math.max(.5, s)));
  };
  const tick = () => {
    const d = new Date();
    document.getElementById('clock').textContent = d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
  };
  fit(); tick();
  window.addEventListener('resize', fit);
  setInterval(tick, 15000);
})();
"""

home_js = f"window.MMC_DEFAULT_HOME = '{HOME}';\n" if HOME else ''

out = f"""<title>My Med Care</title>
<meta name="theme-color" content="#2A6AA2">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
{css}
{frame_css}
</style>
{stage}
<script>
{home_js}{js}
{frame_js}
</script>
"""
open(OUT, 'w').write(out)
print(len(out))
