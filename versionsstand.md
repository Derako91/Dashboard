# Versionsstand – Dashboard

```yaml devhub-projekt
devhub: 1
projekt: dashboard
titel: Dashboard
auftrag: README.md
freigabe: dennis
```

Der bisherige Stand steht **unverändert** unter „Historie“. Offene Punkte von dort sind noch **nicht** in Pakete übertragen – das geschieht mit dem nächsten Arbeits-PR (eigenes Paket) oder per Planungs-PR von Dennis.

## Paket U – Umstellung auf Statuskopf

```yaml devhub-paket
id: U
titel: versionsstand.md auf DevHub-Statuskopf umstellen, PR-Prüfung einbinden
agent: claude
zustand: uebergabe
naechster: dennis
haengt_ab_von: []
branch: plan/statuskopf
commit: e7c9e405cfd0418fcd7c689a03bd43387ba3ea9e
revier: [AGENTS.md, .gitattributes]
pruefstufe: behauptet
tests: []
frage: null
aktualisiert: 2026-11-22T20:30Z
```

- **Problem:** Projekt war in der DevHub-Übersicht nicht sichtbar (Status nur als Freitext); PRs wurden nicht geprüft.
- **Funktioniert:** Statuskopf mit Projektblock und diesem Paket; bisheriger Inhalt unverändert als Historie; Regeln in AGENTS.md; `.gitattributes`. Keine automatische PR-Prüfung: öffentliches Repo, GitHub erlaubt keine Actions aus dem privaten Devhub (Lauf im PR schlug deshalb fehl, Workflow wieder entfernt). Geänderte Dateien: .gitattributes, AGENTS.md, versionsstand.md. Kein Produktcode.
- **Geprüft:** Statuskopf mit dem DevHub-Validator und die PR-Prüfung lokal gegen diesen Branch (Cloud, 22.11.2026) – gültig. Die Prüfung im PR selbst läuft per GitHub Actions.
- **Offen:** Freigabe durch Dennis (Merge). Offene Punkte aus der Historie in Pakete übertragen (nächster Arbeits-PR oder Planungs-PR). Laufende PRs anderer Agenten brauchen beim nächsten Push ein eigenes Paket.
- **Nächster Schritt:** Dennis prüft den PR.
- **Verantwortlich:** Claude → Dennis · **Branch/Commit:** siehe Block · **Tests:** keine (Dokumentation).

### Verlauf U
| Datum | Änderung | Test |
| --- | --- | --- |
| 22.11.2026 | Umstellung auf Statuskopf (Claude), Commit `2cc3fe6` | Validator + PR-Prüfung lokal: gültig |
| 22.11.2026 | Workflow entfernt (öffentliches Repo), Commit `e7c9e40` | Validator lokal: gültig |

## Historie

Inhalt von `versionsstand.md` bis 22.11.2026, **unverändert übernommen**:

# Versionsstand – Dashboard

> **Dokumentationsstand:** 29.10.2026 · **Bezugs-Commit:** `90fa1480b0b6ac90ac0aa98f0eed30c6a6287798` · **Status:** ungeprüft. Diese Übersicht wurde anhand der Repository-Struktur erstellt; Anwendung, Tests und Heimserver wurden nicht ausgeführt.

## Auf einen Blick

| Frage | Antwort |
| --- | --- |
| **Hauptproblem** | Kein aktuelles Problem – das Projekt ruht. Die Oberfläche, für die es gedacht war, hat sich weiterentwickelt; dieses Dashboard wird derzeit nicht gebraucht. (Bekannter Build-Fehler `battery_power`, siehe Protokoll, wird erst bei Wiederaufnahme behoben.) |
| **Was vorhanden ist** | Next.js/TypeScript-Dashboard, Home-Assistant-Einrichtung und `src/`-Quellen laut Repository |
| **Was funktioniert** | `npm install` ok; `next build` kompiliert, scheitert aber an der Typprüfung (30.10.2026, Node 20, Next.js 14.2.35) |
| **Was jetzt geklärt werden muss** | Nichts akut. Langfristige Idee: eine zusätzliche, touchoptimierte Tablet-Ansicht (große Kacheln, einfache Bedienung) – ob als Neuanfang oder auf Basis dieses Codes, wird dann entschieden. |
| **Nächster sinnvoller Test** | Erst bei Wiederaufnahme: Typfehler beheben, `npx next build`, danach `next start` |

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
| 30.10.2026 | Einordnung: Projekt ruht, kein aktuelles Problem; langfristig touchoptimierte Tablet-Ansicht als Idee | Nicht ausgeführt |
