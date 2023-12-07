# Einführung und Ziele

## Qualitätsziele
**Zuverlässigkeit:** Die Webapp soll eine sehr hohe Zuverlässigkeit und Verfügbarkeit haben. Diese Verfügbarkeit soll mindestens 99% betragen.

**Effizienz:** Tägliche und gespeicherte Zitate sollen sehr schnell (in unter 2 Sekunden) dem Nutzer angezeigt werden.

**Sicherheit:** Nutzerdaten sollen nicht verloren gehen beziehungsweise nicht von Dritten eingesehen werden können. Zudem sollen sensible Daten nicht im Klartext gespeichert werden, sondern nur mit Salt und gehasht.

**Benutzbarkeit:** Die Benutzeroberfläche soll intuitiv sein. Der Nutzer soll einfach zu den gewünschten Bereichen navigieren können. Schlussendlich soll der Nutzer ohne das Studieren einer Anleitung die Webapp sinnvoll und korrekt verwenden können.

**Wartbarkeit:** Der Code soll innerhalb von 1.30h verstanden werden können. Die Webapp soll in einzelne Komponenten unterglieder sein, sodass im Nachhinein einfach und schnell weitere Features hinzugefügt werden können.
## Stakeholder

## Technischer Kontext

**Frontend-Webapp (Vue.js) zu Datenbank:**

- **Kanal:** Direkte Datenbankabfragen über eine API (Datenbank mit Firebase)

- **Übertragungsmedium:** Internet


**Benutzeranmeldung und Registrierung:**

- **Fachliche Eingabe:** Benutzername, Passwort

- **Technische Schnittstelle:** Direkte Abfrage an die Datenbank

**Zitate anzeigen:**

- **Fachliche Ausgabe:** Zitat des Tages, Zitate-Sammlung

- **Technische Schnittstelle:** Abfragen aus der Datenbank 

**Speichern/Teilen von Zitaten:**

- **Fachliche Eingabe:** Auswahl und Aktionen bezüglich Zitaten

- **Technische Schnittstelle:** Speichern und Aktualisieren von Daten in der Datenbank

# Bausteinsicht

## Whitebox Gesamtsystem

***Übersichtsdiagramm***

![Übersichtsdiagramm der Systemarchitektur](./diagramme/Systemarchitektur.png)

**Begründung:**

Die Architektur des "Daily Quotes" Systems ist darauf ausgelegt, eine direkte Verbindung zwischen der Webapp und der Datenbank zu ermöglichen, ohne ein separates Backend. Vue.js ermöglicht dabei eine reaktive und benutzerfreundliche Frontend-Erfahrung, während die Datenbank die nötige Speicherung und Verwaltung der Daten übernimmt.


**Enthaltene Bausteine:**

- **Frontend-Webapp (Vue.js)**: Zuständig für die Präsentation der Benutzeroberfläche und die direkte Interaktion mit der Datenbank.
- **Datenbank**: Speichert Nutzerdaten und Zitate.

**Wichtige Schnittstellen:**

- **Datenbankschnittstelle**: Direkte Kommunikation zwischen der Webapp und der Datenbank.

**Datenbank**

- **Zweck/Verantwortung**: Speicherung und Verwaltung von Nutzerdaten und Zitaten.
- **Schnittstellen**: Direkte Kommunikation mit der Webapp.
- **Qualitätsmerkmale**: Datensicherheit, hohe Verfügbarkeit, schnelle Abfragezeiten.



# Laufzeitsicht

## *Nutzer*

![image](./diagramme/SequenzdiagrammNutzer.png)

## *Zitat*

![image](./diagramme/SequenzdiagrammZitat.png)


# Verteilungssicht

## Infrastruktur Ebene 1

***\<Übersichtsdiagramm>***

Begründung

:   *\<Erläuternder Text>*

Qualitäts- und/oder Leistungsmerkmale

:   *\<Erläuternder Text>*

Zuordnung von Bausteinen zu Infrastruktur

:   *\<Beschreibung der Zuordnung>*

## Infrastruktur Ebene 2

### *\<Infrastrukturelement 1>*

*\<Diagramm + Erläuterungen>*

### *\<Infrastrukturelement 2>*

*\<Diagramm + Erläuterungen>*

...

### *\<Infrastrukturelement n>*

*\<Diagramm + Erläuterungen>*

# Querschnittliche Konzepte

## *\<Konzept 1>*

