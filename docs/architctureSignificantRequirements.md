# Architecture Significant Requirements (ASR)

## Qualitätsszenarien
**Verfügbarkeit:**

Quelle: Benutzer bzw. möglicherweise zukünftiger Benutzer

Auslöser: Person, welche auf die Webseite zugreifen möchte

Artefakt: Webserver

Umgebung: Normalbetrieb

Antowrt: Anzeige der Webseite und eines täglichen Zitats

Antwortmaß: Verfügbarkeit von mindestens 99%

**Performance bei der Anzeige von Zitaten:**

Quelle: Benutzer bzw. möglicherweise zukünftiger Benutzer

Auslöser: Anforderung eines Zitates

Artefakt: Datenbank

Umgebung: Spitzenlast

Antwort: Schnelles Laden eines Zitates

Antwortmaß: Antwort/ Anzeigen eines Zitates in unter zwei Sekunden

**Datensicherheit:**

Quelle: Externe Bedrohung (Hacker, bösartige Akteure)

Auslöser: Versuche, auf sensible Benutzerdaten zuzugreifen

Artefakte: Datenbank und Server der Webapp

Umgebung: Standartbetrieb

Antwort: Die Webapp schützt effektiv vor unbefugtem Datenzugriff

Antwortmaß: Keine erfoglreichen Sicherheitsverletzungen; Spciherung sensibler Daten als Hashes mit Salt

**Benutzerfreundlichkeit:**

Quelle: Endbenutzer

Auslöser: Zugriff auf die Webanwendung

Artefakt: Benutzeroberfläche der Webapp

Umgebung: Normalbetrieb

Antwort: Die Benutzeroberfläche ist intuitiv und einfach zu navigieren. Nutzer brauchen müssen keine Anleitungen studieren, um die Webapp sinvoll zu verwenden.

Antwortmaß: Minimale Klicks (nicht mehr als 5) erforderlich, um zu jeder bliebigen Funktion zu gelangen; positive Rückmeldungen in Benutzerumfragen zur Benutzerfreundlichkeit

