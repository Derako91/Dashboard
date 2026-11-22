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

## Statuskopf in `versionsstand.md` (DevHub-Standard)
Gilt seit 22.11.2026. Vollständiger Standard: `STANDARD-VERSIONSSTAND.md` im Repository `Derako91/Devhub`; jeder PR wird
automatisch danach geprüft (`.github/workflows/devhub.yml`).
- `versionsstand.md` ist die **einzige Statusquelle**: Projektblock (` ```yaml devhub-projekt `), je Arbeitspaket ein
  Abschnitt `## Paket <ID> – <Titel>` mit Block (` ```yaml devhub-paket `), Text (Problem / Funktioniert / Offen /
  Nächster Schritt / Verantwortlich / Branch+Commit / Tests) und eigenem Verlauf; darunter `## Historie` (unverändert).
- **Jeder PR gehört zu einem Paket** (`branch:` im Block = PR-Branch). Neue Arbeit: eigenes Paket im eigenen PR direkt vor
  `## Historie` anlegen. Ausnahmen: Planungs-PR (Branch `plan/…` oder Label `devhub:planung`) und Status-PR (ändert nur
  `versionsstand.md`, z. B. Abschluss nach Merge).
- **Nur den eigenen Paketabschnitt ändern** – nie fremde Pakete, Projektblock oder Historie (außer im Planungs-PR).
- **Revier einhalten:** nur Dateien aus `revier` des eigenen Pakets ändern; sonst `zustand: wartet_auf_dennis` mit `frage`.
- **Zustand** (`geplant`, `bereit`, `in_arbeit`, `wartet_auf_dennis`, `blockiert`, `uebergabe`, `erledigt`, `verworfen`) und
  **Prüfstufe** (`keine`, `behauptet`, `getestet` = automatische Tests, `attrappe`, `live`) getrennt pflegen; jede Stufe über
  `behauptet` braucht einen Eintrag in `tests` (Befehl, Datum, Umgebung, Ergebnis, erfolgreich).
- **`live` gibt nur Dennis frei.** Ein Agent trägt Live-Tests mit `art: live`, `freigabe: offen` ein.
- **Übergabe in zwei Commits:** erst die Arbeit committen; dann ein Commit nur mit `versionsstand.md`: `zustand: uebergabe`,
  `naechster`, `commit` = voller Hash des Arbeitscommits. Danach nichts mehr außer `versionsstand.md`.
- **Nach dem Merge:** Abschluss als Status-PR (`status/…`) oder Commit auf dem Standard-Branch: `zustand: erledigt`,
  `naechster: keiner`, Verlauf „angenommen durch Merge <PR>“; die Prüfstufe bleibt.
- **Konflikt in `versionsstand.md`:** abschnittsweise lösen – fremde Abschnitte vom Ziel-Branch, den eigenen aus dem Branch;
  nie Gits Konfliktblöcke einzeln. Derselbe Abschnitt auf beiden Seiten geändert: Paket `blockiert`, nicht weiterarbeiten.
