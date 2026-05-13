@echo off
REM Dashboard Server Startup Script (Windows)
REM Startet den lokalen Entwicklungsserver

echo.
echo 🚀 Dashboard Server wird gestartet...
echo.

REM Prüfe ob Node.js installiert ist
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js ist nicht installiert!
    echo Bitte installiere Node.js von https://nodejs.org/
    pause
    exit /b 1
)

REM Prüfe ob npm installiert ist
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm ist nicht installiert!
    echo Bitte installiere npm von https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✓ Node.js Version: %NODE_VERSION%
echo ✓ npm Version: %NPM_VERSION%
echo.

REM Installiere Dependencies wenn node_modules nicht existiert
if not exist "node_modules" (
    echo 📦 Installiere Dependencies...
    call npm install
    echo.
)

REM Starte den Entwicklungsserver
echo 🔥 Starte Entwicklungsserver...
echo Der Server sollte bald unter http://localhost:3000 verfügbar sein
echo.

call npm run dev
pause
