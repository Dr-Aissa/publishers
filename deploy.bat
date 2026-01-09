@echo off
REM Script de déploiement pour Windows - Système de recherche de revues scientifiques
REM Utilisation: deploy.bat [methode]

setlocal enabledelayedexpansion

REM Couleurs (approximation pour Windows)
set "RED=[91m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "RESET=[0m"

REM Fonction d'affichage des messages
:log_info
echo %BLUE%[INFO]%RESET% %~1
goto :eof

:log_success
echo %GREEN%[SUCCESS]%RESET% %~1
goto :eof

:log_warning
echo %YELLOW%[WARNING]%RESET% %~1
goto :eof

:log_error
echo %RED%[ERROR]%RESET% %~1
goto :eof

REM Fonction de déploiement GitHub Pages
:deploy_github_pages
call :log_info "Déploiement vers GitHub Pages..."

REM Vérifier si c'est un repository Git
if not exist ".git" (
    call :log_error "Ce n'est pas un repository Git. Initialisez Git d'abord."
    exit /b 1
)

REM Vérifier la branche actuelle
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
if "%current_branch%" neq "master" (
    call :log_warning "Vous êtes sur la branche '%current_branch%'. Le déploiement automatique fonctionne sur 'master'."
)

REM Ajouter et commiter les changements
call :log_info "Ajout des fichiers..."
git add .

call :log_info "Commit des changements..."
git commit -m "🚀 Déploiement automatique - %date% %time%" 2>nul || call :log_warning "Aucun changement à commiter."

REM Pousser vers GitHub
call :log_info "Push vers GitHub..."
git push origin master

call :log_success "Déploiement vers GitHub Pages initié !"
call :log_info "Le workflow GitHub Actions va se lancer automatiquement."
call :log_info "URL: https://dr-aissa.github.io/publishers"
goto :eof

REM Fonction de déploiement local
:deploy_local
call :log_info "Lancement du serveur de développement local..."

REM Essayer Python d'abord
python -c "import http.server; import socketserver; import webbrowser; server = socketserver.TCPServer(('', 8000), http.server.SimpleHTTPRequestHandler); print('Serveur local lancé sur http://localhost:8000'); webbrowser.open('http://localhost:8000'); server.serve_forever()" 2>nul
if %errorlevel% equ 0 goto :server_running

REM Essayer Python 3
python3 -c "import http.server; import socketserver; import webbrowser; server = socketserver.TCPServer(('', 8000), http.server.SimpleHTTPRequestHandler); print('Serveur local lancé sur http://localhost:8000'); webbrowser.open('http://localhost:8000'); server.serve_forever()" 2>nul
if %errorlevel% equ 0 goto :server_running

REM Essayer Node.js si installé
where node >nul 2>nul
if %errorlevel% equ 0 (
    call :log_info "Utilisation de Node.js (http-server)..."
    where http-server >nul 2>nul
    if %errorlevel% neq 0 (
        call :log_info "Installation de http-server..."
        npm install -g http-server
    )
    start http-server -p 8000 -o
    goto :server_running
)

call :log_error "Aucun serveur web trouvé. Installez Python ou Node.js."
exit /b 1

:server_running
call :log_success "Serveur local lancé !"
call :log_info "Accessible sur: http://localhost:8000"
call :log_info "Appuyez sur Ctrl+C dans le terminal pour arrêter le serveur"
pause
goto :eof

REM Fonction d'affichage de l'aide
:show_help
echo Script de déploiement pour le système de recherche de revues scientifiques
echo.
echo Utilisation: %0 [methode]
echo.
echo Méthodes disponibles:
echo   github-pages    Déploiement automatique vers GitHub Pages
echo   local           Serveur de développement local
echo   help            Afficher cette aide
echo.
echo Exemples:
echo   %0 github-pages
echo   %0 local
echo.
goto :eof

REM Fonction principale
:main
if "%1"=="" goto help
if "%1"=="github-pages" goto github_pages
if "%1"=="local" goto local
if "%1"=="help" goto help
if "%1"=="-h" goto help
if "%1"=="--help" goto help

call :log_error "Méthode '%1' non reconnue."
echo.
goto show_help

:github_pages
call :deploy_github_pages
goto :eof

:local
call :deploy_local
goto :eof

:help
call :show_help
goto :eof

REM Exécuter la fonction principale
call :main %1