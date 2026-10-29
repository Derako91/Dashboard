# Versionsstand – Dashboard

> **Dokumentationsstand:** 29.10.2026 · **Bezugs-Commit:** `90fa1480b0b6ac90ac0aa98f0eed30c6a6287798` · **Status:** ungeprüft. Diese Übersicht wurde anhand der Repository-Struktur erstellt; Anwendung, Tests und Heimserver wurden nicht ausgeführt.

## Auf einen Blick

| Frage | Antwort |
| --- | --- |
| **Hauptproblem** | Kein konkreter aktueller Fehler aus den eingesehenen Projektdateien bestätigt |
| **Was vorhanden ist** | Next.js/TypeScript-Dashboard, Home-Assistant-Einrichtung und `src/`-Quellen laut Repository |
| **Was funktioniert** | Noch nicht unabhängig verifiziert |
| **Was jetzt geklärt werden muss** | Startfähigkeit, Home-Assistant-Verbindung, verfügbare Tests und tatsächlicher Entwicklungsstand |
| **Nächster sinnvoller Test** | Abhängigkeiten und Start-/Build-Skripte prüfen; Build und verfügbare Tests ausführen, Ergebnis protokollieren |

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