*\<Erklärung>*

## *\<Konzept 2>*

*\<Erklärung>*

...

## *\<Konzept n>*

*\<Erklärung>*

# Architekturentscheidungen
## Zuverlässigkeit - Verfügbarkeit (Z1):
**Architekturentscheidungen und Begründungen:**

• Einsatz von Cloud-basierten Services: Die Nutzung von Cloud-Diensten ermöglicht eine hohe Skalierbarkeit und Zuverlässigkeit. Cloud-Anbieter bieten in der Regel garantierte Uptime-Prozentsätze und schnell skalierbare Infrastrukturen.

**Entwurfsmuster und Begründungen:**

• Microservice-Architektur: Die Aufteilung der Anwendung in Microservices ermöglicht eine unabhängige Skalierung und Wartung einzelner Dienste, was die Verfügbarkeit des Gesamtsystems verbessert.
• Health-Check-APIs: Health-Check-APIs ermöglichen eine kontinuierliche Überwachung des Systemzustands und eine schnelle Reaktion auf Ausfälle, wodurch die Verfügbarkeit erhöht wird.

## Effizienz - Performance bei der Anzeige von Zitaten (E1):
**Architekturentscheidungen und Begründungen:**

• Optimierung der Datenbankstruktur: Eine gut strukturierte und optimierte Datenbank verbessert die Performance bei Abfragen, besonders unter hoher Last.

**Entwurfsmuster und Begründungen:**

• Data Loader: Das Vorladen von Daten minimiert die Wartezeit für den Benutzer und verbessert das allgemeine Antwortverhalten der Anwendung.

## Sicherheit - Datensicherheit (S1):
**Architekturentscheidungen und Begründungen:**

• Implementierung von TLS/SSL: Die Verwendung von Verschlüsselung für die Datenübertragung ist entscheidend, um die Datenintegrität und -sicherheit zu gewährleisten.
• Regelmäßige Sicherheitsaudits und Penetrationstests: Diese Maßnahmen sind wichtig, um Schwachstellen proaktiv zu identifizieren und zu beheben, bevor sie ausgenutzt werden können.

**Entwurfsmuster und Begründungen:**

• Secure Hash Algorithm (SHA) mit Salt für Passwörter: Diese Methode bietet eine robuste Lösung zur sicheren Speicherung von Passwörtern, wodurch die Sicherheit von Benutzerkonten erhöht wird.

## Benutzbarkeit - Bedienbarkeit (B1):
**Architekturentscheidungen und Begründungen:**
• Responsive Webdesign: Dies gewährleistet, dass die Anwendung auf verschiedenen Geräten funktioniert und eine konsistente Benutzererfahrung bietet.
• Benutzerzentriertes Design: Durch Fokus auf den Benutzer kann die Anwendung intuitiver und benutzerfreundlicher gestaltet werden.

**Entwurfsmuster und Begründungen:**

• Model-View-Controller (MVC): Die Trennung von Daten, Benutzeroberfläche und Logik verbessert die Wartbarkeit und erleichtert die Entwicklung einer benutzerfreundlichen Oberfläche.

## Wartbarkeit - Erweiterbarkeit (W1):
**Architekturentscheidungen und Begründungen:**

• Modulare Codebasis: Eine modulare Struktur erleichtert die Wartung und Erweiterung der Anwendung, da Änderungen in einem Modul weniger Auswirkungen auf andere Module haben.

• Verwendung von Design Patterns: Design Patterns bieten bewährte Lösungen für häufig auftretende Probleme, was die Wartbarkeit und Erweiterbarkeit verbessert.

**Entwurfsmuster und Begründungen:**

• Observer Pattern: Dieses Muster erlaubt eine lose Kopplung zwischen Komponenten, was die Erweiterbarkeit und Wartbarkeit der Anwendung verbessert.
# Qualitätsanforderungen


## Qualitätsbaum

![image](./diagramme/qualitätsmerkmalBaum.png)

## Qualitätsszenarien

- Wartbarkeit
- Effizienz
- Benutzbarkeit
- Zuverlässigkeit
- Sicherheit

die jeweiligen Beschreibungen sind [hier](asr.md) zu finden
# Risiken und technische Schulden

# Glossar

|Begriff|Definition|
|---|---|
|*\<Begriff-1>*|*\<Definition-1>*|
|*\<Begriff-2*|*\<Definition-2>*|
