# Gemeinsamer Projektstandard für Claude, Codex und andere Agenten

Dieser Standard gilt für **jede Entwicklungsaufgabe in diesem Repository** und soll bei neuen Projekten von Beginn an übernommen werden.

## Beim Start

1. `versionsstand.md` lesen: Hauptproblem, gesicherter Stand, nächster Test.
2. `README.md`, `AUFGABE.md`, passende `NACHTRAG-*.md`, `SCHNITTSTELLEN.md` und weitere projektspezifische Regeln lesen, soweit vorhanden.
3. Gegen Code und Tests prüfen, ob der dokumentierte Fehler noch besteht. Alte Nachträge sind Historie, nicht automatisch aktuelle Aufträge.

## Beim Abschluss

`versionsstand.md` **im selben Branch/PR** aktualisieren:
- **Hauptproblem:** Fehler und Auswirkung in einem Satz.
- **Funktioniert:** nur mit Beleg; sonst `ungeprüft`.
- **Erledigt:** konkrete Änderung und Commit.
- **Offen:** verbleibende Fehler, Blocker, Abhängigkeiten.
- **Nächster Schritt:** eine klare Aktion mit Abnahmekriterium.
- **Tests:** ausgeführter Befehl, Umgebung, Datum und Ergebnis. Nicht ausgeführte Tests explizit nennen.

## Zusammenarbeit

- Claude und Codex verwenden dieselbe Statusdatei als Übergabe. Rollen werden je Aufgabe vereinbart; keine parallele Bearbeitung derselben Dateien ohne Abstimmung.
- `AUFGABE.md` bleibt Zielbild; `NACHTRAG-*.md` bleibt unveränderte Praxishistorie; `versionsstand.md` ist der aktuelle, konsolidierte Stand.
- Keine Geheimnisse, Tokens, Passwörter oder private Testdaten einchecken.
- Neue Projekte sollen **ab dem ersten Commit** `AGENTS.md` und `versionsstand.md` enthalten. GitHub fügt diese Dateien nicht automatisch in neue Repositories ein; dafür muss eine Projektvorlage oder ein Initialisierungsschritt verwendet werden.
