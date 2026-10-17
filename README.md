# My Med Care

Application web mobile (PWA) de sécurité médicale : « Ma sécurité, partout, tout le temps ».

Les fonctions essentielles sont gratuites. Une seule option est payante, **Famille** (voir plus bas) :

- **SOS urgence** : compte à rebours de 5 s puis appel au 112, numéros d'urgence, alerte et partage de position aux proches
- **Traduction** : phrases médicales en 6 langues (FR, EN, ES, DE, IT, PT), lecture audio et affichage plein écran
- **Autour de moi** (Hôpitaux, Pharmacies, Médecins, Vétérinaires) : établissements partenaires autour de vous, appel et itinéraire en un clic ; un interrupteur **Sur place / En vidéo** affiche à la place les professionnels qui font de la téléconsultation (tarif, attente, langues)
- **Ma fiche** : carte médicale d'urgence modifiable (groupe sanguin, allergies, traitements, médecin…)
- **Outdoor** : boussole, altitude, coordonnées GPS, suivi de sortie, guides de survie
- **Téléconsultation**, **Médicaments** (rappels), **Proches** (contacts d'urgence), **Premiers secours**
- **Famille (option payante)** : les parents installent l'application sur le téléphone de leurs enfants et voient leur position en direct, avec alertes (sortie d'une zone de sécurité, batterie faible, SOS) ; le SOS envoie automatiquement un message avec la position aux membres désignés. Le bouton SOS et l'appel au 112 restent gratuits.
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

## Option Famille : ce qui est simulé

Dans ce prototype, le paiement, les comptes, les invitations et les positions des enfants sont simulés dans l'appareil (aucun débit, aucune donnée envoyée). Pour la production : comptes parent/enfant, serveur de positions chiffrées, notifications push et SMS, paiement par Stripe (web) ou achats intégrés Apple/Google (stores), consentement et information permanente de l'enfant.
