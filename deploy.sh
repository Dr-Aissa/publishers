#!/bin/bash

# Script de déploiement rapide pour le système de recherche de revues scientifiques
# Utilisation: ./deploy.sh [methode]
# Méthodes disponibles: github-pages, netlify, vercel, docker, local

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction d'affichage des messages
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Fonction de vérification des prérequis
check_prerequisites() {
    local method=$1

    case $method in
        "github-pages")
            if ! command -v git &> /dev/null; then
                log_error "Git n'est pas installé. Veuillez l'installer d'abord."
                exit 1
            fi
            ;;
        "netlify")
            if ! command -v npm &> /dev/null; then
                log_warning "npm n'est pas installé. Installation recommandée pour Netlify CLI."
            fi
            ;;
        "vercel")
            if ! command -v npm &> /dev/null; then
                log_error "npm est requis pour Vercel CLI."
                exit 1
            fi
            ;;
        "docker")
            if ! command -v docker &> /dev/null; then
                log_error "Docker n'est pas installé. Veuillez l'installer d'abord."
                exit 1
            fi
            ;;
        "local")
            # Vérifier Python ou Node.js
            if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null && ! command -v node &> /dev/null; then
                log_error "Python ou Node.js est requis pour le serveur local."
                exit 1
            fi
            ;;
    esac
}

# Fonction de déploiement GitHub Pages
deploy_github_pages() {
    log_info "Déploiement vers GitHub Pages..."

    # Vérifier si c'est un repository Git
    if [ ! -d ".git" ]; then
        log_error "Ce n'est pas un repository Git. Initialisez Git d'abord."
        exit 1
    fi

    # Vérifier la branche actuelle
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "master" ]; then
        log_warning "Vous êtes sur la branche '$current_branch'. Le déploiement automatique fonctionne sur 'master'."
    fi

    # Ajouter et commiter les changements
    log_info "Ajout des fichiers..."
    git add .

    log_info "Commit des changements..."
    git commit -m "🚀 Déploiement automatique - $(date)" || log_warning "Aucun changement à commiter."

    # Pousser vers GitHub
    log_info "Push vers GitHub..."
    git push origin master

    log_success "Déploiement vers GitHub Pages initié !"
    log_info "Le workflow GitHub Actions va se lancer automatiquement."
    log_info "URL: https://dr-aissa.github.io/publishers"
}

# Fonction de déploiement Netlify
deploy_netlify() {
    log_info "Déploiement vers Netlify..."

    # Installer Netlify CLI si nécessaire
    if ! command -v netlify &> /dev/null; then
        log_info "Installation de Netlify CLI..."
        npm install -g netlify-cli
    fi

    # Déployer
    netlify deploy --prod --dir=.

    log_success "Déploiement vers Netlify terminé !"
}

# Fonction de déploiement Vercel
deploy_vercel() {
    log_info "Déploiement vers Vercel..."

    # Installer Vercel CLI si nécessaire
    if ! command -v vercel &> /dev/null; then
        log_info "Installation de Vercel CLI..."
        npm install -g vercel
    fi

    # Déployer
    vercel --prod

    log_success "Déploiement vers Vercel terminé !"
}

# Fonction de déploiement Docker
deploy_docker() {
    log_info "Construction et lancement avec Docker..."

    # Construire l'image
    log_info "Construction de l'image Docker..."
    docker build -t journal-search .

    # Arrêter le conteneur existant s'il y en a un
    docker stop journal-search 2>/dev/null || true
    docker rm journal-search 2>/dev/null || true

    # Lancer le conteneur
    log_info "Lancement du conteneur..."
    docker run -d -p 8080:80 --name journal-search journal-search

    log_success "Application déployée avec Docker !"
    log_info "Accessible sur: http://localhost:8080"
}

# Fonction de déploiement local
deploy_local() {
    log_info "Lancement du serveur de développement local..."

    # Essayer différents serveurs
    if command -v python3 &> /dev/null; then
        log_info "Utilisation de Python 3..."
        python3 -m http.server 8000 &
        server_pid=$!
    elif command -v python &> /dev/null; then
        log_info "Utilisation de Python 2..."
        python -m SimpleHTTPServer 8000 &
        server_pid=$!
    elif command -v node &> /dev/null; then
        log_info "Utilisation de Node.js (http-server)..."
        if ! command -v http-server &> /dev/null; then
            npm install -g http-server
        fi
        http-server -p 8000 -o &
        server_pid=$!
    else
        log_error "Aucun serveur web trouvé."
        exit 1
    fi

    log_success "Serveur local lancé !"
    log_info "Accessible sur: http://localhost:8000"
    log_info "PID du serveur: $server_pid"
    log_info "Appuyez sur Ctrl+C pour arrêter le serveur"

    # Attendre l'arrêt
    wait $server_pid
}

# Fonction d'affichage de l'aide
show_help() {
    echo "Script de déploiement pour le système de recherche de revues scientifiques"
    echo ""
    echo "Utilisation: $0 [methode]"
    echo ""
    echo "Méthodes disponibles:"
    echo "  github-pages    Déploiement automatique vers GitHub Pages"
    echo "  netlify         Déploiement vers Netlify (CDN)"
    echo "  vercel          Déploiement vers Vercel (CDN)"
    echo "  docker          Déploiement avec Docker"
    echo "  local           Serveur de développement local"
    echo "  help            Afficher cette aide"
    echo ""
    echo "Exemples:"
    echo "  $0 github-pages"
    echo "  $0 docker"
    echo "  $0 local"
}

# Fonction principale
main() {
    local method=${1:-"help"}

    case $method in
        "github-pages")
            check_prerequisites "github-pages"
            deploy_github_pages
            ;;
        "netlify")
            check_prerequisites "netlify"
            deploy_netlify
            ;;
        "vercel")
            check_prerequisites "vercel"
            deploy_vercel
            ;;
        "docker")
            check_prerequisites "docker"
            deploy_docker
            ;;
        "local")
            check_prerequisites "local"
            deploy_local
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            log_error "Méthode '$method' non reconnue."
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Exécuter la fonction principale
main "$@"