# Système de Recherche de Revues Scientifiques - Version Française 🇫🇷

## 📋 Vue d'ensemble

Ce système web fournit une interface complète et intuitive pour rechercher, filtrer et comparer des revues scientifiques en français. Il intègre les données JCR (Journal Citation Reports) et SCImago Journal & Country Rank (SJR) pour l'évaluation des publications académiques.

## 🌟 Fonctionnalités principales

### 🔍 Recherche intelligente
- Recherche par nom de revue, ISSN ou abréviation
- Résultats instantanés avec mise en évidence des termes
- Interface responsive pour tous les appareils

### 🎯 Filtrage avancé
- **Filtrage par domaine de recherche** : Médecine, Biologie, Chimie, Physique, etc.
- **Filtrage par niveau de classification** : Q1, Q2, Q3, Q4, SSCI, AHCI, etc.
- Combinaison possible des filtres pour des recherches précises

### 📊 Indicateurs complets
- **Facteur d'Impact (JIF)** : Mesure de l'influence scientifique
- **Facteur d'Impact sur 5 ans** : Évaluation à long terme
- **Valeur SJR** : Indicateur SCImago de prestige
- **Classements et quartiles** : Positionnement dans les bases de données
- **Informations sur l'accès ouvert** : OA complet, hybride ou traditionnel

### ⚖️ Comparaison détaillée
- Sélection et comparaison de jusqu'à 5 revues simultanément
- Tableaux comparatifs complets avec tous les indicateurs
- Export des rapports de comparaison en PDF

## 📁 Structure du projet

```
Journal-FR/
├── index.html                           # Page d'accueil
├── sciences-naturelles.html            # Revues sciences naturelles (8 464 revues)
├── sciences-humaines-sociales.html     # Revues sciences humaines (3 523 revues)
├── i18n-fr.js                          # Fichier de traductions françaises
├── README-FR.md                        # Documentation française
├── journals.js                         # Données revues sciences naturelles
├── art-journals.js                     # Données revues sciences humaines
├── jif_metrics.js                      # Indicateurs JCR (7.2 MB)
├── sjr_metrics.js                      # Indicateurs SJR (4.0 MB)
├── oa_journals.js                      # Données accès ouvert
├── research_fields.js                  # Classification domaines recherche
└── wos_categories.js                   # Catégories Web of Science
```

## 🚀 Installation et utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion internet pour les CDN (Bootstrap, Font Awesome, jsPDF)

### Installation
1. Téléchargez tous les fichiers du dossier `Journal-FR/`
2. Ouvrez `index.html` dans votre navigateur
3. Le système fonctionne immédiatement sans installation serveur

### Utilisation de base
1. **Page d'accueil** : Choisissez entre sciences naturelles ou humaines
2. **Recherche** : Tapez le nom d'une revue dans la barre de recherche
3. **Filtrage** : Utilisez les filtres par domaine et niveau
4. **Comparaison** : Cochez les revues et cliquez sur "Comparer"
5. **Export** : Téléchargez les rapports de comparaison en PDF

## 📊 Données et sources

### Base de données
- **11 987 revues** au total
- **8 464 revues** en sciences naturelles
- **3 523 revues** en sciences humaines et sociales

### Sources des données
- **JCR (Journal Citation Reports)** : Clarivate Analytics
- **SJR (SCImago Journal & Country Rank)** : Elsevier
- **Web of Science** : Clarivate Analytics

### Mise à jour des données
- Données JCR 2024
- Données SJR 2024
- Mise à jour annuelle des indicateurs

## 🎨 Interface utilisateur

### Design moderne
- Interface adaptative (responsive design)
- Palette de couleurs professionnelle
- Icônes intuitives et emojis explicites
- Animations fluides et transitions

### Accessibilité
- Support complet du clavier
- Lecteurs d'écran compatibles
- Contraste élevé pour la lisibilité
- Navigation logique et intuitive

### Performance
- Chargement optimisé des données
- Recherche instantanée sans latence
- Interface fluide même avec de gros volumes de données

## 🔧 Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Design moderne et responsive
- **JavaScript ES6+** : Logique interactive
- **Bootstrap 5.3** : Framework CSS responsive
- **Font Awesome 6.4** : Icônes vectorielles

### Librairies JavaScript
- **jsPDF 2.5** : Génération de PDF
- **jsPDF-AutoTable 3.5** : Tables PDF automatiques

