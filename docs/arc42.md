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

Um die DailyQuotes Webapp starten zu können, muss nur die lokale Vue Applikation gestartet werden. Diese läuft dann auf dem eigenen PC. Im Hintergrund läuft die Authentifizierung über eine Verbindung zu Firebase.

# Architekturentscheidungen
## Zuverlässigkeit - Verfügbarkeit (Z1):

• Einsatz von Cloud-basierten Services: Die Nutzung von Cloud-Diensten ermöglicht eine hohe Skalierbarkeit und Zuverlässigkeit. Cloud-Anbieter bieten in der Regel garantierte Uptime-Prozentsätze und schnell skalierbare Infrastrukturen.
• Microservice-Architektur: Die Aufteilung der Anwendung in Microservices ermöglicht eine unabhängige Skalierung und Wartung einzelner Dienste, was die Verfügbarkeit des Gesamtsystems verbessert.
<br>-> Wir benutzen Firebase für die Authentifizierung, das Speichern der Profilbilder und als Datenbank für Nutzerdaten und Zitate. Firebase bietet kostenlose und zuverlässige Skalierbarkeit, weswegen wir uns für Googles Firebase entschieden haben.
<br>-> Zudem wollen wir die Funktion der Android-App auch bei einem temporären Ausfall der Datenbank sicherstellen. Dies kann durch eine offline Synchronisation der Datenbank gescheehen. Dafür haben wir eine Methode geschrieben, welche die Zitate-Datenbank kopiert und lokal auf dem Smartphone speicher. Dadurch können dem Nutzer, auch bei einem temporären Ausfall der Datenbank, Zitate angezeigt werden.

## Effizienz - Performance bei der Anzeige von Zitaten (E1):

• Optimierung der Datenbankstruktur: Eine gut strukturierte und optimierte Datenbank verbessert die Performance bei Abfragen, besonders unter hoher Last.
<br>-> Firebase Firestore ist eine NO SQL Datenbank. Google bietet dabei eine gute Struktur der Daten, wodurch es zu guter Performance bei Abfragen kommt.<br> 
• Data Loader: Das Vorladen von Daten minimiert die Wartezeit für den Benutzer und verbessert das allgemeine Antwortverhalten der Anwendung.
<br>-> Nur bei der Android App werden die Daten aus der Datenbank auch lokal abgespeichert.

## Sicherheit - Datensicherheit (S1):

• Durch die Benutzung von Firebase Authentifikation, gewährleisten wir eine verschlüsselte Übertragung und sichere Überprüfung/Speicherung der Nutzerdaten

## Benutzbarkeit - Bedienbarkeit (B1):
**Architekturentscheidungen und Begründungen:**
• Responsive Webdesign: Dies gewährleistet, dass die Anwendung auf verschiedenen Geräten funktioniert und eine konsistente Benutzererfahrung bietet.
• Benutzerzentriertes Design: Durch Fokus auf den Benutzer kann die Anwendung intuitiver und benutzerfreundlicher gestaltet werden.

**Entwurfsmuster und Begründungen:**

• Model-View-Controller (MVC): Die Trennung von Daten, Benutzeroberfläche und Logik verbessert die Wartbarkeit und erleichtert die Entwicklung einer benutzerfreundlichen Oberfläche.

## Wartbarkeit - Erweiterbarkeit (W1):
**Architekturentscheidungen und Begründungen:**

• Modulare Codebasis: Eine modulare Struktur erleichtert die Wartung und Erweiterung der Anwendung, da Änderungen in einem Modul weniger Auswirkungen auf andere Module haben.

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

Unsere Risiken sind in der [RMMM](RMMM.xlsx) Liste zu finden.

# Glossar

|Begriff|Definition|
|---|---|
|*\<Begriff-1>*|*\<Definition-1>*|
|*\<Begriff-2*|*\<Definition-2>*|
