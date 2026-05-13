# HOME OS Dashboard

Ein modernes Smart Home Dashboard für gemeinsame Hausautomation.

## Features

- 📅 Kalender & Termine
- ⚡ Energieverbrauch & Akkuladung
- 👥 Anwesenheitsstatus
- 🏠 Smart Home Steuerung
- 🌤️ Wetter-Integration
- 🚗 Fahrzeug-Übersicht

## Getting Started

### Systemanforderungen

- Node.js 16+
- npm 7+

### Installation & Start

**Linux/macOS:**
```bash
chmod +x start.sh
./start.sh
```

**Windows:**
```bash
start.bat
```

Oder manuell:
```bash
npm install
npm run dev
```

Der Server läuft dann unter [http://localhost:3000](http://localhost:3000)

## Entwicklung

```bash
# Development Server starten
npm run dev

# Production Build
npm run build
npm start

# Linting
npm run lint
```

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Lizenz

MIT