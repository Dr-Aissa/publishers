# Utiliser Nginx Alpine comme base (léger et sécurisé)
FROM nginx:alpine

# Labels pour l'image
LABEL maintainer="Dr-Aissa <contact@dr-aissa.dev>"
LABEL description="Système de recherche de revues scientifiques - Version française"
LABEL version="1.0"

# Copier les fichiers statiques dans le répertoire Nginx
COPY . /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Créer un utilisateur non-root pour plus de sécurité (optionnel)
# RUN addgroup -g 1001 -S appgroup && adduser -S appuser -u 1001 -G appgroup
# USER appuser

# Exposer le port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]