### Données
- **JSON** : Format de stockage des données
- **CDN** : Livraison optimisée des ressources externes

## 🌐 Traduction française

### Éléments traduits
- ✅ Interface utilisateur complète
- ✅ Messages d'aide et tooltips
- ✅ Labels des boutons et actions
- ✅ Descriptions et métadonnées
- ✅ Messages d'erreur et confirmations

### Cohérence terminologique
- "Revue" au lieu de "journal" (contexte scientifique)
- "Facteur d'impact" pour "impact factor"
- "Classification" pour "quartile/ranking"
- Respect des conventions françaises

### Format des nombres
- Espaces comme séparateurs de milliers : "20 449"
- Virgule pour les décimales : "3,5"

## 📈 Fonctionnalités avancées

### Recherche avancée
- Recherche floue (fuzzy search)
- Recherche par ISSN/eISSN
- Recherche par éditeur
- Recherche par mots-clés

### Filtrage combiné
- Filtres multiples simultanés
- Combinaisons domaine + niveau
- Filtres persistants pendant la session

### Comparaison intelligente
- Sélection visuelle des revues
- Tableaux comparatifs dynamiques
- Export PDF professionnel
- Limitation à 5 revues maximum

### Indicateurs détaillés
- Valeurs JIF actuelles et sur 5 ans
- Classements dans les catégories WoS
- Valeurs SJR et quartiles
- Informations APC et accès ouvert

## 🔒 Sécurité et confidentialité

### Données locales
- Toutes les données stockées localement
- Aucun envoi de données personnelles
- Fonctionnement hors ligne possible

### Protection des données
- Respect des standards web modernes
- Pas de tracking ou analytics
- Utilisation pédagogique uniquement

## 🐛 Dépannage

### Problèmes courants
- **Page ne se charge pas** : Vérifiez votre connexion internet (CDN)
- **Recherche lente** : Données volumineuses, patientez le premier chargement
- **PDF ne se génère pas** : Problème de mémoire, essayez avec moins de revues

### Support technique
- Vérifiez la console du navigateur (F12)
- Testez avec un autre navigateur
- Redémarrez votre navigateur

## 📝 Licence et utilisation

### Conditions d'utilisation
- Usage académique et éducatif uniquement
- Respect des droits d'auteur des données sources
- Pas d'utilisation commerciale sans autorisation

### Crédits
- Données : Clarivate Analytics et Elsevier
- Interface : Développement original
- Traduction : Version française complète

## 🚀 Guide de déploiement

Ce système de recherche de revues scientifiques peut être déployé de plusieurs façons selon vos besoins.

### 🚀 Déploiement rapide avec scripts

Pour un déploiement simplifié, utilisez les scripts fournis :

#### Sur Linux/Mac
```bash
# Rendre le script exécutable
chmod +x deploy.sh

# Déploiement vers GitHub Pages
./deploy.sh github-pages

# Test local
./deploy.sh local

# Autres méthodes
./deploy.sh netlify
./deploy.sh vercel
./deploy.sh docker
```

#### Sur Windows
```batch
# Déploiement vers GitHub Pages
deploy.bat github-pages

# Test local
deploy.bat local
```

### Méthode 1 : GitHub Pages (Recommandé - Automatique)

Le projet est automatiquement déployé sur GitHub Pages via GitHub Actions.

#### URLs de production
- **GitHub Pages :** https://dr-aissa.github.io/publishers
- **Domaine personnalisé :** https://publishers.dr-aissa.dev

#### Configuration du déploiement
- **Repository :** `https://github.com/Dr-Aissa/publishers`
- **Branche :** `master`
- **Workflow :** `.github/workflows/deploy.yml`
- **CI/CD :** Tests automatiques et déploiement

#### Fonctionnalités du workflow
- ✅ Validation HTML/W3C
- ✅ Vérification syntaxe JavaScript
- ✅ Tests de performance Lighthouse
- ✅ Déploiement automatique
- ✅ Rapports de métriques

### Méthode 2 : Serveur Web Statique

Pour déployer sur votre propre serveur :

#### Prérequis
```bash
# Apache/Nginx ou tout serveur web
# PHP non requis (site 100% statique)
```

#### Déploiement simple
```bash
# 1. Télécharger/cloner le projet
git clone https://github.com/Dr-Aissa/publishers.git

# 2. Copier les fichiers dans le répertoire web
cp -r publishers/* /var/www/html/

# 3. Configurer les permissions
chmod -R 755 /var/www/html/
```

