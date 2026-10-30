# Versionsstand – Dashboard

> **Dokumentationsstand:** 29.10.2026 · **Bezugs-Commit:** `90fa1480b0b6ac90ac0aa98f0eed30c6a6287798` · **Status:** ungeprüft. Diese Übersicht wurde anhand der Repository-Struktur erstellt; Anwendung, Tests und Heimserver wurden nicht ausgeführt.

## Auf einen Blick

| Frage | Antwort |
| --- | --- |
| **Hauptproblem** | Production-Build schlägt fehl: Typfehler in `src/app/api/energy/route.ts:32` – `battery_power` existiert nicht im Typ `EnergyData & BatteryData` |
| **Was vorhanden ist** | Next.js/TypeScript-Dashboard, Home-Assistant-Einrichtung und `src/`-Quellen laut Repository |
| **Was funktioniert** | `npm install` ok; `next build` kompiliert, scheitert aber an der Typprüfung (30.10.2026, Node 20, Next.js 14.2.35) |
| **Was jetzt geklärt werden muss** | Typ `BatteryData` um `battery_power` ergänzen oder Feld umbenennen; ESLint ist nicht eingerichtet (`next lint` fragt interaktiv nach einer Konfiguration); Home-Assistant-Anbindung ungeprüft |
| **Nächster sinnvoller Test** | Nach der Typkorrektur `npm install && npx next build` erneut; danach `next start` und die Seiten `/`, `/api/weather`, `/api/energy` aufrufen |

## Offene Punkte – zuerst prüfen

1. `package.json`, `README.md` und `src/` prüfen; vorhandene Start-, Build- und Testbefehle feststellen.
2. Build/Tests ausführen, sofern Umgebung verfügbar; Home-Assistant-Anbindung nur in geeigneter Testumgebung prüfen.
3. Gefundene Fehler mit Auswirkung, Reproduktionsschritten und verantwortlichem Agenten dokumentieren.

## Claude / Codex

- Zuständigkeiten pro Auftrag vereinbaren; nicht gleichzeitig dieselben Dateien bearbeiten.
- Vor Beginn `versionsstand.md`, `AGENTS.md`, `README.md` und betroffene Quelldateien lesen.
- Nach Abschluss tatsächliche Änderungen, Branch/Commit, Testbefehl, Ergebnis und offene Probleme hier festhalten.
- Dokumentierte Ergebnisse niemals als selbst ausgeführte Tests ausgeben.

## Übergabe

- **Von:** Dokumentationsanalyse
- **An:** nächster bearbeitender Agent
- **Nächster Auftrag:** aktuellen Code- und Teststand feststellen, dann konkrete Probleme priorisieren.
- **Nicht ändern:** Anwendungscode ohne gesonderten Auftrag.

## Änderungsprotokoll

| Datum | Änderung | Tests |
| --- | --- | --- |
| 29.10.2026 | Gemeinsame Status- und Übergabestruktur angelegt | Nicht ausgeführt |
| 30.10.2026 | Build-Test (Claude): Abhängigkeiten installiert, `next build` → Typfehler `battery_power` in `api/energy/route.ts`; `next lint` ohne ESLint-Konfiguration; `.env.local` enthält nur Kommentar, gitleaks über die ganze Historie: keine Funde | `npm install`, `npx next build`, `npx next lint` in `node:20-slim` |
