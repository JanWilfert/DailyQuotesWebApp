# CRC-Karten

## Klasse Benutzer

**Verantwortlichkeit:**
- Verwaltung persönlicher Informationen des Benutzers.

**Kollaborateure:**
- [SpeicherBenutzer](#klasse-benutzerkontospeicher)

## Klasse Benutzerauthentifizierung

**Verantwortlichkeit:**
- Bearbeitung von Benutzerauthentifizierung und Sitzungsverwaltung.

**Kollaborateure:**
- [SpeicherBenutzer](#klasse-benutzerkontospeicher)

## Klasse ZitatDarstellung

**Verantwortlichkeit:**
- Darstellung eines einzelnen Zitats mit den zugehörigen Daten.

**Kollaborateure:**
- Keine

## Klasse SpeicherZitat

**Verantwortlichkeit:**
- Verwaltung der Speicherung und des Abrufs von Zitaten aus einem persistenten Speicher.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)

## Klasse ZwischenspeicherZitat

**Verantwortlichkeit:**
- Pflege eines lokalen Zwischenspeichers von Zitaten.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)
- [SpeicherZitat](#klasse-zitatspeicher)

## Klasse SpeicherBenutzer

**Verantwortlichkeit:**
- Interaktion mit dem Speichermechanismus für Benutzerkonten.

**Kollaborateure:**
- [Benutzer](#klasse-benutzerkonto)


## Klasse ZitatAnzeige

**Verantwortlichkeit:**
- Anzeigen eines einzelnen Zitats in der Benutzeroberfläche.

**Kollaborateure:**
- [ZitatDarstellung](#klasse-zitatdarstellung)

## Klasse Benutzereinstellungen

**Verantwortlichkeit:**
- Speichern und Verwalten von Benutzereinstellungen.

**Kollaborateure:**
- [Benutzer](#klasse-benutzerkonto)


## Klasse Netzwerkkommunikation

**Verantwortlichkeit:**
- Abwicklung aller Netzwerkkommunikation.

**Kollaborateure:**
- [SpeicherZitat](#klasse-zitatspeicher)
- [SpeicherBenutzer](#klasse-benutzerkontospeicher)

## Klasse Benutzersitzung

**Verantwortlichkeit:**
- Verwaltung des Zustands der aktuellen Benutzersitzung.

**Kollaborateure:**
- [Benutzerauthentifizierung](#klasse-benutzerauthentifizierung)
- [Benutzer](#klasse-benutzerkonto)


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
- [Benutzer](#klasse-benutzerkonto)
