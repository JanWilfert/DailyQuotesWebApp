# Einführung und Ziele

<!--## Aufgabenstellung-->

## Qualitätsziele
**Zuverlässigkeit:**  
Die Android App soll eine sehr hohe Zuverlässigkeit und Verfügbarkeit haben. Diese Verfügbarkeit soll mindestens 99% betragen.

**Effizienz:**  
Tägliche und gespeicherte Zitate sollen sehr schnell (in unter 2 Sekunden) dem Nutzer angezeigt werden.

**Sicherheit:**  
Nutzerdaten sollen nicht verloren gehen beziehungsweise nicht von Dritten eingesehen werden können. Zudem sollen sensible Daten nicht im Klartext gespeichert werden, was jedoch von Firebase bereits [automatisch übernommen](https://cloud.google.com/firestore/docs/server-side-encryption) wird.

**Benutzbarkeit:**  
Die Benutzeroberfläche soll intuitiv sein. Der Nutzer soll einfach zu den gewünschten Bereichen navigieren können. Schlussendlich soll der Nutzer ohne das Studieren einer Anleitung die Android App sinnvoll und korrekt verwenden können.

**Wartbarkeit:**  
Der Code soll leicht zu verstehen sein. Die Android App soll in einzelne Komponenten untergliedert sein, sodass im Nachhinein einfach und schnell weitere Features hinzugefügt werden können.

<!--
## Stakeholder

|Rolle|Kontakt|Erwartungshaltung|
|---|---|---|
|*\<Rolle-1>*|*\<Kontakt-1>*|*\<Erwartung-1>*|
|*\<Rolle-2>*|*\<Kontakt-2>*|*\<Erwartung-2>*|

# Randbedingungen

# Kontextabgrenzung

## Fachlicher Kontext

**\<Diagramm und/oder Tabelle>**

**\<optional: Erläuterung der externen fachlichen Schnittstellen>**

## Technischer Kontext

**\<Diagramm oder Tabelle>**

**\<optional: Erläuterung der externen technischen Schnittstellen>**

**\<Mapping fachliche auf technische Schnittstellen>**

# Lösungsstrategie
-->

# Bausteinsicht

## Whitebox Gesamtsystem

***Übersichtsdiagramm***

![Übersichtsdiagramm der Systemarchitektur](./diagramme/android_system-architecture.png)

**Begründung:**

Die Architektur des "Daily Quotes" Systems ist darauf ausgelegt, eine direkte Verbindung zwischen der Android App und der Datenbank zu ermöglichen, ohne ein separates Backend.


**Enthaltene Bausteine:**

- **Frontend-App**:  
Zuständig für die Präsentation der Benutzeroberfläche und die direkte Interaktion mit der Datenbank.
- **Datenbank**:  
Speichert Nutzerdaten und Zitate.

**Wichtige Schnittstellen:**

- **Datenbankschnittstelle**:  
Direkte Kommunikation zwischen der App und der Datenbank.

**Datenbank**

- **Zweck/Verantwortung**:  
Speicherung und Verwaltung von Nutzerdaten und Zitaten.
- **Schnittstellen**:  
Direkte Kommunikation mit der Webapp.
- **Qualitätsmerkmale**:  
Datensicherheit, hohe Verfügbarkeit, schnelle Abfragezeiten.



# Laufzeitsicht

## *Nutzer*

![image](./diagramme/SequenzdiagrammNutzer.png)

## *Zitat*

![image](./diagramme/SequenzdiagrammZitat.png)

<!--
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
-->

# Architekturentscheidungen
## Zuverlässigkeit - Verfügbarkeit (Z1):
**Architekturentscheidungen und Begründungen:**

- **Einsatz von Cloud-basierten Services**: Die Nutzung von Cloud-Diensten ermöglicht eine hohe Skalierbarkeit und Zuverlässigkeit. Cloud-Anbieter bieten in der Regel garantierte Uptime-Prozentsätze und schnell skalierbare Infrastrukturen.

**Entwurfsmuster und Begründungen:**

- **Microservice-Architektur**: Die Aufteilung der Anwendung in Microservices ermöglicht eine unabhängige Skalierung und Wartung einzelner Dienste, was die Verfügbarkeit des Gesamtsystems verbessert.
- **Health-Check-APIs**: Health-Check-APIs ermöglichen eine kontinuierliche Überwachung des Systemzustands und eine schnelle Reaktion auf Ausfälle, wodurch die Verfügbarkeit erhöht wird.

## Effizienz - Performance bei der Anzeige von Zitaten (E1):
**Architekturentscheidungen und Begründungen:**

- **Optimierung der Datenbankstruktur**: Eine gut strukturierte und optimierte Datenbank verbessert die Performance bei Abfragen, besonders unter hoher Last.

**Entwurfsmuster und Begründungen:**

- **Data Loader**: Das Vorladen von Daten minimiert die Wartezeit für den Benutzer und verbessert das allgemeine Antwortverhalten der Anwendung.

## Sicherheit - Datensicherheit (S1):
**Architekturentscheidungen und Begründungen:**

- **Regelmäßige Sicherheitsaudits und Penetrationstests**: Diese Maßnahmen sind wichtig, um Schwachstellen proaktiv zu identifizieren und zu beheben, bevor sie ausgenutzt werden können.

## Benutzbarkeit - Bedienbarkeit (B1):
**Architekturentscheidungen und Begründungen:**
- **Responsive Design**: Dies gewährleistet, dass die Anwendung auf verschiedenen Geräten funktioniert und eine konsistente Benutzererfahrung bietet.
- **Benutzerzentriertes Design**: Durch Fokus auf den Benutzer kann die Anwendung intuitiver und benutzerfreundlicher gestaltet werden.

**Entwurfsmuster und Begründungen:**

- **Model-View-Controller (MVC)**: Die Trennung von Daten, Benutzeroberfläche und Logik verbessert die Wartbarkeit und erleichtert die Entwicklung einer benutzerfreundlichen Oberfläche.

## Wartbarkeit - Erweiterbarkeit (W1):
**Architekturentscheidungen und Begründungen:**

- **Modulare Codebasis**: Eine modulare Struktur erleichtert die Wartung und Erweiterung der Anwendung, da Änderungen in einem Modul weniger Auswirkungen auf andere Module haben.

**Entwurfsmuster und Begründungen:**

- **Observer Pattern**: Dieses Muster erlaubt eine lose Kopplung zwischen Komponenten, was die Erweiterbarkeit und Wartbarkeit der Anwendung verbessert.

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


<!--# Risiken und technische Schulden-->

<!--
# Glossar

|Begriff|Definition|
|---|---|
|*\<Begriff-1>*|*\<Definition-1>*|
|*\<Begriff-2*|*\<Definition-2>*|
-->
