/* My Med Care — application web mobile (vanilla JS, sans dépendances) */
(() => {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Icônes (traits style Lucide)                                        */
  /* ------------------------------------------------------------------ */
  const P = {
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    id: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2.5"/><path d="M5.5 16.5c.6-1.8 2-2.8 3.5-2.8s2.9 1 3.5 2.8M15 9h3M15 13h3"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2z"/><path d="m4.14 15.08 2.86-2.08 2 1.5 3-3"/>',
    translate: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
    hospital: '<path d="M12 6v4M14 8h-4"/><path d="M18 22V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v17"/><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2M10 22v-4h4v4"/>',
    pharmacy: '<path d="M10 2h4a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1z"/>',
    doctor: '<path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    nav: '<path d="m3 11 19-9-9 19-2-8z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7zM8.5 8.5l7 7"/>',
    video: '<path d="m16 13 5.2 3.5a.5.5 0 0 0 .8-.4V7.9a.5.5 0 0 0-.8-.4L16 11"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/><path d="M3.2 12h4.3l1.5-3 3 6 1.5-3h7.3"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    volume: '<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
    swap: '<path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    snow: '<path d="M2 12h20M12 2v20M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/>',
    bandage: '<path d="M18 2 2 18a2.83 2.83 0 0 0 4 4L22 6a2.83 2.83 0 0 0-4-4z"/><path d="M10 10h.01M14 14h.01M12 12h.01M10 14h.01M14 10h.01"/>',
    bug: '<path d="M8 2l1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6zM12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  };
  const icon = (name, extra = '') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${P[name] || ''}</svg>`;

  /* ------------------------------------------------------------------ */
  /* Stockage local                                                      */
  /* ------------------------------------------------------------------ */
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem('mmc:' + key); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('mmc:' + key, JSON.stringify(value)); } catch { /* stockage indisponible */ }
    },
  };

  const DEFAULT_PROFILE = {
    firstName: 'Thomas', lastName: 'Martin', birth: '1988-04-12', blood: 'A+',
    height: '178', weight: '74', allergies: 'Pénicilline, Arachides',
    conditions: 'Asthme léger', medications: 'Ventoline 100µg (si besoin)',
    doctor: 'Dr Claire Dubois', doctorPhone: '+33 1 23 45 67 89',
    insurance: 'Assistance voyage — n° 0800 000 000', organDonor: true, notes: '',
  };
  const DEFAULT_CONTACTS = [
    { name: 'Julie Martin', relation: 'Conjointe', phone: '+33 6 12 34 56 78' },
    { name: 'Pierre Martin', relation: 'Frère', phone: '+33 6 98 76 54 32' },
  ];
  const DEFAULT_MEDS = [
    { name: 'Ventoline 100µg', time: '08:00', note: '2 bouffées si besoin', on: true },
    { name: 'Vitamine D', time: '12:30', note: '1 comprimé', on: true },
  ];

  const state = {
    lang: store.get('lang', 'fr'),
    profile: { ...DEFAULT_PROFILE, ...store.get('profile', {}) },
    contacts: store.get('contacts', DEFAULT_CONTACTS),
    meds: store.get('meds', DEFAULT_MEDS),
    readNotifs: store.get('readNotifs', false),
    position: null,
    placesCache: {},
    tracking: store.get('tracking', false),
  };

  /* ------------------------------------------------------------------ */
  /* Traductions de l'interface                                          */
  /* ------------------------------------------------------------------ */
  const I18N = {
    fr: {
      hello: 'Bonjour', home: 'Accueil', around: 'Autour', sos: 'SOS', file: 'Ma fiche', outdoor: 'Outdoor',
      sosUrgence: 'URGENCE', sosTitle: 'Besoin d’aide ?', sosDesc: 'Appuyez pour alerter les secours et vos proches avec votre position.',
      services: 'Services', translation: 'Traduction', hospitals: 'Hôpitaux', pharmacies: 'Pharmacies', doctors: 'Médecins',
      translationSub: 'Phrases médicales', hospitalsSub: 'Urgences proches', pharmaciesSub: 'Ouvertes près de vous', doctorsSub: 'Généralistes & spécialistes',
      fileSub: 'Dossier médical', outdoorSub: 'Montagne & aventure', teleconsult: 'Téléconsultation', teleconsultSub: 'Un médecin en vidéo',
      meds: 'Médicaments', medsSub: 'Rappels de prise', contacts: 'Proches', contactsSub: 'Contacts d’urgence', firstAid: 'Premiers secours', firstAidSub: 'Gestes qui sauvent',
      tagline: 'Ma sécurité, partout, tout le temps', notifications: 'Notifications', settings: 'Réglages', about: 'À propos',
      call: 'Appeler', route: 'Itinéraire', search: 'Rechercher…', locating: 'Recherche autour de vous…', noResult: 'Aucun résultat pour le moment.',
      demo: 'Exemples affichés : autorisez la localisation (et une connexion internet) pour voir les établissements réels autour de vous.',
      edit: 'Modifier', save: 'Enregistrer', cancel: 'Annuler', saved: 'Enregistré ✓', add: 'Ajouter',
      language: 'Langue', allOptions: 'Toutes les fonctionnalités sont incluses et gratuites.',
    },
    en: {
      hello: 'Hello', home: 'Home', around: 'Nearby', sos: 'SOS', file: 'My file', outdoor: 'Outdoor',
      sosUrgence: 'EMERGENCY', sosTitle: 'Need help?', sosDesc: 'Tap to alert emergency services and your contacts with your location.',
      services: 'Services', translation: 'Translation', hospitals: 'Hospitals', pharmacies: 'Pharmacies', doctors: 'Doctors',
      translationSub: 'Medical phrases', hospitalsSub: 'Nearby ER', pharmaciesSub: 'Open near you', doctorsSub: 'GPs & specialists',
      fileSub: 'Medical record', outdoorSub: 'Mountain & adventure', teleconsult: 'Teleconsultation', teleconsultSub: 'See a doctor by video',
      meds: 'Medication', medsSub: 'Intake reminders', contacts: 'Contacts', contactsSub: 'Emergency contacts', firstAid: 'First aid', firstAidSub: 'Life-saving actions',
      tagline: 'My safety, everywhere, all the time', notifications: 'Notifications', settings: 'Settings', about: 'About',
      call: 'Call', route: 'Directions', search: 'Search…', locating: 'Searching around you…', noResult: 'No results yet.',
      demo: 'Showing examples: allow location access (and an internet connection) to see real places around you.',
      edit: 'Edit', save: 'Save', cancel: 'Cancel', saved: 'Saved ✓', add: 'Add',
      language: 'Language', allOptions: 'Every feature is included and free.',
    },
  };
  const t = (k) => (I18N[state.lang] && I18N[state.lang][k]) || I18N.fr[k] || k;

  /* ------------------------------------------------------------------ */
  /* Utilitaires                                                         */
  /* ------------------------------------------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tel = (p) => 'tel:' + String(p).replace(/[^\d+]/g, '');
  const mapsUrl = (lat, lon) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  const initials = (p) => ((p.firstName || ' ')[0] + (p.lastName || ' ')[0]).toUpperCase();
  const age = (d) => { if (!d) return '—'; const b = new Date(d), n = new Date(); let a = n.getFullYear() - b.getFullYear(); if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--; return a; };
  const splitList = (s) => String(s || '').split(',').map((x) => x.trim()).filter(Boolean);

  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function distanceKm(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLon = (b.lon - a.lon) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const fmtDist = (km) => (km < 1 ? Math.round(km * 1000) + ' m' : km.toFixed(1).replace('.', ',') + ' km');

  function locate() {
    if (state.position) return Promise.resolve(state.position);
    return new Promise((resolve) => {
      if (!navigator.geolocation) return resolve(null);
      // Filet de sécurité : la demande d'autorisation peut rester sans réponse
      const guard = setTimeout(() => resolve(null), 12000);
      navigator.geolocation.getCurrentPosition(
        (p) => { clearTimeout(guard); state.position = { lat: p.coords.latitude, lon: p.coords.longitude, alt: p.coords.altitude, acc: p.coords.accuracy }; resolve(state.position); },
        () => { clearTimeout(guard); resolve(null); },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
      );
    });
  }

  /* ------------------------------------------------------------------ */
  /* Données : établissements (OpenStreetMap / Overpass)                 */
  /* ------------------------------------------------------------------ */
  const PLACE_TYPES = {
    hospitals: { title: 'hospitals', icon: 'hospital', color: 'c-blue', query: 'nwr["amenity"="hospital"]' },
    pharmacies: { title: 'pharmacies', icon: 'pharmacy', color: 'c-green', query: 'nwr["amenity"="pharmacy"]' },
    doctors: { title: 'doctors', icon: 'doctor', color: 'c-teal', query: 'nwr["amenity"~"doctors|clinic"]' },
  };
  const DEMO_PLACES = {
    hospitals: [
      { name: 'Hôpital Européen Georges-Pompidou', addr: '20 Rue Leblanc, Paris 15e', phone: '+33 1 56 09 20 00', d: 1.2, lat: 48.8389, lon: 2.2737, tag: 'Urgences 24h/24' },
      { name: 'Hôpital Necker – Enfants malades', addr: '149 Rue de Sèvres, Paris 15e', phone: '+33 1 44 49 40 00', d: 2.4, lat: 48.8462, lon: 2.3156, tag: 'Pédiatrie' },
      { name: 'Hôpital Cochin', addr: '27 Rue du Faubourg Saint-Jacques, Paris 14e', phone: '+33 1 58 41 41 41', d: 3.8, lat: 48.8378, lon: 2.3398, tag: 'Urgences 24h/24' },
    ],
    pharmacies: [
      { name: 'Pharmacie du Marché', addr: '12 Rue du Commerce, Paris 15e', phone: '+33 1 45 78 00 00', d: 0.3, lat: 48.8467, lon: 2.2961, tag: 'Ouverte' },
      { name: 'Grande Pharmacie de la Gare', addr: '3 Place de la Gare', phone: '+33 1 40 00 00 00', d: 0.9, lat: 48.8414, lon: 2.3212, tag: 'Garde de nuit' },
      { name: 'Pharmacie Centrale', addr: '45 Avenue Émile Zola', phone: '+33 1 45 77 00 00', d: 1.5, lat: 48.8475, lon: 2.2911, tag: 'Ouverte' },
    ],
    doctors: [
      { name: 'Dr Claire Dubois — Médecin généraliste', addr: '8 Rue Cambronne, Paris 15e', phone: '+33 1 23 45 67 89', d: 0.6, lat: 48.8455, lon: 2.3030, tag: 'Disponible aujourd’hui' },
      { name: 'Centre médical Vaugirard', addr: '210 Rue de Vaugirard, Paris 15e', phone: '+33 1 47 34 00 00', d: 1.1, lat: 48.8411, lon: 2.3078, tag: 'Sans rendez-vous' },
      { name: 'Dr Marc Leroy — Dermatologue', addr: '19 Bd Pasteur, Paris 15e', phone: '+33 1 43 06 00 00', d: 1.7, lat: 48.8426, lon: 2.3133, tag: 'Spécialiste' },
    ],
  };

  async function fetchPlaces(type) {
    if (state.placesCache[type]) return state.placesCache[type];
    const pos = await locate();
    if (!pos) return { demo: true, items: DEMO_PLACES[type] };
    const q = `[out:json][timeout:20];(${PLACE_TYPES[type].query}(around:6000,${pos.lat},${pos.lon}););out center 40;`;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 10000);
      const res = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: 'data=' + encodeURIComponent(q), signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(res.status);
      const json = await res.json();
      const items = json.elements
        .map((e) => {
          const lat = e.lat ?? e.center?.lat, lon = e.lon ?? e.center?.lon, tg = e.tags || {};
          if (lat == null || !tg.name) return null;
          const addr = [tg['addr:housenumber'], tg['addr:street'], tg['addr:city']].filter(Boolean).join(' ');
          return {
            name: tg.name, addr: addr || tg['addr:full'] || '', phone: tg.phone || tg['contact:phone'] || '',
            lat, lon, d: distanceKm(pos, { lat, lon }),
            tag: tg.emergency === 'yes' ? 'Urgences' : tg.opening_hours === '24/7' ? '24h/24' : (tg['healthcare:speciality'] || ''),
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.d - b.d)
        .slice(0, 25);
      const out = items.length ? { demo: false, items } : { demo: true, items: DEMO_PLACES[type] };
      state.placesCache[type] = out;
      return out;
    } catch {
      return { demo: true, items: DEMO_PLACES[type] };
    }
  }

  /* ------------------------------------------------------------------ */
  /* Données : traduction                                                */
  /* ------------------------------------------------------------------ */
  const LANGS = { fr: 'Français', en: 'English', es: 'Español', de: 'Deutsch', it: 'Italiano', pt: 'Português' };
  const PHRASES = [
    { cat: 'urgence', fr: 'J’ai besoin d’un médecin, c’est urgent.', en: 'I need a doctor, it’s urgent.', es: 'Necesito un médico, es urgente.', de: 'Ich brauche dringend einen Arzt.', it: 'Ho bisogno di un medico, è urgente.', pt: 'Preciso de um médico, é urgente.' },
    { cat: 'urgence', fr: 'Appelez une ambulance, s’il vous plaît.', en: 'Please call an ambulance.', es: 'Llame a una ambulancia, por favor.', de: 'Bitte rufen Sie einen Krankenwagen.', it: 'Chiamate un’ambulanza, per favore.', pt: 'Chame uma ambulância, por favor.' },
    { cat: 'urgence', fr: 'Où se trouve l’hôpital le plus proche ?', en: 'Where is the nearest hospital?', es: '¿Dónde está el hospital más cercano?', de: 'Wo ist das nächste Krankenhaus?', it: 'Dov’è l’ospedale più vicino?', pt: 'Onde fica o hospital mais próximo?' },
    { cat: 'symptomes', fr: 'J’ai mal ici.', en: 'It hurts here.', es: 'Me duele aquí.', de: 'Es tut hier weh.', it: 'Mi fa male qui.', pt: 'Dói aqui.' },
    { cat: 'symptomes', fr: 'J’ai de la fièvre.', en: 'I have a fever.', es: 'Tengo fiebre.', de: 'Ich habe Fieber.', it: 'Ho la febbre.', pt: 'Estou com febre.' },
    { cat: 'symptomes', fr: 'J’ai du mal à respirer.', en: 'I have trouble breathing.', es: 'Me cuesta respirar.', de: 'Ich habe Atemnot.', it: 'Ho difficoltà a respirare.', pt: 'Tenho dificuldade em respirar.' },
    { cat: 'symptomes', fr: 'J’ai des nausées.', en: 'I feel nauseous.', es: 'Tengo náuseas.', de: 'Mir ist übel.', it: 'Ho la nausea.', pt: 'Estou enjoado.' },
    { cat: 'symptomes', fr: 'Je me suis fait mal à la cheville.', en: 'I hurt my ankle.', es: 'Me lastimé el tobillo.', de: 'Ich habe mir den Knöchel verletzt.', it: 'Mi sono fatto male alla caviglia.', pt: 'Machuquei o tornozelo.' },
    { cat: 'infos', fr: 'Je suis allergique à la pénicilline.', en: 'I am allergic to penicillin.', es: 'Soy alérgico a la penicilina.', de: 'Ich bin allergisch gegen Penicillin.', it: 'Sono allergico alla penicillina.', pt: 'Sou alérgico à penicilina.' },
    { cat: 'infos', fr: 'Je suis diabétique.', en: 'I am diabetic.', es: 'Soy diabético.', de: 'Ich bin Diabetiker.', it: 'Sono diabetico.', pt: 'Sou diabético.' },
    { cat: 'infos', fr: 'Je suis asthmatique.', en: 'I have asthma.', es: 'Tengo asma.', de: 'Ich habe Asthma.', it: 'Ho l’asma.', pt: 'Tenho asma.' },
    { cat: 'infos', fr: 'Je prends ce médicament.', en: 'I take this medication.', es: 'Tomo este medicamento.', de: 'Ich nehme dieses Medikament.', it: 'Prendo questo farmaco.', pt: 'Tomo este medicamento.' },
    { cat: 'pharmacie', fr: 'Avez-vous quelque chose contre la douleur ?', en: 'Do you have something for pain?', es: '¿Tiene algo para el dolor?', de: 'Haben Sie etwas gegen Schmerzen?', it: 'Ha qualcosa per il dolore?', pt: 'Tem algo para a dor?' },
    { cat: 'pharmacie', fr: 'Faut-il une ordonnance ?', en: 'Do I need a prescription?', es: '¿Necesito receta?', de: 'Brauche ich ein Rezept?', it: 'Serve la ricetta?', pt: 'Preciso de receita?' },
    { cat: 'pharmacie', fr: 'Combien de fois par jour ?', en: 'How many times a day?', es: '¿Cuántas veces al día?', de: 'Wie oft am Tag?', it: 'Quante volte al giorno?', pt: 'Quantas vezes por dia?' },
  ];
  const PHRASE_CATS = { all: 'Tout', urgence: 'Urgence', symptomes: 'Symptômes', infos: 'Mon état', pharmacie: 'Pharmacie' };

  /* ------------------------------------------------------------------ */
  /* Données : premiers secours                                          */
  /* ------------------------------------------------------------------ */
  const FIRST_AID = [
    { icon: 'heart', color: 'c-red', title: 'Arrêt cardiaque', steps: ['Appelez le 112 (ou 15 en France) et demandez un défibrillateur.', 'Allongez la victime sur le dos, sur une surface dure.', 'Mains au centre de la poitrine, bras tendus.', 'Compressions : 100 à 120 par minute, 5 à 6 cm de profondeur.', 'Utilisez le défibrillateur dès qu’il arrive et suivez ses instructions.'] },
    { icon: 'activity', color: 'c-amber', title: 'Étouffement', steps: ['Demandez à la personne de tousser.', 'Si elle ne peut pas : 5 claques dans le dos, entre les omoplates.', 'Puis 5 compressions abdominales (méthode de Heimlich).', 'Alternez jusqu’à expulsion du corps étranger. Appelez le 112 si inefficace.'] },
    { icon: 'droplet', color: 'c-red', title: 'Hémorragie', steps: ['Appuyez fortement sur la plaie avec un tissu propre.', 'Allongez la victime.', 'Appelez le 112.', 'Maintenez la compression sans relâcher jusqu’à l’arrivée des secours.'] },
    { icon: 'flame', color: 'c-amber', title: 'Brûlure', steps: ['Refroidissez à l’eau tempérée pendant 20 minutes.', 'Retirez bijoux et vêtements non collés.', 'Ne percez pas les cloques, n’appliquez ni glace ni corps gras.', 'Consultez si la brûlure est étendue, profonde ou au visage.'] },
    { icon: 'bandage', color: 'c-blue', title: 'Entorse / fracture', steps: ['Ne mobilisez pas le membre blessé.', 'Immobilisez dans la position trouvée.', 'Appliquez du froid (glace enveloppée) 20 minutes.', 'Consultez ; appelez le 112 si déformation ou douleur intense.'] },
    { icon: 'snow', color: 'c-teal', title: 'Hypothermie', steps: ['Mettez la personne à l’abri du vent et du froid.', 'Retirez les vêtements mouillés, couvrez (couverture de survie).', 'Donnez une boisson chaude et sucrée si elle est consciente.', 'Ne frictionnez pas les membres. Appelez le 112.'] },
    { icon: 'sun', color: 'c-amber', title: 'Coup de chaleur', steps: ['Installez la personne à l’ombre, au frais.', 'Rafraîchissez-la (linges humides, ventilation).', 'Faites-la boire par petites gorgées si elle est consciente.', 'Appelez le 112 en cas de confusion ou de malaise.'] },
    { icon: 'bug', color: 'c-green', title: 'Piqûre / morsure', steps: ['Retirez le dard ou la tique avec un outil adapté.', 'Désinfectez la zone.', 'Surveillez l’apparition d’un gonflement ou d’une gêne respiratoire.', 'Appelez le 112 en cas de réaction allergique (œdème, malaise).'] },
  ];

  const NOTIFS = [
    { icon: 'pill', color: 'c-teal', title: 'Rappel : Vitamine D', text: 'Prise prévue à 12:30.', time: 'Il y a 10 min' },
    { icon: 'sun', color: 'c-amber', title: 'Alerte canicule', text: 'Températures élevées prévues dans votre zone. Hydratez-vous.', time: 'Aujourd’hui' },
    { icon: 'shield', color: 'c-blue', title: 'Fiche médicale à jour', text: 'Pensez à vérifier vos allergies et traitements.', time: 'Hier' },
  ];

  /* ------------------------------------------------------------------ */
  /* Vues                                                                */
  /* ------------------------------------------------------------------ */
  const tile = (href, ic, color, title, sub, wide = false) => `
    <a class="tile${wide ? ' wide' : ''}" href="${href}">
      <div class="ico ${color}">${icon(ic)}</div>
      <div><strong>${title}</strong><span>${sub}</span></div>
      <div class="arrow">${icon('arrow')}</div>
    </a>`;

  function viewHome() {
    const p = state.profile;
    return `
      <section class="hero">
        <div class="hero-row">
          <div class="avatar">${esc(initials(p))}</div>
          <div><small>${t('hello')} 👋</small><h1>${esc(p.firstName)} ${esc(p.lastName)}</h1></div>
        </div>
        <div class="hero-meta">
          <span class="chip">${icon('droplet')} ${esc(p.blood || '—')}</span>
          <span class="chip">${icon('info')} ${splitList(p.allergies).length} allergie(s)</span>
          <span class="chip">${icon('users')} ${state.contacts.length} proche(s)</span>
        </div>
      </section>

      <section class="sos-wrap">
        <a class="sos-btn" href="#/sos" aria-label="SOS urgence"><div><span>SOS</span><small>${t('sosUrgence')}</small></div></a>
        <div class="sos-text"><h2>${t('sosTitle')}</h2><p>${t('sosDesc')}</p></div>
      </section>

      <div class="section-title">${t('services')}</div>
      <div class="grid">
        ${tile('#/translate', 'translate', 'c-blue', t('translation'), t('translationSub'))}
        ${tile('#/places/hospitals', 'hospital', 'c-red', t('hospitals'), t('hospitalsSub'))}
        ${tile('#/places/pharmacies', 'pharmacy', 'c-green', t('pharmacies'), t('pharmaciesSub'))}
        ${tile('#/places/doctors', 'doctor', 'c-teal', t('doctors'), t('doctorsSub'))}
        ${tile('#/profile', 'id', 'c-violet', t('file'), t('fileSub'))}
        ${tile('#/outdoor', 'mountain', 'c-green', t('outdoor'), t('outdoorSub'))}
        ${tile('#/teleconsult', 'video', 'c-blue', t('teleconsult'), t('teleconsultSub'))}
        ${tile('#/meds', 'pill', 'c-amber', t('meds'), t('medsSub'))}
        ${tile('#/contacts', 'users', 'c-teal', t('contacts'), t('contactsSub'))}
        ${tile('#/first-aid', 'heart', 'c-red', t('firstAid'), t('firstAidSub'))}
      </div>

      <div class="tagline">
        ${icon('shield')}<span>${t('tagline')}</span>
        <select id="langSelect" aria-label="${t('language')}">
          <option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>FR</option>
          <option value="en" ${state.lang === 'en' ? 'selected' : ''}>EN</option>
        </select>
      </div>`;
  }
  function bindHome() {
    $('#langSelect').addEventListener('change', (e) => setLang(e.target.value));
  }

  /* --- SOS --- */
  let sosTimer = null;
  function viewSos() {
    return `
      <div class="sos-page">
        <h1 class="page-title">Urgence</h1>
        <p class="page-sub">Appuyez sur le bouton : après 5 secondes, l’appel au 112 est lancé et vos proches reçoivent votre position.</p>
        <button class="sos-big" id="sosBig" aria-label="Déclencher l'alerte SOS"><div><span id="sosLabel">SOS</span><small id="sosSmall">APPUYER</small></div></button>
        <button class="btn ghost block" id="sosCancel" hidden>${t('cancel')}</button>
        <div class="card" id="sosCall" hidden style="text-align:left">
          <strong>Appelez maintenant le 112</strong>
          <p class="note" style="margin:4px 0 12px">Si l\u2019appel ne s\u2019est pas lancé, composez le numéro vous-même, puis prévenez vos proches ci-dessous.</p>
          <a class="btn red block" href="tel:112">${icon('phone')} 112</a>
        </div>
      </div>
      <div class="section-title">Numéros d’urgence</div>
      <div class="emergency-grid">
        <a href="tel:112"><b>112</b><small>Urgence UE</small></a>
        <a href="tel:15"><b>15</b><small>SAMU</small></a>
        <a href="tel:18"><b>18</b><small>Pompiers</small></a>
        <a href="tel:17"><b>17</b><small>Police</small></a>
        <a href="tel:114"><b>114</b><small>Sourds / SMS</small></a>
        <a href="tel:3237"><b>3237</b><small>Pharmacie de garde</small></a>
      </div>
      <div class="section-title">Alerter mes proches <a href="#/contacts">Gérer</a></div>
      <div class="list">
        ${state.contacts.map((c) => `
          <div class="item">
            <div class="ico c-teal">${icon('users')}</div>
            <div class="body"><strong>${esc(c.name)}</strong><span>${esc(c.relation)} · ${esc(c.phone)}</span></div>
            <div class="actions">
              <a class="round" href="sms:${esc(c.phone.replace(/[^\d+]/g, ''))}" aria-label="SMS">${icon('message')}</a>
              <a class="round green" href="${tel(c.phone)}" aria-label="${t('call')}">${icon('phone')}</a>
            </div>
          </div>`).join('')}
      </div>
      <button class="btn teal block" id="sharePos" style="margin-top:14px">${icon('share')} Partager ma position</button>`;
  }
  function bindSos() {
    const big = $('#sosBig'), label = $('#sosLabel'), small = $('#sosSmall'), cancel = $('#sosCancel');
    const reset = () => { clearInterval(sosTimer); sosTimer = null; big.classList.remove('counting'); label.textContent = 'SOS'; small.textContent = 'APPUYER'; cancel.hidden = true; };
    big.addEventListener('click', () => {
      if (sosTimer) return;
      $('#sosCall').hidden = true;
      let n = 5; big.classList.add('counting'); label.textContent = n; small.textContent = 'APPEL DANS'; cancel.hidden = false;
      if (navigator.vibrate) navigator.vibrate(200);
      sosTimer = setInterval(() => {
        n -= 1;
        if (n > 0) { label.textContent = n; if (navigator.vibrate) navigator.vibrate(120); return; }
        reset();
        $('#sosCall').hidden = false;
        window.location.href = 'tel:112';
      }, 1000);
    });
    cancel.addEventListener('click', () => { reset(); toast('Alerte annulée'); });
    $('#sharePos').addEventListener('click', sharePosition);
  }
  async function sharePosition() {
    const pos = await locate();
    const p = state.profile;
    const link = pos ? `https://maps.google.com/?q=${pos.lat.toFixed(5)},${pos.lon.toFixed(5)}` : '';
    const text = `🚨 ${p.firstName} ${p.lastName} a besoin d'aide. Groupe sanguin ${p.blood}. Allergies : ${p.allergies || 'aucune'}.${link ? ' Position : ' + link : ''}`;
    if (navigator.share) { try { await navigator.share({ title: 'My Med Care — SOS', text }); return; } catch { /* annulé */ } }
    try { await navigator.clipboard.writeText(text); toast('Message copié dans le presse-papiers'); } catch { toast(pos ? 'Position : ' + link : 'Position indisponible'); }
  }

  /* --- Établissements --- */
  function viewPlaces(type) {
    const cfg = PLACE_TYPES[type];
    if (!cfg) return viewNotFound();
    return `
      <h1 class="page-title">${t(cfg.title)}</h1>
      <p class="page-sub">${t(type + 'Sub')} — classés par distance.</p>
      <div class="segmented" id="placeTabs">
        ${Object.keys(PLACE_TYPES).map((k) => `<button data-k="${k}" class="${k === type ? 'active' : ''}">${t(PLACE_TYPES[k].title)}</button>`).join('')}
      </div>
      <label class="search">${icon('search')}<input id="placeSearch" type="search" placeholder="${t('search')}" /></label>
      <div id="placeList"><div class="empty"><div class="spinner"></div>${t('locating')}</div></div>`;
  }
  function bindPlaces(type) {
    const cfg = PLACE_TYPES[type];
    if (!cfg) return;
    document.querySelectorAll('#placeTabs button').forEach((b) => b.addEventListener('click', () => { location.hash = '#/places/' + b.dataset.k; }));
    let data = [];
    const render = (filter = '') => {
      const f = filter.trim().toLowerCase();
      const items = data.items.filter((x) => !f || (x.name + ' ' + x.addr).toLowerCase().includes(f));
      $('#placeList').innerHTML = (data.demo ? `<p class="note" style="margin:0 0 12px">${icon('info', 'class="inline-ico"')} ${t('demo')}</p>` : '') +
        (items.length ? `<div class="list">${items.map((x) => `
          <div class="item">
            <div class="ico ${cfg.color}">${icon(cfg.icon)}</div>
            <div class="body">
              <strong>${esc(x.name)}</strong>
              <span>${fmtDist(x.d)}${x.addr ? ' · ' + esc(x.addr) : ''}</span>
              ${x.tag ? `<span style="margin-top:6px"><em class="badge ${/urgence|24|ouvert|garde|dispon/i.test(x.tag) ? 'open' : 'info'}" style="font-style:normal">${esc(x.tag)}</em></span>` : ''}
            </div>
            <div class="actions">
              ${x.phone ? `<a class="round green" href="${tel(x.phone)}" aria-label="${t('call')}">${icon('phone')}</a>` : ''}
              <a class="round" href="${mapsUrl(x.lat, x.lon)}" target="_blank" rel="noopener" aria-label="${t('route')}">${icon('nav')}</a>
            </div>
          </div>`).join('')}</div>` : `<div class="empty">${t('noResult')}</div>`);
    };
    fetchPlaces(type).then((d) => {
      if (currentRoute().name !== 'places') return;
      data = d; render();
      $('#placeSearch').addEventListener('input', (e) => render(e.target.value));
    });
  }

  /* --- Traduction --- */
  let trState = { from: 'fr', to: 'en', cat: 'all', q: '' };
  function viewTranslate() {
    const opts = (sel) => Object.entries(LANGS).map(([k, v]) => `<option value="${k}" ${k === sel ? 'selected' : ''}>${v}</option>`).join('');
    return `
      <h1 class="page-title">${t('translation')}</h1>
      <p class="page-sub">Montrez ou faites écouter la phrase à votre interlocuteur. Fonctionne hors ligne.</p>
      <div class="lang-switch">
        <select id="trFrom" aria-label="Langue source">${opts(trState.from)}</select>
        <button class="icon-btn" id="trSwap" aria-label="Inverser">${icon('swap')}</button>
        <select id="trTo" aria-label="Langue cible">${opts(trState.to)}</select>
      </div>
      <label class="search">${icon('search')}<input id="trSearch" type="search" placeholder="${t('search')}" value="${esc(trState.q)}" /></label>
      <div class="segmented" id="trCats">${Object.entries(PHRASE_CATS).map(([k, v]) => `<button data-k="${k}" class="${k === trState.cat ? 'active' : ''}">${v}</button>`).join('')}</div>
      <div class="list" id="trList"></div>`;
  }
  function bindTranslate() {
    const list = $('#trList');
    const render = () => {
      const q = trState.q.trim().toLowerCase();
      const items = PHRASES.filter((p) => (trState.cat === 'all' || p.cat === trState.cat) && (!q || p[trState.from].toLowerCase().includes(q) || p[trState.to].toLowerCase().includes(q)));
      list.innerHTML = items.length ? items.map((p, i) => `
        <div class="phrase"><div class="phrase-row">
          <div class="grow"><div class="src">${esc(p[trState.from])}</div><div class="dst">${esc(p[trState.to])}</div></div>
          <button class="round" data-speak="${i}" aria-label="Écouter">${icon('volume')}</button>
          <button class="round" data-show="${i}" aria-label="Plein écran">${icon('expand')}</button>
        </div></div>`).join('') : `<div class="empty">${t('noResult')}</div>`;
      list.querySelectorAll('[data-speak]').forEach((b) => b.addEventListener('click', () => speak(items[b.dataset.speak][trState.to], trState.to)));
      list.querySelectorAll('[data-show]').forEach((b) => b.addEventListener('click', () => showBig(items[b.dataset.show][trState.to], items[b.dataset.show][trState.from])));
    };
    $('#trFrom').addEventListener('change', (e) => { trState.from = e.target.value; render(); });
    $('#trTo').addEventListener('change', (e) => { trState.to = e.target.value; render(); });
    $('#trSwap').addEventListener('click', () => { [trState.from, trState.to] = [trState.to, trState.from]; $('#trFrom').value = trState.from; $('#trTo').value = trState.to; render(); });
    $('#trSearch').addEventListener('input', (e) => { trState.q = e.target.value; render(); });
    document.querySelectorAll('#trCats button').forEach((b) => b.addEventListener('click', () => {
      trState.cat = b.dataset.k;
      document.querySelectorAll('#trCats button').forEach((x) => x.classList.toggle('active', x === b));
      render();
    }));
    render();
  }
  function speak(text, lang) {
    if (!('speechSynthesis' in window)) return toast('Synthèse vocale non disponible');
    const u = new SpeechSynthesisUtterance(text);
    u.lang = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', de: 'de-DE', it: 'it-IT', pt: 'pt-PT' }[lang] || lang;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  function showBig(text, sub) {
    const el = document.createElement('div');
    el.className = 'big-display';
    el.innerHTML = `<div>${esc(text)}<small>${esc(sub)}<br><br>Touchez pour fermer</small></div>`;
    el.addEventListener('click', () => el.remove());
    document.body.appendChild(el);
  }

  /* --- Ma fiche --- */
  let editingProfile = false;
  function viewProfile() {
    const p = state.profile;
    if (editingProfile) return viewProfileEdit();
    const allergies = splitList(p.allergies), conditions = splitList(p.conditions), meds = splitList(p.medications);
    return `
      <h1 class="page-title">${t('file')}</h1>
      <p class="page-sub">Accessible aux secours en un coup d’œil.</p>
      <section class="id-card">
        <div class="row">
          <div><div class="muted">CARTE MÉDICALE D’URGENCE</div><h2>${esc(p.firstName)} ${esc(p.lastName)}</h2><div class="muted">Né(e) le ${p.birth ? new Date(p.birth).toLocaleDateString('fr-FR') : '—'}</div></div>
          <img src="assets/logo.svg" alt="" width="44" height="44" style="border-radius:12px" />
        </div>
        <div class="id-stats">
          <div><b>${esc(p.blood || '—')}</b><small>Groupe</small></div>
          <div><b>${age(p.birth)} ans</b><small>Âge</small></div>
          <div><b>${p.organDonor ? 'Oui' : 'Non'}</b><small>Don d’organes</small></div>
        </div>
      </section>

      <div class="section-title">Allergies</div>
      <div class="card"><div class="tags">${allergies.length ? allergies.map((a) => `<span class="tag red">${esc(a)}</span>`).join('') : '<span class="note" style="margin:0">Aucune</span>'}</div></div>
      <div class="section-title">Antécédents & traitements</div>
      <div class="card">
        <div class="tags" style="margin-bottom:10px">${conditions.map((a) => `<span class="tag">${esc(a)}</span>`).join('') || '<span class="note" style="margin:0">Aucun antécédent</span>'}</div>
        <div class="tags">${meds.map((a) => `<span class="tag teal">${esc(a)}</span>`).join('') || ''}</div>
      </div>
      <div class="section-title">Informations</div>
      <div class="card">
        <div class="kv"><span>Taille</span><b>${esc(p.height || '—')} cm</b></div>
        <div class="kv"><span>Poids</span><b>${esc(p.weight || '—')} kg</b></div>
        <div class="kv"><span>Médecin traitant</span><b>${esc(p.doctor || '—')}</b></div>
        <div class="kv"><span>Tél. médecin</span><b>${p.doctorPhone ? `<a href="${tel(p.doctorPhone)}" class="link-accent">${esc(p.doctorPhone)}</a>` : '—'}</b></div>
        <div class="kv"><span>Assurance</span><b style="text-align:right;max-width:60%">${esc(p.insurance || '—')}</b></div>
        ${p.notes ? `<div class="kv"><span>Notes</span><b style="text-align:right;max-width:60%">${esc(p.notes)}</b></div>` : ''}
      </div>
      <div class="btn-row">
        <button class="btn ghost" id="shareFile">${icon('share')} Partager</button>
        <button class="btn" id="editFile">${icon('edit')} ${t('edit')}</button>
      </div>`;
  }
  function viewProfileEdit() {
    const p = state.profile;
    const f = (id, label, type = 'text', extra = '') => `<div class="field"><label for="f-${id}">${label}</label><input id="f-${id}" name="${id}" type="${type}" value="${esc(p[id])}" ${extra}/></div>`;
    const ta = (id, label, ph) => `<div class="field"><label for="f-${id}">${label}</label><textarea id="f-${id}" name="${id}" placeholder="${ph}">${esc(p[id])}</textarea></div>`;
    return `
      <h1 class="page-title">${t('edit')} ${t('file').toLowerCase()}</h1>
      <p class="page-sub">Séparez plusieurs éléments par des virgules.</p>
      <form id="profileForm" class="card">
        <div class="two">${f('firstName', 'Prénom')}${f('lastName', 'Nom')}</div>
        <div class="two">${f('birth', 'Naissance', 'date')}
          <div class="field"><label for="f-blood">Groupe sanguin</label><select id="f-blood" name="blood">${['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', '?'].map((b) => `<option ${b === p.blood ? 'selected' : ''}>${b}</option>`).join('')}</select></div>
        </div>
        <div class="two">${f('height', 'Taille (cm)', 'number')}${f('weight', 'Poids (kg)', 'number')}</div>
        ${ta('allergies', 'Allergies', 'Pénicilline, Arachides…')}
        ${ta('conditions', 'Antécédents', 'Asthme, Diabète…')}
        ${ta('medications', 'Traitements', 'Nom, dosage…')}
        ${f('doctor', 'Médecin traitant')}
        ${f('doctorPhone', 'Téléphone du médecin', 'tel')}
        ${f('insurance', 'Assurance / assistance')}
        ${ta('notes', 'Notes', 'Informations utiles aux secours')}
        <label class="kv" style="align-items:center"><span>Donneur d’organes</span><span class="switch"><input type="checkbox" name="organDonor" ${p.organDonor ? 'checked' : ''}/><i></i></span></label>
        <div class="btn-row"><button type="button" class="btn ghost" id="cancelEdit">${t('cancel')}</button><button class="btn" type="submit">${t('save')}</button></div>
      </form>`;
  }
  function bindProfile() {
    if (editingProfile) {
      $('#cancelEdit').addEventListener('click', () => { editingProfile = false; render(); });
      $('#profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const next = { ...state.profile };
        for (const [k, v] of fd.entries()) next[k] = String(v).trim();
        next.organDonor = fd.has('organDonor');
        state.profile = next; store.set('profile', next);
        editingProfile = false; toast(t('saved')); render();
      });
      return;
    }
    $('#editFile').addEventListener('click', () => { editingProfile = true; render(); });
    $('#shareFile').addEventListener('click', async () => {
      const p = state.profile;
      const text = `Fiche médicale — ${p.firstName} ${p.lastName}\nGroupe sanguin : ${p.blood}\nAllergies : ${p.allergies || 'aucune'}\nAntécédents : ${p.conditions || 'aucun'}\nTraitements : ${p.medications || 'aucun'}\nMédecin : ${p.doctor} ${p.doctorPhone}`;
      if (navigator.share) { try { await navigator.share({ title: 'Ma fiche médicale', text }); return; } catch { /* annulé */ } }
      try { await navigator.clipboard.writeText(text); toast('Fiche copiée'); } catch { toast('Partage indisponible'); }
    });
  }

  /* --- Outdoor --- */
  let orientHandler = null, watchId = null;
  function viewOutdoor() {
    return `
      <h1 class="page-title">${t('outdoor')}</h1>
      <p class="page-sub">Randonnée, ski, trail : vos outils de sécurité en pleine nature.</p>
      <div class="stat-row">
        <div class="stat"><b id="oAlt">—</b><small>Altitude</small></div>
        <div class="stat"><b id="oAcc">—</b><small>Précision GPS</small></div>
        <div class="stat"><b id="oHead">—</b><small>Cap</small></div>
      </div>
      <div class="card" style="margin-top:12px;text-align:center">
        <div class="compass"><span class="n">N</span>
          <svg class="needle" id="needle" viewBox="0 0 10 140"><path d="M5 0 10 70H0z" fill="#E0333A"/><path d="M5 140 0 70h10z" fill="#B8C4D1"/></svg>
        </div>
        <p class="note" id="coords">Coordonnées : —</p>
        <button class="btn ghost block" id="enableCompass" style="margin-top:8px">${icon('nav')} Activer boussole & GPS</button>
      </div>
      <div class="section-title">Sécurité</div>
      <div class="list">
        <label class="item" style="cursor:pointer">
          <div class="ico c-teal">${icon('pin')}</div>
          <div class="body"><strong>Suivi de sortie</strong><span>Vos proches suivent votre parcours</span></div>
          <span class="switch"><input type="checkbox" id="trackToggle" ${state.tracking ? 'checked' : ''}/><i></i></span>
        </label>
        <button class="item" id="outShare" style="text-align:left">
          <div class="ico c-blue">${icon('share')}</div>
          <div class="body"><strong>Envoyer mes coordonnées</strong><span>SMS / message aux secours ou proches</span></div>
          <div class="round">${icon('chev')}</div>
        </button>
        <a class="item" href="tel:112">
          <div class="ico c-red">${icon('phone')}</div>
          <div class="body"><strong>Secours en montagne</strong><span>112 — fonctionne sans réseau opérateur</span></div>
          <div class="round green">${icon('phone')}</div>
        </a>
      </div>
      <div class="section-title">Guides de survie <a href="#/first-aid">Tout voir</a></div>
      ${FIRST_AID.filter((x) => ['Hypothermie', 'Coup de chaleur', 'Entorse / fracture', 'Piqûre / morsure'].includes(x.title)).map(accordion).join('')}`;
  }
  function bindOutdoor() {
    const fill = (pos) => {
      if (!pos) return;
      $('#oAlt').textContent = pos.alt != null ? Math.round(pos.alt) + ' m' : 'n/d';
      $('#oAcc').textContent = '±' + Math.round(pos.acc) + ' m';
      $('#coords').textContent = `Coordonnées : ${pos.lat.toFixed(5)}, ${pos.lon.toFixed(5)}`;
    };
    $('#enableCompass').addEventListener('click', async () => {
      try {
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
          await DeviceOrientationEvent.requestPermission();
        }
      } catch { /* refusé */ }
      orientHandler = (e) => {
        const h = e.webkitCompassHeading ?? (e.alpha != null ? 360 - e.alpha : null);
        if (h == null) return;
        const needle = $('#needle'); if (!needle) return;
        needle.style.transform = `rotate(${-h}deg)`;
        $('#oHead').textContent = Math.round(h) + '°';
      };
      window.addEventListener('deviceorientationabsolute', orientHandler);
      window.addEventListener('deviceorientation', orientHandler);
      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition((p) => {
          state.position = { lat: p.coords.latitude, lon: p.coords.longitude, alt: p.coords.altitude, acc: p.coords.accuracy };
          fill(state.position);
        }, () => toast('Localisation refusée'), { enableHighAccuracy: true });
      }
      toast('Capteurs activés');
    });
    $('#trackToggle').addEventListener('change', (e) => {
      state.tracking = e.target.checked; store.set('tracking', state.tracking);
      toast(state.tracking ? 'Suivi activé — vos proches sont prévenus' : 'Suivi désactivé');
    });
    $('#outShare').addEventListener('click', sharePosition);
    fill(state.position);
  }
  function cleanupOutdoor() {
    if (orientHandler) { window.removeEventListener('deviceorientationabsolute', orientHandler); window.removeEventListener('deviceorientation', orientHandler); orientHandler = null; }
    if (watchId != null && navigator.geolocation) { navigator.geolocation.clearWatch(watchId); watchId = null; }
  }

  /* --- Premiers secours --- */
  const accordion = (x) => `
    <details class="acc">
      <summary><span class="ico ${x.color}">${icon(x.icon)}</span>${esc(x.title)}<span class="chev">${icon('chev', 'width="18" height="18"')}</span></summary>
      <ol>${x.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
    </details>`;
  const viewFirstAid = () => `
    <h1 class="page-title">${t('firstAid')}</h1>
    <p class="page-sub">Les bons gestes, étape par étape. En cas de doute, appelez le 112.</p>
    ${FIRST_AID.map(accordion).join('')}
    <a class="btn red block" href="tel:112" style="margin-top:16px">${icon('phone')} Appeler le 112</a>`;

  /* --- Téléconsultation --- */
  const DOCS_ONLINE = [
    { name: 'Dr Sophie Laurent', spec: 'Médecin généraliste', wait: '5 min', langs: 'FR · EN' },
    { name: 'Dr Antoine Moreau', spec: 'Pédiatre', wait: '12 min', langs: 'FR · ES' },
    { name: 'Dr Elena Rossi', spec: 'Dermatologue', wait: '20 min', langs: 'FR · IT · EN' },
    { name: 'Dr James Carter', spec: 'Médecin généraliste', wait: '8 min', langs: 'EN · DE' },
  ];
  const viewTeleconsult = () => `
    <h1 class="page-title">${t('teleconsult')}</h1>
    <p class="page-sub">Consultez un médecin en vidéo, 24h/24, où que vous soyez.</p>
    <div class="list">
      ${DOCS_ONLINE.map((d, i) => `
        <div class="item">
          <div class="ico c-blue">${icon('doctor')}</div>
          <div class="body"><strong>${esc(d.name)}</strong><span>${esc(d.spec)} · ${esc(d.langs)}</span>
            <span style="margin-top:6px"><em class="badge open" style="font-style:normal">${icon('clock', 'width="12" height="12"')} Attente ~${d.wait}</em></span></div>
          <button class="round green" data-consult="${i}" aria-label="Démarrer">${icon('video')}</button>
        </div>`).join('')}
    </div>
    <p class="note">Votre fiche médicale est transmise au médecin au début de la consultation.</p>`;
  function bindTeleconsult() {
    document.querySelectorAll('[data-consult]').forEach((b) => b.addEventListener('click', () => {
      const d = DOCS_ONLINE[b.dataset.consult];
      toast(`Connexion avec ${d.name}…`);
    }));
  }

  /* --- Médicaments --- */
  function viewMeds() {
    return `
      <h1 class="page-title">${t('meds')}</h1>
      <p class="page-sub">Recevez un rappel à chaque prise.</p>
      <div class="list" id="medList">
        ${state.meds.map((m, i) => `
          <div class="item">
            <div class="ico c-amber">${icon('pill')}</div>
            <div class="body"><strong>${esc(m.name)}</strong><span>${esc(m.time)} · ${esc(m.note)}</span></div>
            <span class="switch"><input type="checkbox" data-toggle="${i}" ${m.on ? 'checked' : ''} aria-label="Activer"/><i></i></span>
            <button class="round" data-del="${i}" aria-label="Supprimer">${icon('trash')}</button>
          </div>`).join('') || `<div class="empty">Aucun rappel.</div>`}
      </div>
      <form class="card" id="medForm" style="margin-top:16px">
        <div class="field"><label for="m-name">Médicament</label><input id="m-name" name="name" required placeholder="Ex. Doliprane 1000 mg" /></div>
        <div class="two">
          <div class="field"><label for="m-time">Heure</label><input id="m-time" name="time" type="time" value="08:00" required /></div>
          <div class="field"><label for="m-note">Dose</label><input id="m-note" name="note" placeholder="1 comprimé" /></div>
        </div>
        <button class="btn block" type="submit">${icon('plus')} ${t('add')}</button>
      </form>`;
  }
  function bindMeds() {
    const save = () => { store.set('meds', state.meds); render(); };
    document.querySelectorAll('[data-toggle]').forEach((el) => el.addEventListener('change', () => { state.meds[el.dataset.toggle].on = el.checked; store.set('meds', state.meds); }));
    document.querySelectorAll('[data-del]').forEach((el) => el.addEventListener('click', () => { state.meds.splice(el.dataset.del, 1); save(); }));
    $('#medForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.meds.push({ name: fd.get('name').trim(), time: fd.get('time'), note: fd.get('note').trim(), on: true });
      state.meds.sort((a, b) => a.time.localeCompare(b.time));
      if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission();
      toast(t('saved')); save();
    });
  }

  /* --- Proches --- */
  function viewContacts() {
    return `
      <h1 class="page-title">${t('contacts')}</h1>
      <p class="page-sub">Ces personnes sont prévenues lorsque vous déclenchez un SOS.</p>
      <div class="list">
        ${state.contacts.map((c, i) => `
          <div class="item">
            <div class="avatar" style="width:44px;height:44px;border-radius:14px;background:var(--teal-100);color:var(--teal-ink);border:0;font-size:15px">${esc((c.name[0] || '?').toUpperCase())}</div>
            <div class="body"><strong>${esc(c.name)}</strong><span>${esc(c.relation)} · ${esc(c.phone)}</span></div>
            <div class="actions">
              <a class="round green" href="${tel(c.phone)}" aria-label="${t('call')}">${icon('phone')}</a>
              <button class="round" data-del="${i}" aria-label="Supprimer">${icon('trash')}</button>
            </div>
          </div>`).join('') || `<div class="empty">Aucun proche enregistré.</div>`}
      </div>
      <form class="card" id="contactForm" style="margin-top:16px">
        <div class="field"><label for="c-name">Nom</label><input id="c-name" name="name" required /></div>
        <div class="two">
          <div class="field"><label for="c-rel">Lien</label><input id="c-rel" name="relation" placeholder="Parent, ami…" /></div>
          <div class="field"><label for="c-phone">Téléphone</label><input id="c-phone" name="phone" type="tel" required /></div>
        </div>
        <button class="btn block" type="submit">${icon('plus')} ${t('add')}</button>
      </form>`;
  }
  function bindContacts() {
    document.querySelectorAll('[data-del]').forEach((el) => el.addEventListener('click', () => { state.contacts.splice(el.dataset.del, 1); store.set('contacts', state.contacts); render(); }));
    $('#contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.contacts.push({ name: fd.get('name').trim(), relation: fd.get('relation').trim(), phone: fd.get('phone').trim() });
      store.set('contacts', state.contacts); toast(t('saved')); render();
    });
  }

  /* --- Notifications --- */
  function viewNotifications() {
    state.readNotifs = true; store.set('readNotifs', true);
    return `
      <h1 class="page-title">${t('notifications')}</h1>
      <p class="page-sub">Vos alertes santé et rappels.</p>
      <div class="list">${NOTIFS.map((n) => `
        <div class="item">
          <div class="ico ${n.color}">${icon(n.icon)}</div>
          <div class="body"><strong>${esc(n.title)}</strong><span style="white-space:normal">${esc(n.text)}</span><span>${esc(n.time)}</span></div>
        </div>`).join('')}</div>`;
  }

  /* --- Réglages --- */
  const viewSettings = () => `
    <h1 class="page-title">${t('settings')}</h1>
    <p class="page-sub">${t('allOptions')}</p>
    <div class="card">
      <div class="field" style="margin:0"><label for="setLang">${t('language')}</label>
        <select id="setLang"><option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>Français</option><option value="en" ${state.lang === 'en' ? 'selected' : ''}>English</option></select>
      </div>
    </div>
    <div class="section-title">${t('about')}</div>
    <div class="card" style="display:flex;gap:14px;align-items:center">
      <img src="assets/logo.svg" alt="" width="56" height="56" style="border-radius:16px" />
      <div><strong>My Med Care</strong><div class="note" style="margin:2px 0 0">${t('tagline')}.<br>Version 2.0</div></div>
    </div>
    <button class="btn ghost block" id="resetData" style="margin-top:16px">${icon('trash')} Réinitialiser mes données</button>
    <div class="card" id="resetConfirm" style="margin-top:10px" hidden>
      <strong>Effacer votre fiche, vos proches et vos rappels ?</strong>
      <div class="confirm-row"><button class="btn ghost" id="resetNo">${t('cancel')}</button><button class="btn red" id="resetYes">Effacer</button></div>
    </div>`;
  function bindSettings() {
    $('#setLang').addEventListener('change', (e) => setLang(e.target.value));
    $('#resetData').addEventListener('click', () => { $('#resetConfirm').hidden = false; });
    $('#resetNo').addEventListener('click', () => { $('#resetConfirm').hidden = true; });
    $('#resetYes').addEventListener('click', () => {
      ['profile', 'contacts', 'meds', 'tracking', 'readNotifs'].forEach((k) => { try { localStorage.removeItem('mmc:' + k); } catch { /* */ } });
      state.profile = { ...DEFAULT_PROFILE }; state.contacts = [...DEFAULT_CONTACTS]; state.meds = [...DEFAULT_MEDS]; state.readNotifs = false;
      toast('Données réinitialisées'); render();
    });
  }

  const viewNotFound = () => `<div class="empty">Page introuvable. <a href="#/" class="link-accent">Retour à l’accueil</a></div>`;

  /* ------------------------------------------------------------------ */
  /* Routeur                                                             */
  /* ------------------------------------------------------------------ */
  const ROUTES = {
    '': { view: viewHome, bind: bindHome, tab: 'home' },
    sos: { view: viewSos, bind: bindSos, tab: 'sos' },
    places: { view: viewPlaces, bind: bindPlaces, tab: 'around' },
    translate: { view: viewTranslate, bind: bindTranslate },
    profile: { view: viewProfile, bind: bindProfile, tab: 'file' },
    outdoor: { view: viewOutdoor, bind: bindOutdoor, cleanup: cleanupOutdoor, tab: 'outdoor' },
    'first-aid': { view: viewFirstAid },
    teleconsult: { view: viewTeleconsult, bind: bindTeleconsult },
    meds: { view: viewMeds, bind: bindMeds },
    contacts: { view: viewContacts, bind: bindContacts },
    notifications: { view: viewNotifications },
    settings: { view: viewSettings, bind: bindSettings },
  };
  function currentRoute() {
    const [name = '', arg] = location.hash.replace(/^#\/?/, '').split('/');
    return { name, arg };
  }

  let activeCleanup = null;
  function render() {
    const { name, arg } = currentRoute();
    const route = ROUTES[name];
    if (activeCleanup) { activeCleanup(); activeCleanup = null; }
    if (sosTimer) { clearInterval(sosTimer); sosTimer = null; }
    if (name !== 'profile') editingProfile = false;

    const view = $('#view');
    view.innerHTML = route ? route.view(arg) : viewNotFound();
    view.style.animation = 'none'; void view.offsetWidth; view.style.animation = '';
    if (route && route.bind) route.bind(arg);
    if (route && route.cleanup) activeCleanup = route.cleanup;

    $('#backBtn').hidden = name === '';
    renderChrome(route ? route.tab : null);
    window.scrollTo(0, 0);
    $('#app').scrollTop = 0;
  }

  function renderChrome(activeTab) {
    $('#backBtn').innerHTML = icon('back');
    $('#menuBtn').innerHTML = icon('menu');
    $('#notifBtn').innerHTML = icon('bell') + (state.readNotifs ? '' : '<span class="dot"></span>');
    const tabs = [
      { k: 'home', href: '#/', ic: 'home', label: t('home') },
      { k: 'around', href: '#/places/hospitals', ic: 'pin', label: t('around') },
      { k: 'sos', href: '#/sos', label: t('sos') },
      { k: 'file', href: '#/profile', ic: 'id', label: t('file') },
      { k: 'outdoor', href: '#/outdoor', ic: 'mountain', label: t('outdoor') },
    ];
    $('#tabbar').innerHTML = tabs.map((x) => x.k === 'sos'
      ? `<a class="sos-tab${activeTab === 'sos' ? ' active' : ''}" href="${x.href}" aria-label="SOS"><span class="sos-dot">SOS</span></a>`
      : `<a class="${activeTab === x.k ? 'active' : ''}" href="${x.href}">${icon(x.ic)}<span>${x.label}</span></a>`).join('');
    renderDrawer();
  }

  /* ------------------------------------------------------------------ */
  /* Menu latéral                                                        */
  /* ------------------------------------------------------------------ */
  function renderDrawer() {
    const p = state.profile;
    const link = (href, ic, label) => `<a class="link" href="${href}">${icon(ic)}${label}</a>`;
    $('#drawer').innerHTML = `
      <div class="profile"><div class="avatar">${esc(initials(p))}</div><div><strong>${esc(p.firstName)} ${esc(p.lastName)}</strong><div class="note" style="margin:0">${t('fileSub')}</div></div></div>
      ${link('#/', 'home', t('home'))}
      ${link('#/sos', 'phone', 'SOS ' + t('sosUrgence').toLowerCase())}
      ${link('#/translate', 'translate', t('translation'))}
      ${link('#/places/hospitals', 'hospital', t('hospitals'))}
      ${link('#/places/pharmacies', 'pharmacy', t('pharmacies'))}
      ${link('#/places/doctors', 'doctor', t('doctors'))}
      ${link('#/profile', 'id', t('file'))}
      ${link('#/outdoor', 'mountain', t('outdoor'))}
      ${link('#/teleconsult', 'video', t('teleconsult'))}
      ${link('#/meds', 'pill', t('meds'))}
      ${link('#/contacts', 'users', t('contacts'))}
      ${link('#/first-aid', 'heart', t('firstAid'))}
      ${link('#/settings', 'settings', t('settings'))}
      <div class="foot"><img src="assets/logo.svg" alt="" />${t('tagline')}</div>`;
  }
  function openDrawer(open) {
    $('#drawer').classList.toggle('open', open);
    $('#drawer').setAttribute('aria-hidden', String(!open));
    $('#drawerBackdrop').hidden = !open;
  }

  function setLang(lang) {
    state.lang = lang; store.set('lang', lang);
    document.documentElement.lang = lang;
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Démarrage                                                           */
  /* ------------------------------------------------------------------ */
  document.documentElement.lang = state.lang;
  $('#menuBtn').addEventListener('click', () => openDrawer(true));
  $('#drawerBackdrop').addEventListener('click', () => openDrawer(false));
  $('#drawer').addEventListener('click', (e) => { if (e.target.closest('a')) openDrawer(false); });
  $('#backBtn').addEventListener('click', () => { if (history.length > 1) history.back(); else location.hash = '#/'; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { openDrawer(false); const b = $('.big-display'); if (b) b.remove(); } });
  window.addEventListener('hashchange', render);
  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* hors ligne non disponible */ });
  }
})();