#### Configuration Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Redirection vers index.html pour le SPA
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Compression GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Cache des ressources statiques
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
</IfModule>
```

#### Configuration Nginx
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /var/www/html;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/css application/javascript text/javascript;

    # Cache
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }

    # Fallback vers index.html pour SPA
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Méthode 3 : Netlify (CDN)

#### Déploiement en un clic
1. Se connecter sur [Netlify](https://netlify.com)
2. Cliquer "New site from Git"
3. Sélectionner votre repository GitHub
4. Configurer :
   - **Build command :** (laisser vide)
   - **Publish directory :** `/` ou `./`
5. Déployer

#### Avantages Netlify
- ✅ CDN mondial gratuit
- ✅ HTTPS automatique
- ✅ Déploiement automatique
- ✅ Formulaires et fonctions serverless
- ✅ Analytics intégré

### Méthode 4 : Vercel (CDN)

#### Déploiement rapide
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod

# Ou lier à GitHub pour déploiement auto
vercel link
```

#### Configuration vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Méthode 5 : Docker

#### Dockerfile
```dockerfile
FROM nginx:alpine

# Copier les fichiers statiques
COPY . /usr/share/nginx/html

# Configuration Nginx pour SPA
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### Configuration Nginx pour Docker
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Compression
        gzip on;
        gzip_types text/css application/javascript;

        # Cache
        location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1M;
            add_header Cache-Control "public, immutable";
        }

        # Fallback SPA
        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

#### Déploiement Docker
```bash
# Construire l'image
docker build -t journal-search .

# Lancer le conteneur
docker run -p 8080:80 journal-search

# Ou avec Docker Compose
docker-compose up -d
```

### Méthode 6 : Serveur de développement local

Pour tester localement avant déploiement :

#### Avec Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Avec Node.js
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
http-server -p 8080 -o
```

#### Avec PHP (si disponible)
```bash
php -S localhost:8000
```

### 🔧 Optimisations de déploiement

#### Performance
- ✅ Compression GZIP activée
- ✅ Cache des ressources statiques
- ✅ Minification des assets (optionnel)
- ✅ CDN pour les librairies externes

#### Sécurité
- ✅ HTTPS obligatoire
- ✅ Headers de sécurité (CSP, HSTS)
- ✅ Protection contre les injections XSS
- ✅ Validation des entrées utilisateur

#### SEO
- ✅ Meta tags optimisés
- ✅ Structure sémantique HTML
- ✅ Performance Lighthouse > 90
- ✅ Accessibilité WCAG 2.1

### 📊 Monitoring post-déploiement

#### Métriques à surveiller
- Temps de chargement des pages
- Taux d'erreur JavaScript
- Utilisation des fonctionnalités
- Performance Lighthouse
- Trafic et sources de visites

#### Outils de monitoring
- **Google Analytics** : Trafic et comportement
- **Google Search Console** : Référencement
- **Lighthouse CI** : Performance continue
- **Sentry** : Erreurs JavaScript

## 🔄 Mise à jour et évolution

Le projet est automatiquement déployé sur GitHub Pages via GitHub Actions.

### URLs de production
- **GitHub Pages :** https://dr-aissa.github.io/publishers
- **Domaine personnalisé :** https://publishers.dr-aissa.dev

### Configuration du déploiement
- **Repository :** `https://github.com/Dr-Aissa/publishers`
- **Branche :** `master`
- **Workflow :** `.github/workflows/deploy.yml`
- **CI/CD :** Tests automatiques et déploiement

### Fonctionnalités du workflow
- ✅ Validation HTML/W3C
- ✅ Vérification syntaxe JavaScript
- ✅ Tests de performance Lighthouse
- ✅ Déploiement automatique
- ✅ Rapports de métriques

### Métriques de performance
Les tests Lighthouse sont exécutés automatiquement à chaque déploiement :
- Performance
- Accessibilité
- Bonnes pratiques
- SEO

## 📞 Contact et support

Pour toute question ou suggestion concernant cette version française du système de recherche de revues scientifiques, veuillez consulter la documentation ou contacter l'équipe de développement.

---

**Version française 1.0** - Janvier 2024
*Interface complète traduite en français avec toutes les fonctionnalités préservées*