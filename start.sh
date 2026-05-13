#!/bin/bash

# Dashboard Server Startup Script (Linux/macOS)
# Startet den lokalen Entwicklungsserver

echo "🚀 Dashboard Server wird gestartet..."
echo ""

# Prüfe ob Node.js installiert ist
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert!"
    echo "Bitte installiere Node.js von https://nodejs.org/"
    exit 1
fi

# Prüfe ob npm installiert ist
if ! command -v npm &> /dev/null; then
    echo "❌ npm ist nicht installiert!"
    echo "Bitte installiere npm von https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js Version: $(node --version)"
echo "✓ npm Version: $(npm --version)"
echo ""

# Installiere Dependencies wenn node_modules nicht existiert
if [ ! -d "node_modules" ]; then
    echo "📦 Installiere Dependencies..."
    npm install
    echo ""
fi

# Starte den Entwicklungsserver
echo "🔥 Starte Entwicklungsserver..."
echo "Der Server sollte bald unter http://localhost:3000 verfügbar sein"
echo ""

npm run dev
