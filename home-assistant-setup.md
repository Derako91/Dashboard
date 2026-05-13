# Home Assistant Setup für Windows

## Installation auf Windows

### Option 1: Docker Desktop (EMPFOHLEN)

**Schritt 1: Docker Desktop installieren**
- Download: https://www.docker.com/products/docker-desktop
- Installer ausführen
- Windows neu starten

**Schritt 2: Home Assistant starten**

Öffne PowerShell als Administrator und führe aus:

```powershell
docker run -d `
  --name homeassistant `
  --privileged `
  --restart unless-stopped `
  -e TZ=Europe/Berlin `
  -v C:/homeassistant:/config `
  -p 8123:8123 `
  ghcr.io/home-assistant/home-assistant:latest
```

**Schritt 3: Zugriff**
- Browser: http://localhost:8123
- Warte 2-3 Minuten beim Start

**Container verwalten:**
```powershell
# Status anzeigen
docker ps

# Logs anschauen
docker logs homeassistant -f

# Container stoppen
docker stop homeassistant

# Container starten
docker start homeassistant

# Container löschen (komplett neu)
docker rm homeassistant
```

---

### Option 2: Standalone Installation (ohne Docker)

1. Python 3.11+ installieren (mit "Add to PATH" ankreuzen)
2. PowerShell öffnen:
```powershell
python -m venv C:\homeassistant\venv
C:\homeassistant\venv\Scripts\Activate.ps1
pip install homeassistant
hass -c C:\homeassistant
```

3. Zugriff: http://localhost:8123

---

## Erste Einrichtung

1. Home Assistant öffnet sich automatisch
2. Sprache: Deutsch
3. Ort: Karlsruhe
4. Benutzer erstellen
5. Fertig!

---

## Nächste Schritte (nach Installation)

- Anker Integration installieren
- REST-API aktivieren
- Sensor-Entities konfigurieren
- Dein Dashboard integrieren