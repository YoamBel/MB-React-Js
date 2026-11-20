# Maud Bijoux — projet vitrine interactif

Ce projet présente un catalogue de bijoux et un parcours de demande de devis. **Il s’agit d’une vitrine de développement, pas d’un commerce en activité.** Les vrais prix, un service d’envoi d’emails et des coordonnées commerciales actualisées ne sont pas nécessaires pour cette démonstration.

Depuis l’accueil, **Explorer les bijoux** ouvre le catalogue et **Essayer la démo sans inscription** ouvre une session visiteur privée pour tester le panier et les devis. Aucun email ni mot de passe personnel n’est demandé. Chaque nouvelle session visiteur dispose de son propre compte client fictif, sans accès à l’administration ou aux devis des autres visiteurs. Un visiteur déjà connecté conserve son compte actuel.

Les espaces d’administration et de réglages restent disponibles pour présenter la gestion du projet. Leur configuration est facultative pour le parcours visiteur. Les visuels absents utilisent une illustration neutre « Photo indisponible » et ne bloquent pas la démonstration. Les montants restent à chiffrer : il s’agit d’une demande de devis B2B, sans faux prix présentés comme réels.

## Ouvrir le projet

Depuis le dossier `MB-React-Js`, double-cliquer sur **LANCER-MAUD-BIJOUX.cmd**, ou ouvrir le dossier dans VS Code puis **Terminal → Run Task → Maud Bijoux : lancer le site et l’API**. Garder le terminal ouvert. Le site s’ouvre sur `http://127.0.0.1:8771`.

Les dossiers `MB-React-Js` et `Project-MB-ReactJs` doivent rester côte à côte. Le lanceur construit le site et l’API. Il utilise Node.js, .NET 10 et SQL Server LocalDB installés sur cet ordinateur.

## Gestion facultative du projet

Pour modifier les bijoux ou suivre les devis, cliquer sur **Connexion / Inscription**, puis créer **son propre compte administrateur** (nom, email, mot de passe de 10 caractères minimum). Aucun mot de passe par défaut n’a été créé. Ce compte donne accès au lien **Administration**. Les comptes suivants sont des comptes clients. Le bouton **Essayer la démo sans inscription** fonctionne aussi avant cette configuration.

L’installation fonctionne seulement sur cet ordinateur. Les anciens comptes clients et mots de passe de l’archive n’ont pas été réutilisés.

## Fonctions disponibles

- **Catalogue** : les 561 bijoux historiques, collections et catégories sont conservés. La recherche porte sur tout le catalogue ; les fiches et la navigation mobile restent disponibles.
- **Comptes** : inscription, connexion, modification du nom, changement de mot de passe, déconnexion et vérification locale de l’adresse. Les mots de passe sont hachés et salés. Un changement ou une réinitialisation invalide les anciennes connexions.
- **Panier** : quantités et remarques sauvegardées par compte dans ce navigateur. Un panier préparé avant connexion peut être importé explicitement dans un compte dont le panier est vide. Les autres paniers ne sont pas effacés.
- **Devis** : enregistrement SQL, historique privé par client, réouverture et impression / PDF. Une même demande réessayée ne crée pas de doublon. Les anciens devis locaux sans compte restent accessibles uniquement à l’administrateur.
- **Administration → Catalogue** : créer ou modifier un bijou, le masquer ou le réafficher, remplacer sa photo par un JPEG, PNG ou WebP de 2 Mo maximum. Masquer conserve sa fiche et ses anciens devis.
- **Administration → Devis** : suivi Reçu, En cours, Chiffré, Accepté, Refusé ou Archivé ; note visible du client ; prix HT par pièce et TVA saisis manuellement ; calcul HT / TVA / TTC. Le statut Chiffré ou Accepté exige les prix et la TVA. Deux modifications concurrentes d’un même devis sont détectées.
- **Administration → Comptes** : consulter les nouveaux comptes, bloquer ou réactiver un client ; ses anciennes connexions sont alors invalidées.
- **Administration → Réglages** : brouillons pour la devise des nouveaux devis, TVA, marge et règles tarifaires, service email et adresses envisagées. La devise initiale est EUR ; TVA et marge restent vides. Les règles à fournir plus tard ne sont pas inventées ni appliquées automatiquement.
- **Administration → Emails** : aperçus locaux des vérifications, réinitialisations, demandes de devis, changements de suivi et messages de contact. Les liens de compte sont à usage unique et expirent après 30 minutes. Les aperçus de compte sont accessibles à l’administrateur de cette installation de démonstration.
- **Contact** : prépare un message consultable dans les aperçus de l’administration.

## Éléments facultatifs pour une future utilisation commerciale

**Aucun email réel n’est envoyé**, même si un service envisagé est choisi dans les réglages. Le raccordement du service, ses identifiants et les règles commerciales seront fournis plus tard. Une réinitialisation se fait pour l’instant depuis le lien de l’aperçu local de l’administrateur.

**19 photos principales manquent dans la sauvegarde d’origine.** Le catalogue indique « Photo indisponible » ; le filtre « Photos manquantes seulement » permet de compléter les fiches quand les vrais fichiers seront disponibles. Aucun bijou n’est illustré par une photo inventée.

Coordonnées, horaires et textes légaux sont historiques et restent à vérifier avant une éventuelle remise en service commerciale. Le projet n’est pas déployé sur Internet et n’intègre pas de paiement.

## Conservation des données et sources

Les 207 fichiers du site d’origine et ses 124 routes sont préservés dans la copie de relance, avec une nouvelle page d’administration. Les sources historiques à la racine des deux dépôts restent intactes.

- `MaudBijouxArchiveLocal` : catalogue restauré depuis la sauvegarde, protégé en lecture seule et vérifié au démarrage. Les comptes et devis historiques de cette archive ne sont pas exposés.
- `MaudBijouxDemoLocal` : copie éditable des bijoux, nouveaux comptes, devis et leurs instantanés, réglages, journal et aperçus d’emails. Les demandes locales déjà présentes ont été conservées.
- `%LOCALAPPDATA%\MaudBijouxLocal\MaudBijouxDemoLocal` : nouvelles photos et clés de protection des sessions. Conserver ce dossier avec une sauvegarde SQL de la base de travail pour sauvegarder l’installation complète.
- Navigateur : clés du panier `maud-bijoux-local-cart-v1` pour l’invité et suffixe d’identifiant par compte. Les autres données du navigateur ne sont pas modifiées.

Les fichiers SQL contenant des suppressions dans l’ancien dépôt n’ont pas été exécutés. Une sauvegarde de la base de travail a été réalisée et vérifiée avant l’ajout de ces fonctions. Les essais de comptes et de modifications ont utilisé une base QA séparée, pas les vrais comptes ou devis.

## Vérifications

Compilation .NET et React ; 116 routes du catalogue ; navigation et recherche réelles ; panier et stockage ; accès par rôle et devis privés ; doubles demandes simultanées ; réinitialisation à usage unique et révocation des sessions ; chiffrage et arrondis ; conflits de modification ; réglages et contact ; création / modification / masquage de bijoux et ajout de photo ; protection des actions contre les requêtes externes ; écrans bureau et mobile.

Le code de cette version vitrine est préparé pour GitHub. Les données de travail locales et les comptes ne sont pas publiés ; aucune mise en ligne du site n’est effectuée par cette publication du code.
