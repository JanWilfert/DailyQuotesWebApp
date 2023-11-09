# CRC-Karten

## Klasse Benutzerkonto

**Verantwortlichkeit:**
- Verwaltung persönlicher Informationen des Benutzers.

**Kollaborateure:**
- [BenutzerkontoSpeicher](#klasse-benutzerkontospeicher)

## Klasse Benutzerauthentifizierung

**Verantwortlichkeit:**
- Bearbeitung von Benutzerauthentifizierung und Sitzungsverwaltung.

**Kollaborateure:**
- [BenutzerkontoSpeicher](#klasse-benutzerkontospeicher)

## Klasse ZitatDarstellung

**Verantwortlichkeit:**
- Darstellung eines einzelnen Zitats mit den zugehörigen Daten.

**Kollaborateure:**
- Keine

## Klasse ZitatSpeicher

**Verantwortlichkeit:**
- Verwaltung der Speicherung und des Abrufs von Zitaten aus einem persistenten Speicher.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)

## Klasse ZitatZwischenspeicher

**Verantwortlichkeit:**
- Pflege eines lokalen Zwischenspeichers von Zitaten.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)
- [ZitatSpeicher](#klasse-zitatspeicher)

## Klasse BenutzerkontoSpeicher

**Verantwortlichkeit:**
- Interaktion mit dem Speichermechanismus für Benutzerkonten.

**Kollaborateure:**
- [Benutzerkonto](#klasse-benutzerkonto)


## Klasse ZitatAnzeige

**Verantwortlichkeit:**
- Anzeigen eines einzelnen Zitats in der Benutzeroberfläche.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)

## Klasse Benutzereinstellungen

**Verantwortlichkeit:**
- Speichern und Verwalten von Benutzereinstellungen.

**Kollaborateure:**
- [Benutzerkonto](#klasse-benutzerkonto)


## Klasse Netzwerkkommunikation

**Verantwortlichkeit:**
- Abwicklung aller Netzwerkkommunikation.

**Kollaborateure:**
- [ZitatSpeicher](#klasse-zitatspeicher)
- [BenutzerkontoSpeicher](#klasse-benutzerkontospeicher)

## Klasse Benutzersitzung

**Verantwortlichkeit:**
- Verwaltung des Zustands der aktuellen Benutzersitzung.

**Kollaborateure:**
- [Benutzerauthentifizierung](#klasse-benutzerauthentifizierung)
- [Benutzerkonto](#klasse-benutzerkonto)


## Klasse ZitatInteraktion

**Verantwortlichkeit:**
- Bearbeitung der Interaktion des Benutzers mit einem Zitat (wie Teilen, Speichern).

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)
- [Benutzereinstellungen](#klasse-benutzereinstellungen)

## Klasse Benutzerfreundesliste

**Verantwortlichkeit:**
- Verwaltung der Freundesliste des Benutzers.

**Kollaborateure:**
- [Benutzerkonto](#klasse-benutzerkonto)
