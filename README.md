# My Med Care

Application web mobile (PWA) de sécurité médicale : « Ma sécurité, partout, tout le temps ».

Toutes les fonctionnalités sont accessibles et gratuites (aucune option payante) :

- **SOS urgence** : compte à rebours de 5 s puis appel au 112, numéros d'urgence, alerte et partage de position aux proches
- **Traduction** : phrases médicales en 6 langues (FR, EN, ES, DE, IT, PT), lecture audio et affichage plein écran
- **Hôpitaux, Pharmacies, Médecins** : établissements autour de vous (OpenStreetMap), appel et itinéraire en un clic
- **Ma fiche** : carte médicale d'urgence modifiable (groupe sanguin, allergies, traitements, médecin…)
- **Outdoor** : boussole, altitude, coordonnées GPS, suivi de sortie, guides de survie
- **Téléconsultation**, **Médicaments** (rappels), **Proches** (contacts d'urgence), **Premiers secours**
- Interface FR / EN, fonctionnement hors ligne (service worker), installable sur l'écran d'accueil

## Lancer en local

Aucune dépendance. Servez simplement le dossier :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

Les données personnelles restent sur l'appareil (localStorage).

## Démo client (cadre de téléphone)

`python3 tools/build_preview.py` génère `preview.html` : un fichier unique, autonome, qui présente l'application dans un cadre de smartphone sur ordinateur (et en plein écran sur mobile).

Pour la variante d'accueil simplifié (SOS au centre, fonctions autour) : `python3 tools/build_preview.py preview.html radial`. Le choix est aussi disponible dans Réglages → Écran d'accueil.
