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
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
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
    theme: store.get('theme', 'auto'),
    homeLayout: store.get('homeLayout', window.MMC_DEFAULT_HOME || 'classic'),
    position: null,
    radius: store.get('radius', 20),
    teleDocs: store.get('teleDocs', []),
    countryAuto: store.get('countryAuto', true),
    country: store.get('country', null),
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
      appearance: 'Apparence', themeAuto: 'Automatique', themeLight: 'Clair', themeDark: 'Sombre', toggleTheme: 'Mode clair ou sombre',
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
      appearance: 'Appearance', themeAuto: 'Automatic', themeLight: 'Light', themeDark: 'Dark', toggleTheme: 'Light or dark mode',
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

  let locating = null;
  function locate() {
    if (state.position) return Promise.resolve(state.position);
    // Localisation refusée ou indisponible récemment : on ne redemande pas tout de suite
    if (state.geoFailAt && Date.now() - state.geoFailAt < 5 * 60000) return Promise.resolve(null);
    if (locating) return locating;
    locating = new Promise((resolve) => {
      const done = (pos) => { locating = null; if (!pos) state.geoFailAt = Date.now(); resolve(pos); };
      if (!navigator.geolocation) return done(null);
      // Filet de sécurité : la demande d'autorisation peut rester sans réponse
      const guard = setTimeout(() => done(null), 12000);
      navigator.geolocation.getCurrentPosition(
        (p) => { clearTimeout(guard); state.position = { lat: p.coords.latitude, lon: p.coords.longitude, alt: p.coords.altitude, acc: p.coords.accuracy }; done(state.position); },
        () => { clearTimeout(guard); done(null); },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
      );
    });
    return locating;
  }

  /* ------------------------------------------------------------------ */
  /* Données : établissements partenaires                                */
  /* ------------------------------------------------------------------ */
  // Les hôpitaux, pharmacies et médecins sont référencés par l'équipe My Med Care
  // (partenariats) : l'utilisateur ne les ajoute pas. L'application affiche ceux
  // situés dans un rayon de 20 ou 50 km autour de la position du téléphone,
  // quel que soit le pays. Pour ce prototype, l'annuaire est généré à partir de
  // villes réelles avec des établissements fictifs (en production : back-office).
  const PLACE_TYPES = {
    hospitals: { title: 'hospitals', icon: 'hospital', color: 'c-blue' },
    pharmacies: { title: 'pharmacies', icon: 'pharmacy', color: 'c-green' },
    doctors: { title: 'doctors', icon: 'doctor', color: 'c-teal' },
  };
  // [ville, lat, lon] — la première est la ville de référence du pays
  const PARTNER_TOWNS = {
    FR: [['Paris', 48.8566, 2.3522], ['Boulogne-Billancourt', 48.8397, 2.2399], ['Saint-Denis', 48.9362, 2.3574], ['Versailles', 48.8049, 2.1204], ['Créteil', 48.7904, 2.4556], ['Meaux', 48.9601, 2.8788], ['Fontainebleau', 48.4047, 2.7016]],
    BE: [['Bruxelles', 50.8503, 4.3517], ['Ixelles', 50.8333, 4.3667], ['Uccle', 50.8000, 4.3333], ['Vilvorde', 50.9281, 4.4253], ['Louvain', 50.8798, 4.7005], ['Malines', 51.0259, 4.4776], ['Namur', 50.4674, 4.8720]],
    LU: [['Luxembourg', 49.6116, 6.1319], ['Esch-sur-Alzette', 49.4958, 5.9806], ['Ettelbruck', 49.8475, 6.1042], ['Echternach', 49.8117, 6.4214]],
    CH: [['Genève', 46.2044, 6.1432], ['Carouge', 46.1840, 6.1390], ['Nyon', 46.3833, 6.2396], ['Morges', 46.5113, 6.4985], ['Lausanne', 46.5197, 6.6323]],
    ES: [['Madrid', 40.4168, -3.7038], ['Getafe', 40.3083, -3.7327], ['Alcobendas', 40.5475, -3.6420], ['Alcalá de Henares', 40.4818, -3.3643], ['Móstoles', 40.3223, -3.8650], ['Aranjuez', 40.0311, -3.6025], ['Tolède', 39.8628, -4.0273]],
    PT: [['Lisbonne', 38.7223, -9.1393], ['Oeiras', 38.6970, -9.3110], ['Sintra', 38.8029, -9.3817], ['Almada', 38.6790, -9.1569], ['Cascais', 38.6979, -9.4215], ['Setúbal', 38.5244, -8.8882]],
    IT: [['Rome', 41.9028, 12.4964], ['Ostie', 41.7330, 12.2890], ['Tivoli', 41.9637, 12.7980], ['Frascati', 41.8075, 12.6800], ['Fiumicino', 41.7700, 12.2370], ['Civitavecchia', 42.0930, 11.7960]],
    DE: [['Berlin', 52.5200, 13.4050], ['Potsdam', 52.3906, 13.0645], ['Spandau', 52.5352, 13.1999], ['Oranienburg', 52.7545, 13.2370], ['Königs Wusterhausen', 52.3010, 13.6330], ['Brandebourg-sur-la-Havel', 52.4125, 12.5316]],
    AT: [['Innsbruck', 47.2692, 11.4041], ['Hall in Tirol', 47.2830, 11.5080], ['Seefeld', 47.3300, 11.1870], ['Schwaz', 47.3500, 11.7000], ['Neustift im Stubaital', 47.1100, 11.3060], ['Kufstein', 47.5830, 12.1700]],
    NL: [['Amsterdam', 52.3676, 4.9041], ['Haarlem', 52.3874, 4.6462], ['Amstelveen', 52.3114, 4.8701], ['Zaandam', 52.4420, 4.8292], ['Utrecht', 52.0907, 5.1214], ['Leyde', 52.1601, 4.4970]],
    GR: [['Athènes', 37.9838, 23.7275], ['Le Pirée', 37.9420, 23.6465], ['Kifissia', 38.0742, 23.8115], ['Glyfada', 37.8650, 23.7530], ['Marathon', 38.1530, 23.9630], ['Lavrio', 37.7140, 24.0560], ['Corinthe', 37.9407, 22.9527]],
    HR: [['Split', 43.5081, 16.4402], ['Solin', 43.5400, 16.4900], ['Trogir', 43.5170, 16.2510], ['Omiš', 43.4440, 16.6890], ['Makarska', 43.2970, 17.0170]],
    GB: [['Londres', 51.5072, -0.1276], ['Croydon', 51.3762, -0.0982], ['Watford', 51.6565, -0.3903], ['Richmond', 51.4613, -0.3037], ['Guildford', 51.2362, -0.5704], ['Brighton', 50.8225, -0.1372]],
    IE: [['Dublin', 53.3498, -6.2603], ['Dún Laoghaire', 53.2940, -6.1340], ['Swords', 53.4597, -6.2181], ['Bray', 53.2028, -6.0983]],
    MA: [['Marrakech', 31.6295, -7.9811], ['Tahannaout', 31.3510, -7.9500], ['Aït Ourir', 31.5640, -7.6620], ['Imlil', 31.1360, -7.9190]],
    TN: [['Tunis', 36.8065, 10.1815], ['La Marsa', 36.8782, 10.3247], ['Ariana', 36.8625, 10.1956], ['Hammamet', 36.4000, 10.6167]],
    US: [['New York', 40.7128, -74.0060], ['Jersey City', 40.7178, -74.0431], ['Yonkers', 40.9312, -73.8988], ['Hempstead', 40.7062, -73.6187], ['White Plains', 41.0340, -73.7629]],
    CA: [['Montréal', 45.5019, -73.5674], ['Laval', 45.6066, -73.7124], ['Longueuil', 45.5312, -73.5181], ['Saint-Jérôme', 45.7804, -74.0036]],
  };
  const PARTNER_TEMPLATES = {
    hospitals: [
      (c) => ({ name: `Hôpital universitaire de ${c}`, tag: 'Urgences 24h/24' }),
      (c) => ({ name: `Clinique internationale de ${c}`, tag: 'Patients étrangers' }),
      (c) => ({ name: `Centre hospitalier de ${c}`, tag: 'Urgences 24h/24' }),
    ],
    pharmacies: [
      (c) => ({ name: `Pharmacie centrale de ${c}`, tag: 'Ouverte 7j/7' }),
      (c) => ({ name: `Pharmacie de la Gare — ${c}`, tag: 'Garde de nuit' }),
      (c) => ({ name: `Pharmacie du Marché — ${c}`, tag: '' }),
    ],
    doctors: [
      (c) => ({ name: `Centre médical international — ${c}`, tag: 'Sans rendez-vous', specialty: 'Médecine générale' }),
      (c) => ({ name: `Cabinet de pédiatrie — ${c}`, tag: '', specialty: 'Pédiatre' }),
      (c) => ({ name: `Cabinet médical de ${c}`, tag: 'Parle anglais', specialty: 'Médecin généraliste' }),
    ],
  };
  // Annuaire : 2 établissements dans la ville de référence, 1 par ville voisine
  const PARTNERS = (() => {
    const out = [];
    Object.entries(PARTNER_TOWNS).forEach(([country, towns]) => {
      Object.entries(PARTNER_TEMPLATES).forEach(([type, tpls]) => {
        towns.forEach(([town, lat, lon], i) => {
          const picks = i === 0 ? [0, 1] : [(i + 1) % tpls.length];
          picks.forEach((k, j) => {
            const off = (i * 3 + j * 5 + k + type.length) % 7;
            out.push({
              id: `${country}-${type}-${i}-${j}`, country, type, town,
              lat: lat + (off - 3) * 0.004, lon: lon + ((off * 2) % 7 - 3) * 0.005,
              ...tpls[k](town),
            });
          });
        });
      });
    });
    return out;
  })();
  const RADII = [20, 50];
  const SPECIALTIES = ['Médecin généraliste', 'Pédiatre', 'Cardiologue', 'Dermatologue', 'Gynécologue', 'Ophtalmologue', 'ORL', 'Dentiste', 'Kinésithérapeute', 'Psychiatre', 'Autre spécialité'];

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
  /* ------------------------------------------------------------------ */
  /* Pays : numéros d'urgence et format de date (la langue reste celle   */
  /* de l'utilisateur, quel que soit le pays)                            */
  /* ------------------------------------------------------------------ */
  // n = numéro, l = libellé. « main » est le numéro composé par le bouton SOS.
  const COUNTRIES = {
    FR: { name: 'France', flag: '🇫🇷', locale: 'fr-FR', prefix: '+33', main: '112', tz: ['Europe/Paris'],
      numbers: [['112', 'Urgence européenne'], ['15', 'SAMU (médical)'], ['18', 'Pompiers'], ['17', 'Police'], ['114', 'Sourds / SMS'], ['3237', 'Pharmacie de garde']],
      mountain: ['112', 'PGHM / secours en montagne via le 112'] },
    BE: { name: 'Belgique', flag: '🇧🇪', locale: 'fr-BE', prefix: '+32', main: '112', tz: ['Europe/Brussels'],
      numbers: [['112', 'Ambulance & pompiers'], ['101', 'Police'], ['1733', 'Médecin de garde'], ['070 245 245', 'Centre antipoisons'], ['0903 99 000', 'Pharmacie de garde'], ['1813', 'Prévention suicide']],
      mountain: ['112', 'Secours via le 112'] },
    LU: { name: 'Luxembourg', flag: '🇱🇺', locale: 'fr-LU', prefix: '+352', main: '112', tz: ['Europe/Luxembourg'],
      numbers: [['112', 'Ambulance & pompiers'], ['113', 'Police'], ['8002 5500', 'Centre antipoisons']],
      mountain: ['112', 'Secours via le 112'] },
    CH: { name: 'Suisse', flag: '🇨🇭', locale: 'fr-CH', prefix: '+41', main: '144', tz: ['Europe/Zurich'],
      numbers: [['144', 'Ambulance'], ['112', 'Urgence européenne'], ['117', 'Police'], ['118', 'Pompiers'], ['1414', 'Rega (sauvetage aérien)'], ['145', 'Tox Info (poisons)']],
      mountain: ['1414', 'Rega — sauvetage en montagne (1415 en Valais : 144)'] },
    ES: { name: 'Espagne', flag: '🇪🇸', locale: 'es-ES', prefix: '+34', main: '112', tz: ['Europe/Madrid', 'Atlantic/Canary', 'Africa/Ceuta'],
      numbers: [['112', 'Urgences'], ['061', 'Urgences médicales'], ['091', 'Police nationale'], ['062', 'Guardia Civil'], ['080', 'Pompiers'], ['092', 'Police municipale']],
      mountain: ['112', 'Guardia Civil (GREIM) via le 112'] },
    PT: { name: 'Portugal', flag: '🇵🇹', locale: 'pt-PT', prefix: '+351', main: '112', tz: ['Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores'],
      numbers: [['112', 'Urgences'], ['808 24 24 24', 'SNS 24 (conseil médical)'], ['800 250 250', 'Centre antipoisons'], ['117', 'Feux de forêt']],
      mountain: ['112', 'Secours via le 112'] },
    IT: { name: 'Italie', flag: '🇮🇹', locale: 'it-IT', prefix: '+39', main: '112', tz: ['Europe/Rome'],
      numbers: [['112', 'Urgence européenne'], ['118', 'Ambulance'], ['113', 'Police'], ['115', 'Pompiers'], ['1530', 'Garde côtière'], ['1515', 'Feux de forêt']],
      mountain: ['118', 'Soccorso Alpino via le 118'] },
    DE: { name: 'Allemagne', flag: '🇩🇪', locale: 'de-DE', prefix: '+49', main: '112', tz: ['Europe/Berlin'],
      numbers: [['112', 'Ambulance & pompiers'], ['110', 'Police'], ['116 117', 'Médecin de garde'], ['19240', 'Centre antipoisons (Berlin)']],
      mountain: ['112', 'Bergwacht via le 112'] },
    AT: { name: 'Autriche', flag: '🇦🇹', locale: 'de-AT', prefix: '+43', main: '112', tz: ['Europe/Vienna'],
      numbers: [['112', 'Urgence européenne'], ['144', 'Ambulance'], ['133', 'Police'], ['122', 'Pompiers'], ['140', 'Secours en montagne'], ['141', 'Médecin de garde']],
      mountain: ['140', 'Bergrettung — secours en montagne'] },
    NL: { name: 'Pays-Bas', flag: '🇳🇱', locale: 'nl-NL', prefix: '+31', main: '112', tz: ['Europe/Amsterdam'],
      numbers: [['112', 'Urgences'], ['0900 8844', 'Police (non urgent)'], ['113', 'Prévention suicide']],
      mountain: ['112', 'Secours via le 112'] },
    GR: { name: 'Grèce', flag: '🇬🇷', locale: 'el-GR', prefix: '+30', main: '112', tz: ['Europe/Athens'],
      numbers: [['112', 'Urgence européenne'], ['166', 'Ambulance (EKAB)'], ['100', 'Police'], ['199', 'Pompiers'], ['1571', 'Police touristique'], ['108', 'Garde côtière']],
      mountain: ['112', 'Secours via le 112 (EKAB 166)'] },
    HR: { name: 'Croatie', flag: '🇭🇷', locale: 'hr-HR', prefix: '+385', main: '112', tz: ['Europe/Zagreb'],
      numbers: [['112', 'Urgences'], ['194', 'Ambulance'], ['192', 'Police'], ['193', 'Pompiers'], ['195', 'Secours en mer']],
      mountain: ['112', 'HGSS (secours en montagne) via le 112'] },
    GB: { name: 'Royaume-Uni', flag: '🇬🇧', locale: 'en-GB', prefix: '+44', main: '999', tz: ['Europe/London'],
      numbers: [['999', 'Urgences'], ['112', 'Urgences (fonctionne aussi)'], ['111', 'NHS (conseil médical)'], ['101', 'Police (non urgent)']],
      mountain: ['999', 'Demander « Police », puis « Mountain Rescue »'] },
    IE: { name: 'Irlande', flag: '🇮🇪', locale: 'en-IE', prefix: '+353', main: '112', tz: ['Europe/Dublin'],
      numbers: [['112', 'Urgences'], ['999', 'Urgences']],
      mountain: ['112', 'Demander « Garda », puis « Mountain Rescue »'] },
    MA: { name: 'Maroc', flag: '🇲🇦', locale: 'fr-MA', prefix: '+212', main: '15', tz: ['Africa/Casablanca'],
      numbers: [['15', 'Ambulance & pompiers'], ['19', 'Police'], ['177', 'Gendarmerie royale'], ['112', 'Urgences (depuis un mobile)']],
      mountain: ['177', 'Gendarmerie royale'] },
    TN: { name: 'Tunisie', flag: '🇹🇳', locale: 'fr-TN', prefix: '+216', main: '190', tz: ['Africa/Tunis'],
      numbers: [['190', 'SAMU'], ['197', 'Police'], ['198', 'Pompiers / protection civile']],
      mountain: ['198', 'Protection civile'] },
    US: { name: 'États-Unis', flag: '🇺🇸', locale: 'en-US', prefix: '+1', main: '911', tz: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Phoenix', 'America/Anchorage', 'Pacific/Honolulu'],
      numbers: [['911', 'Urgences'], ['1-800-222-1222', 'Centre antipoisons'], ['988', 'Détresse / suicide']],
      mountain: ['911', 'Secours via le 911'] },
    CA: { name: 'Canada', flag: '🇨🇦', locale: 'fr-CA', prefix: '+1', main: '911', tz: ['America/Toronto', 'America/Montreal', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax'],
      numbers: [['911', 'Urgences'], ['811', 'Info-Santé (conseil médical)']],
      mountain: ['911', 'Secours via le 911'] },
  };
  function detectCountry() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const hit = Object.keys(COUNTRIES).find((k) => COUNTRIES[k].tz.includes(tz));
      if (hit) return hit;
    } catch { /* Intl indisponible */ }
    const region = (navigator.language || '').split('-')[1];
    return region && COUNTRIES[region.toUpperCase()] ? region.toUpperCase() : 'FR';
  }
  const C = () => COUNTRIES[state.country] || COUNTRIES.FR;
  const fmtDate = (d, opts) => new Date(d).toLocaleDateString(C().locale, opts);
  const urg = (txt) => txt.replace(/\b112\b/g, C().main);
  const PHRASE_CATS = { all: 'Tout', urgence: 'Urgence', symptomes: 'Symptômes', infos: 'Mon état', pharmacie: 'Pharmacie' };

  /* ------------------------------------------------------------------ */
  /* Données : premiers secours                                          */
  /* ------------------------------------------------------------------ */
  const FIRST_AID = [
    { icon: 'heart', color: 'c-red', title: 'Arrêt cardiaque', steps: ['Appelez le 112 et demandez un défibrillateur.', 'Allongez la victime sur le dos, sur une surface dure.', 'Mains au centre de la poitrine, bras tendus.', 'Compressions : 100 à 120 par minute, 5 à 6 cm de profondeur.', 'Utilisez le défibrillateur dès qu’il arrive et suivez ses instructions.'] },
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

  // Accueil simplifié : le bouton SOS au centre, les fonctions principales autour
  const ORBIT = [
    { href: '#/translate', ic: 'translate', color: 'o-blue', key: 'translation' },
    { href: '#/places/hospitals', ic: 'hospital', color: 'o-red', key: 'hospitals' },
    { href: '#/places/pharmacies', ic: 'pharmacy', color: 'o-green', key: 'pharmacies' },
    { href: '#/places/doctors', ic: 'doctor', color: 'o-teal', key: 'doctors' },
    { href: '#/outdoor', ic: 'mountain', color: 'o-moss', key: 'outdoor' },
    { href: '#/profile', ic: 'id', color: 'o-violet', key: 'file' },
  ];
  function viewHomeRadial() {
    const p = state.profile;
    const n = ORBIT.length;
    // Positions sur un cercle (en % du carré), en partant d'en haut à gauche
    const pos = ORBIT.map((_, i) => {
      const a = (-120 + i * (360 / n)) * Math.PI / 180;
      return { x: 50 + 37 * Math.cos(a), y: 50 + 37 * Math.sin(a) };
    });
    return `
      <section class="r-home">
        <div class="r-greet">
          <small>${t('hello')}</small>
          <h1>${esc(p.firstName)} ${esc(p.lastName)}</h1>
          <a class="r-country" href="#/country">${C().flag} ${esc(C().name)} · urgences ${esc(C().main)}</a>
        </div>
        <div class="orbit">
          <svg class="orbit-lines" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="37" />
            ${pos.map((q) => `<line x1="50" y1="50" x2="${q.x.toFixed(2)}" y2="${q.y.toFixed(2)}" />`).join('')}
          </svg>
          ${ORBIT.map((o, i) => `
            <a class="sat" href="${o.href}" style="left:${pos[i].x.toFixed(2)}%;top:${pos[i].y.toFixed(2)}%">
              <span class="sat-ico ${o.color}">${icon(o.ic)}</span>
              <span class="sat-label">${t(o.key)}</span>
            </a>`).join('')}
          <a class="r-sos" href="#/sos" aria-label="SOS urgence"><span>SOS</span><small>${t('sosUrgence')}</small></a>
        </div>
        <div class="r-more">
          <a href="#/teleconsult">${icon('video')}${t('teleconsult')}</a>
          <a href="#/first-aid">${icon('heart')}${t('firstAid')}</a>
        </div>
        <svg class="r-mountains" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 120 L0 78 L60 40 L105 70 L170 18 L235 72 L280 46 L340 84 L400 56 L400 120 Z" />
          <path d="M0 120 L0 96 L80 64 L150 92 L220 58 L300 94 L360 74 L400 88 L400 120 Z" />
        </svg>
      </section>
      <div class="tagline">
        ${icon('shield')}<span>${t('tagline')}</span>
        <select id="langSelect" aria-label="${t('language')}">
          <option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>FR</option>
          <option value="en" ${state.lang === 'en' ? 'selected' : ''}>EN</option>
        </select>
      </div>`;
  }
  const viewHome = () => (state.homeLayout === 'radial' ? viewHomeRadial() : viewHomeClassic());

  function viewHomeClassic() {
    const p = state.profile;
    return `
      <section class="hero">
        <div class="hero-row">
          <div class="avatar">${esc(initials(p))}</div>
          <div><small>${t('hello')} 👋</small><h1>${esc(p.firstName)} ${esc(p.lastName)}</h1></div>
        </div>
        <div class="hero-meta">
          <a class="chip chip-link" href="#/country">${C().flag} ${esc(C().name)} · SOS ${esc(C().main)}</a>
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
        <p class="page-sub">Appuyez sur le bouton : après 5 secondes, l’appel au ${C().main} est lancé. Vous pouvez ensuite prévenir vos proches.</p>
        <a class="country-pill" href="#/country">${C().flag} ${esc(C().name)} · numéros locaux <span>Changer</span></a>
        <button class="sos-big" id="sosBig" aria-label="Déclencher l'alerte SOS"><div><span id="sosLabel">SOS</span><small id="sosSmall">APPUYER</small></div></button>
        <button class="btn ghost block" id="sosCancel" hidden>${t('cancel')}</button>
        <div class="card" id="sosCall" hidden style="text-align:left">
          <strong>Appelez maintenant le ${C().main}</strong>
          <p class="note" style="margin:4px 0 12px">Si l\u2019appel ne s\u2019est pas lancé, composez le numéro vous-même, puis prévenez vos proches ci-dessous.</p>
          <a class="btn red block" href="${tel(C().main)}">${icon('phone')} ${C().main}</a>
        </div>
      </div>
      <div class="section-title">Numéros d’urgence · ${C().flag} ${esc(C().name)} <a href="#/country">Changer</a></div>
      <div class="emergency-grid">
        ${C().numbers.map(([n, l]) => `<a href="${tel(n)}"><b class="${n.length > 5 ? 'long' : ''}">${esc(n)}</b><small>${esc(l)}</small></a>`).join('')}
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
        window.location.href = tel(C().main);
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

  /* --- Établissements partenaires --- */
  // Temps de trajet estimé à partir de la distance à vol d'oiseau
  // (détour routier ≈ ×1,3 ; 4,5 km/h à pied ; 50 km/h en voiture)
  const fmtMin = (m) => (m < 60 ? Math.max(1, Math.round(m)) + ' min' : Math.floor(m / 60) + ' h ' + String(Math.round(m % 60)).padStart(2, '0'));
  const travel = (km) => (km <= 1.5
    ? { mode: 'à pied', time: fmtMin((km * 1.3) / 4.5 * 60) }
    : { mode: 'en voiture', time: fmtMin((km * 1.3) / 50 * 60 + 3) });

  function placeItem(x, cfg) {
    const tr = travel(x.d);
    const badges = [
      x.specialty ? `<em class="badge info">${esc(x.specialty)}</em>` : '',
      x.tag ? `<em class="badge ${/urgence|24|ouvert|garde|sans/i.test(x.tag) ? 'open' : 'info'}">${esc(x.tag)}</em>` : '',
    ].join('');
    return `
      <div class="item place-item">
        <div class="ico ${cfg.color}">${icon(cfg.icon)}</div>
        <a class="body item-link" href="#/place/${esc(x.id)}">
          <strong>${esc(x.name)}</strong>
          <span>${esc(x.town)} ${COUNTRIES[x.country] ? COUNTRIES[x.country].flag : ''} · <u>Voir la fiche</u></span>
          ${badges ? `<span class="badges">${badges}</span>` : ''}
        </a>
        <a class="dist" href="#/place/${esc(x.id)}" aria-label="À ${fmtDist(x.d)} de vous, environ ${tr.time} ${tr.mode}">
          <b>${fmtDist(x.d)}</b>
          <small>≈ ${tr.time}<br>${tr.mode}</small>
        </a>
        <div class="actions">
          ${x.phone ? `<a class="round green" href="${tel(x.phone)}" aria-label="${t('call')}">${icon('phone')}</a>` : ''}
          <a class="round" href="${mapsUrl(x.lat, x.lon)}" target="_blank" rel="noopener" aria-label="${t('route')}">${icon('nav')}</a>
        </div>
      </div>`;
  }

  // Point de recherche : GPS du téléphone, sinon ville de référence du pays
  // choisi (position simulée, pour la démonstration).
  async function searchOrigin() {
    const pos = await locate();
    if (pos) return { lat: pos.lat, lon: pos.lon, real: true };
    const town = (PARTNER_TOWNS[state.country] || PARTNER_TOWNS.FR)[0];
    return { lat: town[1], lon: town[2], real: false, town: town[0] };
  }

  function viewPlaces(type) {
    const cfg = PLACE_TYPES[type];
    if (!cfg) return viewNotFound();
    return `
      <h1 class="page-title">${t(cfg.title)}</h1>
      <p class="page-sub">Établissements partenaires de My Med Care autour de vous, du plus proche au plus éloigné.</p>
      <div class="segmented" id="placeTabs">
        ${Object.keys(PLACE_TYPES).map((k) => `<button data-k="${k}" class="${k === type ? 'active' : ''}">${t(PLACE_TYPES[k].title)}</button>`).join('')}
      </div>
      <div class="radius-row">
        <span>${icon('pin', 'class="inline-ico"')} Rayon autour de vous</span>
        <div class="segmented mini" id="radiusSeg">${RADII.map((r) => `<button data-r="${r}" class="${state.radius === r ? 'active' : ''}">${r} km</button>`).join('')}</div>
      </div>
      <label class="search">${icon('search')}<input id="placeSearch" type="search" placeholder="${t('search')}" /></label>
      <div id="placeList"><div class="empty"><div class="spinner"></div>${t('locating')}</div></div>`;
  }
  function bindPlaces(type) {
    const cfg = PLACE_TYPES[type];
    if (!cfg) return;
    let origin = null;
    const draw = () => {
      if (!origin) return;
      const f = ($('#placeSearch').value || '').trim().toLowerCase();
      const items = PARTNERS
        .filter((x) => x.type === type)
        .map((x) => ({ ...x, d: distanceKm(origin, x) }))
        .filter((x) => x.d <= state.radius)
        .filter((x) => !f || [x.name, x.town, x.specialty].join(' ').toLowerCase().includes(f))
        .sort((a, b) => a.d - b.d);
      const where = origin.real ? 'votre position' : `${esc(origin.town)} ${C().flag} (position simulée)`;
      const maxR = RADII[RADII.length - 1];
      $('#placeList').innerHTML = `
        <p class="note place-origin">${icon('pin', 'class="inline-ico"')} ${items.length} partenaire(s) à moins de ${state.radius} km de ${where}.${origin.real ? '' : '<br>Autorisez la localisation pour chercher autour de votre position réelle.'}</p>
        ${items.length ? `<div class="list">${items.map((x) => placeItem(x, cfg)).join('')}</div>`
          : `<div class="empty">Aucun partenaire à moins de ${state.radius} km.${state.radius < maxR ? `<br><button class="btn ghost" id="widen" style="margin-top:12px">Élargir à ${maxR} km</button>` : ''}</div>`}`;
      const widen = $('#widen');
      if (widen) widen.addEventListener('click', () => setRadius(maxR));
    };
    const setRadius = (r) => {
      state.radius = r; store.set('radius', r);
      document.querySelectorAll('#radiusSeg button').forEach((x) => x.classList.toggle('active', Number(x.dataset.r) === r));
      draw();
    };
    document.querySelectorAll('#placeTabs button').forEach((b) => b.addEventListener('click', () => { location.hash = '#/places/' + b.dataset.k; }));
    document.querySelectorAll('#radiusSeg button').forEach((b) => b.addEventListener('click', () => setRadius(Number(b.dataset.r))));
    $('#placeSearch').addEventListener('input', draw);
    searchOrigin().then((o) => {
      if (currentRoute().name !== 'places' || currentRoute().arg !== type) return;
      origin = o; draw();
    });
  }

  /* --- Fiche d'un établissement partenaire --- */
  const hashOf = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  // Informations complémentaires (en production : saisies par le partenaire dans le back-office)
  function placeDetails(x) {
    const h = hashOf(x.id);
    const pick = (arr, n) => arr.filter((_, i) => ((h >> i) & 1) || i < n).slice(0, Math.max(n, 3));
    const langs = ['Langue locale', 'Anglais', ...(h % 2 ? ['Français'] : []), ...(h % 3 === 0 ? ['Allemand'] : [])];
    if (x.type === 'hospitals') {
      const er = /urgence/i.test(x.tag);
      return {
        kind: 'Hôpital', hours: er ? [['Urgences', '24h/24 · 7j/7'], ['Consultations', 'Lun–Ven 8h–18h'], ['Visites', 'Tous les jours 13h–20h']] : [['Accueil', 'Lun–Ven 7h30–19h'], ['Consultations', 'Lun–Sam 8h–18h']],
        services: pick(['Service d’urgences', 'Imagerie (radio, scanner, IRM)', 'Pédiatrie', 'Maternité', 'Traumatologie', 'Cardiologie', 'Laboratoire', 'Pharmacie hospitalière'], 4),
        langs, beds: 120 + (h % 9) * 40,
        about: `${x.name} accueille les voyageurs et prend en charge les urgences comme les consultations programmées. Un service d’accueil international aide pour les formalités et l’assurance.`,
        extras: [['Lits', String(120 + (h % 9) * 40)], ['Accès handicapé', 'Oui'], ['Parking', h % 2 ? 'Gratuit' : 'Payant'], ['Carte européenne d’assurance maladie', 'Acceptée']],
      };
    }
    if (x.type === 'pharmacies') {
      const night = /garde/i.test(x.tag);
      return {
        kind: 'Pharmacie', hours: night ? [['Lun–Sam', '8h30–20h'], ['Garde de nuit', '20h–8h30 (sonnette)'], ['Dimanche', 'Selon le tour de garde']] : [['Lun–Ven', '8h30–19h30'], ['Samedi', '9h–19h'], ['Dimanche', /7j/.test(x.tag) ? '10h–18h' : 'Fermé']],
        services: pick(['Conseil santé voyage', 'Trousse de premiers secours', 'Médicaments sans ordonnance', 'Renouvellement d’ordonnance étrangère (selon la loi)', 'Matériel orthopédique', 'Tests rapides', 'Vaccination'], 4),
        langs, about: `Pharmacie partenaire de My Med Care. L’équipe conseille les voyageurs et aide à trouver l’équivalent local d’un médicament habituel.`,
        extras: [['Paiement par carte', 'Oui'], ['Accès handicapé', h % 2 ? 'Oui' : 'Partiel'], ['Livraison', h % 3 ? 'Non' : 'Oui, dans la ville']],
      };
    }
    return {
      kind: x.specialty || 'Médecin', hours: [['Lun–Ven', '8h–19h'], ['Samedi', '9h–13h'], ['Dimanche', 'Fermé']],
      services: pick(['Consultation au cabinet', 'Visite à domicile / à l’hôtel', 'Certificats médicaux', 'Vaccinations voyage', 'Petite chirurgie', 'Téléconsultation'], 4),
      langs, about: `${x.name} reçoit les patients de passage, avec ou sans rendez-vous selon les disponibilités. Le cabinet peut délivrer une facture détaillée pour votre assurance voyage.`,
      extras: [['Rendez-vous', /sans/i.test(x.tag) ? 'Sans rendez-vous' : 'Sur rendez-vous'], ['Délai moyen', (h % 4 + 1) + ' jour(s)'], ['Accès handicapé', h % 2 ? 'Oui' : 'Non']],
    };
  }
  function viewPlace(id) {
    const x = PARTNERS.find((p) => p.id === id);
    if (!x) return viewNotFound();
    const cfg = PLACE_TYPES[x.type], det = placeDetails(x), c = COUNTRIES[x.country] || C();
    return `
      <div class="fiche-hero ${cfg.color}">
        <div class="ico">${icon(cfg.icon)}</div>
        <div class="body">
          <small>${esc(det.kind)} · Partenaire My Med Care</small>
          <h1>${esc(x.name)}</h1>
          <span>${esc(x.town)} ${c.flag} ${esc(c.name)}</span>
          ${x.tag ? `<em class="badge open">${esc(x.tag)}</em>` : ''}
        </div>
      </div>
      <div class="fiche-dist" id="ficheDist"><div class="spinner" style="margin:0"></div><span>Calcul de la distance…</span></div>
      <div class="btn-row">
        <a class="btn" href="${mapsUrl(x.lat, x.lon)}" target="_blank" rel="noopener">${icon('nav')} ${t('route')}</a>
        <a class="btn ghost" href="#/places/${x.type}">${icon('back')} Liste</a>
      </div>
      <div class="section-title">Horaires</div>
      <div class="card">${det.hours.map(([k, v]) => `<div class="kv"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div>
      <div class="section-title">Services</div>
      <div class="card"><div class="tags">${det.services.map((v) => `<span class="tag">${esc(v)}</span>`).join('')}</div></div>
      <div class="section-title">Langues parlées</div>
      <div class="card"><div class="tags">${det.langs.map((v) => `<span class="tag teal">${esc(v)}</span>`).join('')}</div></div>
      <div class="section-title">Présentation</div>
      <div class="card"><p class="fiche-text">${esc(det.about)}</p>
        ${det.extras.map(([k, v]) => `<div class="kv"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}
        <div class="kv"><span>Coordonnées GPS</span><b>${x.lat.toFixed(4)}, ${x.lon.toFixed(4)}</b></div>
      </div>
      <p class="note">Établissement fictif, présenté comme exemple dans ce prototype.</p>`;
  }
  function bindPlace(id) {
    const x = PARTNERS.find((p) => p.id === id);
    if (!x) return;
    searchOrigin().then((o) => {
      const el = $('#ficheDist');
      if (!el || currentRoute().arg !== id) return;
      const d = distanceKm(o, x), tr = travel(d);
      el.innerHTML = `${icon('pin')}<div><b>${fmtDist(d)}</b> de ${o.real ? 'votre position' : esc(o.town) + ' (position simulée)'}<small>≈ ${tr.time} ${tr.mode}${tr.mode === 'à pied' ? '' : ` · ≈ ${fmtMin((d * 1.3) / 4.5 * 60)} à pied`}</small></div>`;
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
          <div><div class="muted">CARTE MÉDICALE D’URGENCE</div><h2>${esc(p.firstName)} ${esc(p.lastName)}</h2><div class="muted">Né(e) le ${p.birth ? fmtDate(p.birth) : '—'}</div></div>
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
        <a class="item" href="${tel(C().mountain[0])}">
          <div class="ico c-red">${icon('phone')}</div>
          <div class="body"><strong>Secours en montagne · ${C().flag} ${C().mountain[0]}</strong><span>${esc(C().mountain[1])}</span></div>
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
      <ol>${x.steps.map((s) => `<li>${esc(urg(s))}</li>`).join('')}</ol>
    </details>`;
  const viewFirstAid = () => `
    <h1 class="page-title">${t('firstAid')}</h1>
    <p class="page-sub">Les bons gestes, étape par étape. En cas de doute, appelez le ${C().main} (${C().flag} ${C().name}).</p>
    ${FIRST_AID.map(accordion).join('')}
    <a class="btn red block" href="${tel(C().main)}" style="margin-top:16px">${icon('phone')} Appeler le ${C().main}</a>`;

  /* --- Téléconsultation --- */
  // Médecins adhérents : chacun fixe son tarif (forfait par consultation ou tarif horaire)
  const DOCS_ONLINE = [
    { id: 'd1', name: 'Dr Sophie Laurent', spec: 'Médecin généraliste', wait: '5 min', langs: 'FR · EN', priceType: 'forfait', price: 25, duration: 15, rating: 4.9, reviews: 312, years: 14, country: 'FR',
      bio: 'Médecin généraliste à Lyon, habituée aux problèmes de santé des voyageurs : infections, traumatismes légers, renouvellement de traitement.', education: ['Doctorat en médecine — Université Lyon 1', 'DU de médecine des voyages'] },
    { id: 'd2', name: 'Dr Antoine Moreau', spec: 'Pédiatre', wait: '12 min', langs: 'FR · ES', priceType: 'forfait', price: 35, duration: 20, rating: 4.8, reviews: 184, years: 11, country: 'BE',
      bio: 'Pédiatre à Bruxelles. Conseils pour les enfants en vacances : fièvre, déshydratation, piqûres, mal des transports.', education: ['Docteur en médecine — ULB', 'Spécialisation en pédiatrie — HUDERF'] },
    { id: 'd3', name: 'Dr Elena Rossi', spec: 'Dermatologue', wait: '20 min', langs: 'FR · IT · EN', priceType: 'horaire', price: 90, rating: 4.7, reviews: 97, years: 9, country: 'IT',
      bio: 'Dermatologue à Milan. Coups de soleil, allergies cutanées, morsures et piqûres, éruptions inexpliquées en voyage.', education: ['Laurea in Medicina — Università di Milano', 'Specializzazione in Dermatologia'] },
    { id: 'd4', name: 'Dr James Carter', spec: 'Médecin généraliste', wait: '8 min', langs: 'EN · DE', priceType: 'horaire', price: 70, rating: 4.8, reviews: 256, years: 18, country: 'GB',
      bio: 'Médecin généraliste à Londres, ancien médecin d’expédition en montagne. Mal aigu des montagnes, blessures sportives, conseils de rapatriement.', education: ['MBBS — King’s College London', 'Diploma in Mountain Medicine'] },
    { id: 'd5', name: 'Dr Nadia Benali', spec: 'Psychiatre', wait: '30 min', langs: 'FR · AR', priceType: 'horaire', price: 110, rating: 5.0, reviews: 63, years: 12, country: 'FR',
      bio: 'Psychiatre à Marseille. Soutien en cas de crise d’angoisse, de choc après un accident ou de difficultés liées à l’éloignement.', education: ['Doctorat en médecine — Aix-Marseille Université', 'DES de psychiatrie'] },
  ];
  const fmtEUR = (n) => Number(n).toLocaleString('fr-FR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + ' €';
  const priceMain = (d) => d.priceType === 'horaire' ? `${fmtEUR(d.price)}<small>/ heure</small>` : `${fmtEUR(d.price)}<small>forfait</small>`;
  const priceDetail = (d) => d.priceType === 'horaire'
    ? `Tarif horaire : ${fmtEUR(d.price)} / h, soit ${fmtEUR(Math.round(d.price / 4 * 100) / 100)} pour 15 min`
    : `Forfait : ${fmtEUR(d.price)} la consultation${d.duration ? ` (jusqu’à ${d.duration} min)` : ''}`;
  let teleFilter = 'all';
  let teleSelected = null;
  const allTeleDocs = () => [...state.teleDocs.map((d) => ({ ...d, custom: true })), ...DOCS_ONLINE];

  function viewTeleconsult() {
    const docs = allTeleDocs().filter((d) => teleFilter === 'all' || d.priceType === teleFilter);
    return `
      <h1 class="page-title">${t('teleconsult')}</h1>
      <p class="page-sub">Consultez un médecin en vidéo, 24h/24. Chaque médecin adhérent affiche son tarif : forfait par consultation ou tarif horaire.</p>
      <div class="segmented" id="teleFilter">
        ${[['all', 'Tous'], ['forfait', 'Forfait'], ['horaire', 'Tarif horaire']].map(([k, l]) => `<button data-f="${k}" class="${teleFilter === k ? 'active' : ''}">${l}</button>`).join('')}
      </div>
      <div class="list">
        ${docs.map((d) => `
          <div class="item doc-item${teleSelected === d.id ? ' selected' : ''}">
            <div class="ico c-blue">${icon('doctor')}</div>
            <div class="body">
              <a class="item-link" href="#/doctor/${esc(d.id)}"><strong>${esc(d.name)}</strong></a>
              <span>${esc(d.spec)} · ${esc(d.langs)} · <a class="link-accent" href="#/doctor/${esc(d.id)}">Voir la fiche</a></span>
              <span class="badges">
                ${d.custom ? '<em class="badge warn">Nouvel adhérent</em>' : `<em class="badge info">★ ${d.rating.toFixed(1).replace('.', ',')}</em>`}
                <em class="badge open">${icon('clock', 'width="12" height="12"')} Attente ~${esc(d.wait)}</em>
              </span>
            </div>
            <button class="price" data-consult="${esc(d.id)}" aria-label="Consulter ${esc(d.name)}, ${d.priceType === 'horaire' ? 'tarif horaire' : 'forfait'} ${fmtEUR(d.price)}">
              <b>${priceMain(d)}</b>
              <span>${icon('video')} Consulter</span>
            </button>
          </div>
          ${teleSelected === d.id ? `
          <div class="card consult-panel">
            <strong>Consultation vidéo avec ${esc(d.name)}</strong>
            <div class="kv"><span>Spécialité</span><b>${esc(d.spec)}</b></div>
            <div class="kv"><span>Tarif fixé par le médecin</span><b>${d.priceType === 'horaire' ? fmtEUR(d.price) + ' / h' : fmtEUR(d.price)}</b></div>
            <p class="note" style="margin:6px 0 0">${priceDetail(d)}. Votre fiche médicale est transmise au médecin au début de la consultation.</p>
            ${d.custom ? `<button type="button" class="btn ghost block danger" data-remove-doc="${esc(d.id)}" style="margin-top:12px">${icon('trash')} Retirer ce médecin</button>` : ''}
            <div class="btn-row"><button class="btn ghost" id="consultCancel">${t('cancel')}</button><button class="btn teal" id="consultStart">${icon('video')} Démarrer</button></div>
          </div>` : ''}`).join('') || `<div class="empty">Aucun médecin pour ce type de tarif.</div>`}
      </div>

      <div class="join-card">
        <div class="ico c-teal">${icon('doctor')}</div>
        <div class="body"><strong>Vous êtes médecin ?</strong><span>Rejoignez la plateforme et affichez votre tarif de téléconsultation.</span></div>
        <a class="btn teal" href="#/join-doctor">Adhérer</a>
      </div>`;
  }
  function bindTeleconsult() {
    document.querySelectorAll('#teleFilter button').forEach((b) => b.addEventListener('click', () => { teleFilter = b.dataset.f; teleSelected = null; render(); }));
    document.querySelectorAll('[data-consult]').forEach((b) => b.addEventListener('click', () => {
      teleSelected = teleSelected === b.dataset.consult ? null : b.dataset.consult;
      const y = $('#app').scrollTop; render(); $('#app').scrollTop = y; window.scrollTo(0, y);
    }));
    const cancel = $('#consultCancel');
    if (cancel) cancel.addEventListener('click', () => { teleSelected = null; const y = $('#app').scrollTop; render(); $('#app').scrollTop = y; });
    const start = $('#consultStart');
    if (start) start.addEventListener('click', () => {
      const d = allTeleDocs().find((x) => x.id === teleSelected);
      toast(`Connexion avec ${d.name}…`);
    });
    document.querySelectorAll('[data-remove-doc]').forEach((b) => b.addEventListener('click', () => {
      state.teleDocs = state.teleDocs.filter((d) => d.id !== b.dataset.removeDoc);
      store.set('teleDocs', state.teleDocs); teleSelected = null; toast('Médecin retiré'); render();
    }));
  }

  /* --- Fiche d'un médecin de téléconsultation --- */
  function viewDoctor(id) {
    const d = allTeleDocs().find((x) => x.id === id);
    if (!d) return viewNotFound();
    const init = d.name.replace(/^Dr\.?\s*/, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    const c = COUNTRIES[d.country];
    const slots = ['Maintenant', '+30 min', '+1 h', '18:00', '19:30', 'Demain 9:00'];
    return `
      <div class="doc-hero">
        <div class="doc-avatar">${esc(init)}</div>
        <div class="body">
          <small>${d.custom ? 'Nouvel adhérent' : 'Médecin adhérent · téléconsultation'}</small>
          <h1>${esc(d.name)}</h1>
          <span>${esc(d.spec)}${c ? ` · exerce en ${esc(c.name)} ${c.flag}` : ''}</span>
          <div class="doc-stats">
            ${d.rating ? `<span>★ ${d.rating.toFixed(1).replace('.', ',')}<small>${d.reviews || 0} avis</small></span>` : ''}
            ${d.years ? `<span>${d.years} ans<small>d’expérience</small></span>` : ''}
            <span>~${esc(d.wait)}<small>d’attente</small></span>
          </div>
        </div>
      </div>

      <div class="section-title">Tarif de la téléconsultation</div>
      <div class="price-card">
        <div class="amount">${d.priceType === 'horaire' ? `${fmtEUR(d.price)}<small>/ heure</small>` : `${fmtEUR(d.price)}<small>forfait</small>`}</div>
        <div class="body">
          <strong>${d.priceType === 'horaire' ? 'Tarif horaire' : 'Forfait par consultation'}</strong>
          <span>${priceDetail(d)}.</span>
          <span>Tarif fixé par le médecin.</span>
        </div>
      </div>

      <div class="section-title">Prochaines disponibilités</div>
      <div class="slots" id="slots">${slots.map((sl, i) => `<button class="${i === 0 ? 'active' : ''}" data-slot="${esc(sl)}">${esc(sl)}</button>`).join('')}</div>
      <button class="btn teal block" id="docStart" style="margin-top:14px">${icon('video')} Démarrer la téléconsultation · ${d.priceType === 'horaire' ? fmtEUR(d.price) + ' / h' : fmtEUR(d.price)}</button>

      <div class="section-title">Présentation</div>
      <div class="card"><p class="fiche-text">${esc(d.bio || 'Ce médecin vient de rejoindre la plateforme : sa présentation sera bientôt disponible.')}</p></div>
      <div class="section-title">Informations</div>
      <div class="card">
        <div class="kv"><span>Spécialité</span><b>${esc(d.spec)}</b></div>
        <div class="kv"><span>Langues</span><b>${esc(d.langs)}</b></div>
        ${(d.education || []).map((e, i) => `<div class="kv"><span>${i ? '' : 'Formation'}</span><b style="text-align:right;max-width:65%">${esc(e)}</b></div>`).join('')}
        ${d.rpps ? `<div class="kv"><span>N° professionnel</span><b>${esc(d.rpps)}</b></div>` : ''}
        <div class="kv"><span>Ordonnance électronique</span><b>Oui</b></div>
        <div class="kv"><span>Facture pour l’assurance</span><b>Oui</b></div>
      </div>
      ${d.custom ? '' : `
      <div class="section-title">Avis de patients</div>
      <div class="list">
        <div class="card review"><b>★★★★★</b><p>« Réponse rapide alors que j’étais en randonnée. Très rassurant. »</p><small>Patient vérifié · il y a 2 semaines</small></div>
        <div class="card review"><b>★★★★★</b><p>« Explications claires et ordonnance reçue tout de suite. »</p><small>Patient vérifié · il y a 1 mois</small></div>
      </div>`}
      <p class="note">Médecin fictif, présenté comme exemple dans ce prototype.</p>`;
  }
  function bindDoctor(id) {
    const d = allTeleDocs().find((x) => x.id === id);
    if (!d) return;
    let slot = 'Maintenant';
    document.querySelectorAll('#slots button').forEach((b) => b.addEventListener('click', () => {
      slot = b.dataset.slot;
      document.querySelectorAll('#slots button').forEach((x) => x.classList.toggle('active', x === b));
      $('#docStart').innerHTML = icon('video') + (slot === 'Maintenant' ? ' Démarrer la téléconsultation' : ' Réserver · ' + slot);
    }));
    $('#docStart').addEventListener('click', () => toast(slot === 'Maintenant' ? `Connexion avec ${d.name}…` : `Rendez-vous réservé : ${slot}`));
  }

  /* --- Adhésion d'un médecin à la téléconsultation --- */
  function viewJoinDoctor() {
    return `
      <h1 class="page-title">Adhérer à la plateforme</h1>
      <p class="page-sub">Créez votre profil de téléconsultation. Vous choisissez votre mode de tarification : un forfait par consultation ou un tarif horaire. * champ obligatoire</p>
      <form id="joinForm" class="card" novalidate>
        <div class="field"><label for="j-name">Nom affiché *</label><input id="j-name" name="name" placeholder="Ex. Dr Claire Dubois" autocomplete="name" />
          <small class="field-error" id="err-j-name" hidden>Indiquez votre nom.</small></div>
        <div class="field"><label for="j-spec">Spécialité</label>
          <select id="j-spec" name="spec">${SPECIALTIES.map((sp) => `<option>${sp}</option>`).join('')}</select></div>
        <div class="field"><label for="j-rpps">N° RPPS / INAMI</label><input id="j-rpps" name="rpps" inputmode="numeric" placeholder="Numéro d’identification professionnelle" /></div>
        <div class="field"><label for="j-langs">Langues parlées</label><input id="j-langs" name="langs" value="FR" placeholder="FR, EN…" /></div>

        <fieldset class="field price-mode">
          <legend>Mode de tarification</legend>
          <label class="radio-card"><input type="radio" name="priceType" value="forfait" checked /><span><b>Forfait</b><small>Un prix fixe par consultation</small></span></label>
          <label class="radio-card"><input type="radio" name="priceType" value="horaire" /><span><b>Tarif horaire</b><small>Facturé selon la durée</small></span></label>
        </fieldset>
        <div class="two">
          <div class="field"><label for="j-price" id="j-price-label">Prix du forfait (€) *</label><input id="j-price" name="price" type="number" min="0" step="0.5" inputmode="decimal" placeholder="25" />
            <small class="field-error" id="err-j-price" hidden>Indiquez un montant supérieur à 0.</small></div>
          <div class="field" id="j-dur-wrap"><label for="j-dur">Durée incluse (min)</label><input id="j-dur" name="duration" type="number" min="5" step="5" value="15" /></div>
        </div>
        <div class="price-preview" id="j-preview">Aperçu : <b>—</b></div>
        <div class="field" style="margin-top:14px"><label for="j-wait">Délai de réponse habituel</label>
          <select id="j-wait" name="wait"><option>5 min</option><option selected>10 min</option><option>15 min</option><option>30 min</option><option>1 h</option></select></div>
        <div class="btn-row"><a class="btn ghost" href="#/teleconsult">${t('cancel')}</a><button class="btn" type="submit">${icon('check')} Publier mon profil</button></div>
      </form>`;
  }
  function bindJoinDoctor() {
    const form = $('#joinForm');
    const mode = () => form.querySelector('input[name=priceType]:checked').value;
    const update = () => {
      const m = mode(), v = parseFloat($('#j-price').value);
      $('#j-price-label').textContent = (m === 'horaire' ? 'Tarif horaire (€ / h)' : 'Prix du forfait (€)') + ' *';
      $('#j-dur-wrap').hidden = m === 'horaire';
      $('#j-price').placeholder = m === 'horaire' ? '70' : '25';
      $('#j-preview').innerHTML = 'Aperçu : <b>' + (v > 0 ? priceDetail({ priceType: m, price: v, duration: parseInt($('#j-dur').value, 10) || 0 }) : '—') + '</b>';
    };
    form.addEventListener('input', (e) => { update(); if (e.target.classList.contains('invalid')) { e.target.classList.remove('invalid'); const er = $('#err-' + e.target.id); if (er) er.hidden = true; } });
    form.addEventListener('change', update);
    update();
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get('name') || '').trim(), price = parseFloat(fd.get('price'));
      const nameBad = !name, priceBad = !(price > 0);
      $('#err-j-name').hidden = !nameBad; $('#err-j-price').hidden = !priceBad;
      $('#j-name').classList.toggle('invalid', nameBad); $('#j-price').classList.toggle('invalid', priceBad);
      if (nameBad) return $('#j-name').focus();
      if (priceBad) return $('#j-price').focus();
      const doc = {
        id: 't' + Date.now().toString(36), name, spec: fd.get('spec'),
        langs: String(fd.get('langs') || 'FR').split(/[,·\s]+/).filter(Boolean).map((x) => x.toUpperCase()).join(' · '),
        priceType: fd.get('priceType'), price, duration: fd.get('priceType') === 'forfait' ? parseInt(fd.get('duration'), 10) || 0 : 0,
        wait: fd.get('wait'), rpps: String(fd.get('rpps') || '').trim(),
      };
      state.teleDocs.unshift(doc); store.set('teleDocs', state.teleDocs);
      teleFilter = 'all'; teleSelected = null;
      toast('Profil publié : ' + name);
      location.hash = '#/teleconsult';
    });
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
    <div class="section-title">Pays de séjour</div>
    <a class="item" href="#/country">
      <span class="flag">${C().flag}</span>
      <div class="body"><strong>${esc(C().name)}</strong><span>${state.countryAuto ? 'Détecté automatiquement' : 'Choisi manuellement'} · urgences ${esc(C().main)}</span></div>
      <span class="round">${icon('chev')}</span>
    </a>
    <div class="section-title">Écran d\u2019accueil</div>
    <div class="segmented" id="homeSeg" style="margin:0">
      ${[['radial', 'Simplifié'], ['classic', 'Détaillé']].map(([k, l]) => `<button data-home="${k}" class="${state.homeLayout === k ? 'active' : ''}">${l}</button>`).join('')}
    </div>
    <div class="section-title">${t('appearance')}</div>
    <div class="segmented" id="themeSeg" style="margin:0">
      ${['auto', 'light', 'dark'].map((k) => `<button data-theme-opt="${k}" class="${state.theme === k ? 'active' : ''}">${t('theme' + k[0].toUpperCase() + k.slice(1))}</button>`).join('')}
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
    document.querySelectorAll('[data-theme-opt]').forEach((b) => b.addEventListener('click', () => setTheme(b.dataset.themeOpt)));
    document.querySelectorAll('[data-home]').forEach((b) => b.addEventListener('click', () => {
      state.homeLayout = b.dataset.home; store.set('homeLayout', state.homeLayout);
      document.querySelectorAll('[data-home]').forEach((x) => x.classList.toggle('active', x === b));
      toast(state.homeLayout === 'radial' ? 'Accueil simplifié' : 'Accueil détaillé');
    }));
    $('#resetData').addEventListener('click', () => { $('#resetConfirm').hidden = false; });
    $('#resetNo').addEventListener('click', () => { $('#resetConfirm').hidden = true; });
    $('#resetYes').addEventListener('click', () => {
      ['profile', 'contacts', 'meds', 'tracking', 'readNotifs', 'teleDocs', 'radius'].forEach((k) => { try { localStorage.removeItem('mmc:' + k); } catch { /* */ } });
      state.profile = { ...DEFAULT_PROFILE }; state.contacts = [...DEFAULT_CONTACTS]; state.meds = [...DEFAULT_MEDS]; state.readNotifs = false; state.teleDocs = []; state.radius = 20;
      toast('Données réinitialisées'); render();
    });
  }

  /* --- Pays de séjour --- */
  let countryQuery = '';
  function viewCountry() {
    const c = C();
    const q = countryQuery.trim().toLowerCase();
    const list = Object.entries(COUNTRIES)
      .filter(([k, x]) => !q || x.name.toLowerCase().includes(q) || k.toLowerCase() === q)
      .sort((a, b) => a[1].name.localeCompare(b[1].name, 'fr'));
    return `
      <h1 class="page-title">Pays de séjour</h1>
      <p class="page-sub">Les numéros d’urgence et le format des dates s’adaptent au pays où vous êtes. L’application reste dans votre langue.</p>
      <div class="country-hero">
        <span class="flag">${c.flag}</span>
        <div class="body"><small>${state.countryAuto ? 'Détecté automatiquement' : 'Choisi manuellement'}</small><strong>${esc(c.name)}</strong>
          <span>SOS : ${esc(c.main)} · Date : ${fmtDate('2026-08-24')} · Indicatif ${esc(c.prefix)}</span></div>
      </div>
      <label class="item toggle-row" style="margin-top:12px">
        <div class="ico c-teal">${icon('globe')}</div>
        <div class="body"><strong>Détection automatique</strong><span>Selon le fuseau horaire du téléphone</span></div>
        <span class="switch"><input type="checkbox" id="countryAuto" ${state.countryAuto ? 'checked' : ''}/><i></i></span>
      </label>
      <div class="section-title">Choisir un pays</div>
      <label class="search">${icon('search')}<input id="countrySearch" type="search" placeholder="${t('search')}" value="${esc(countryQuery)}" /></label>
      <div class="list" id="countryList">
        ${list.map(([k, x]) => `
          <button class="item country-item${k === state.country ? ' selected' : ''}" data-country="${k}">
            <span class="flag">${x.flag}</span>
            <div class="body"><strong>${esc(x.name)}</strong><span>Urgences ${esc(x.main)} · ${esc(x.prefix)}</span></div>
            ${k === state.country ? `<span class="round green">${icon('check')}</span>` : ''}
          </button>`).join('') || `<div class="empty">${t('noResult')}</div>`}
      </div>`;
  }
  function bindCountry() {
    $('#countryAuto').addEventListener('change', (e) => {
      state.countryAuto = e.target.checked; store.set('countryAuto', state.countryAuto);
      if (state.countryAuto) { state.country = detectCountry(); store.set('country', state.country); }
      render();
    });
    const search = $('#countrySearch');
    search.addEventListener('input', () => {
      countryQuery = search.value;
      const pos = search.selectionStart;
      render();
      const s2 = $('#countrySearch'); s2.focus(); s2.setSelectionRange(pos, pos);
    });
    document.querySelectorAll('[data-country]').forEach((b) => b.addEventListener('click', () => {
      state.country = b.dataset.country; state.countryAuto = false;
      store.set('country', state.country); store.set('countryAuto', false);
      countryQuery = '';
      toast(`${C().flag} ${C().name} : numéros d’urgence mis à jour`);
      location.hash = '#/sos';
    }));
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
    doctor: { view: viewDoctor, bind: bindDoctor },
    place: { view: viewPlace, bind: bindPlace, tab: 'around' },
    'join-doctor': { view: viewJoinDoctor, bind: bindJoinDoctor },
    meds: { view: viewMeds, bind: bindMeds },
    contacts: { view: viewContacts, bind: bindContacts },
    notifications: { view: viewNotifications },
    settings: { view: viewSettings, bind: bindSettings },
    country: { view: viewCountry, bind: bindCountry },
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
    $('#themeBtn').innerHTML = icon(isDark() ? 'sun' : 'moon');
    $('#themeBtn').setAttribute('aria-label', t('toggleTheme'));
    $('#notifBtn').innerHTML = icon('bell') + (state.readNotifs ? '' : '<span class="dot"></span>');
    const tabs = [
      { k: 'home', href: '#/', ic: 'home', label: t('home') },
      { k: 'around', href: '#/places/hospitals', ic: 'pin', label: t('around') },
      { k: 'sos', href: '#/sos', label: t('sos') },
      { k: 'file', href: '#/profile', ic: 'id', label: t('file') },
      { k: 'outdoor', href: '#/outdoor', ic: 'mountain', label: t('outdoor') },
    ];
    // Accueil simplifié : le SOS est déjà au centre, la barre du bas est masquée
    const radialHome = state.homeLayout === 'radial' && currentRoute().name === '';
    $('#tabbar').hidden = radialHome;
    $('#view').classList.toggle('no-tabbar', radialHome);
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
      ${link('#/country', 'globe', 'Pays de séjour : ' + C().flag + ' ' + C().name)}
      ${link('#/settings', 'settings', t('settings'))}
      <div class="foot"><img src="assets/logo.svg" alt="" />${t('tagline')}</div>`;
  }
  function openDrawer(open) {
    $('#drawer').classList.toggle('open', open);
    $('#drawer').setAttribute('aria-hidden', String(!open));
    $('#drawerBackdrop').hidden = !open;
  }

  /* Thème : automatique (réglage de l'appareil), clair ou sombre */
  const HOST_THEME = document.documentElement.getAttribute('data-theme');
  const darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    if (state.theme !== 'auto') return state.theme === 'dark';
    if (HOST_THEME) return HOST_THEME === 'dark';
    return !!(darkQuery && darkQuery.matches);
  }
  function applyTheme() {
    const root = document.documentElement;
    if (state.theme === 'auto') { if (HOST_THEME) root.setAttribute('data-theme', HOST_THEME); else root.removeAttribute('data-theme'); }
    else root.setAttribute('data-theme', state.theme);
    const btn = $('#themeBtn'); if (btn) btn.innerHTML = icon(isDark() ? 'sun' : 'moon');
    document.querySelectorAll('[data-theme-opt]').forEach((b) => b.classList.toggle('active', b.dataset.themeOpt === state.theme));
  }
  function setTheme(theme) {
    state.theme = theme; store.set('theme', theme);
    applyTheme();
  }

  function setLang(lang) {
    state.lang = lang; store.set('lang', lang);
    document.documentElement.lang = lang;
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Démarrage                                                           */
  /* ------------------------------------------------------------------ */
  if (state.countryAuto || !COUNTRIES[state.country]) state.country = detectCountry();
  // La traduction part toujours de la langue de l'utilisateur
  trState.from = state.lang; trState.to = state.lang === 'en' ? 'es' : 'en';
  document.documentElement.lang = state.lang;
  applyTheme();
  if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener('change', applyTheme);
  $('#themeBtn').addEventListener('click', () => { setTheme(isDark() ? 'light' : 'dark'); toast(isDark() ? t('themeDark') : t('themeLight')); });
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
