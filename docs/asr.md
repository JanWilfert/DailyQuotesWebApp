# Architecture Significant Requirements (ASR)

## Qualitätsszenarien

## Zuverlässigkeit:

**Verfügbarkeit (Z1):**

- Quelle: Benutzer bzw. möglicherweise zukünftiger Benutzer

- Auslöser: Person, welche auf die Webseite zugreifen möchte

- Artefakt: Webserver

- Umgebung: Normalbetrieb

- Antwort: Anzeige der Webseite und eines täglichen Zitats

- Antwortmaß: Verfügbarkeit von mindestens 99%

#### Strategie:
Regelmäßige Backup- und Wiederherstellungsverfahren: Implementierung regelmäßiger Backups der Webserver- und Datenbankdaten, um im Falle eines Ausfalls eine schnelle Wiederherstellung zu ermöglichen.

## Effizienz:

**Performance bei der Anzeige von Zitaten (E1):**

- Quelle: Benutzer bzw. möglicherweise zukünftiger Benutzer

- Auslöser: Anforderung eines Zitates

- Artefakt: Datenbank

- Umgebung: Spitzenlast

- Antwort: Schnelles Laden eines Zitates

- Antwortmaß: Antwort/ Anzeigen eines Zitates in unter zwei Sekunden

#### Strategie:
Optimierung der Datenbankabfragen und des Datenbanksystems: Analyse und Optimierung der Abfragen an die Datenbank, um die Antwortzeiten zu verringern, insbesondere bei komplexen Datenanforderungen.

## Sicherheit:

**Datensicherheit (S1):**

- Quelle: Externe Bedrohung (Hacker, bösartige Akteure)

- Auslöser: Versuche, auf sensible Benutzerdaten zuzugreifen

- Artefakte: Datenbank und Server der Webapp

- Umgebung: Standartbetrieb

- Antwort: Die Webapp schützt effektiv vor unbefugtem Datenzugriff

- Antwortmaß: Keine erfoglreichen Sicherheitsverletzungen; Speicherung sensibler Daten als Hashes mit Salt; kein Verlust von Nutzerdaten

## Benutzbarkeit:

**Bedienbarkeit (B1):**

- Quelle: Endbenutzer

- Auslöser: Zugriff auf die Webanwendung

- Artefakt: Benutzeroberfläche der Webapp

- Umgebung: Normalbetrieb

- Antwort: Die Benutzeroberfläche ist intuitiv und einfach zu navigieren. Nutzer brauchen müssen keine Anleitungen studieren, um die Webapp sinvoll zu verwenden.

Antwortmaß: Minimale Klicks (nicht mehr als 5) erforderlich, um zu jeder bliebigen Funktion zu gelangen; positive Rückmeldungen in Benutzerumfragen zur Benutzerfreundlichkeit

## Wartbarkeit:

**Erweiterbarkeit (W1):**

- Quelle: Entwicklungsteam

- Auslöser: Notwendigkeit, Änderungen am Code vorzunehmen oder Fehler zu beheben

- Artefakt: Codebasis der Webapp

- Umgebung: Normalbetrieb/ Wartungsbetrieb

- Antwort: Der Code ist klar strukturiert, gut dokumentiert und leicht verständlich

- Antwortmaß: Zeit für das Verständnis und die Behebung von Fehlern ist minimal