# Firebase specifications

In diesem Dokument halten wir die Spezifikationen für Google Firebase fest.

Wir haben eine [Firestore Datenbank](#firestore) und eine [Storage Datenbank](#storage).

**Wichtig:**
Es sollte nie davon ausgegangen werden, dass alle Felder existieren.
Fehlkonstruierte Elemente sollten ignoriert oder anderweitig behandelt werden.

## Firestore

Die Firestore Datenbank ist wie folgt aufgebaut:
```
- info
- quotes
- users
```

### Info

Die `info` collection ist wie folgt aufgebaut:
```
- all_quotes
- quotes
```

Dabei ist `all_quotes` eine collection mit den IDs aller Zitate, die dafür genutzt werden kann, um den Traffic in der eigenltichen Datenbank gering zu halten, wenn man ein zufälliges Zitat auswählen will.

`quotes` hat ein einzelnes Feld `version`, welches die Versionsnummer der Datenbank beinhaltet, mit der die App weiß, ob sie ihre lokale Datenbank aktualisieren muss.

Diese collection kann nur von Adminsitratoren bearbeitet werden.

### Quotes

Die `quotes` collection beinhaltet nur die Zitate, wobei jedes Zitat wie folgt aufgebaut ist:

```
id
- category
- image_url
- quote
- quote_url
```

Diese collection kann nur von Adminsitratoren bearbeitet werden.

#### Category

Ein all caps String, der das Zitat in Kategorien einteilt. Bis jetzt wird dieses Feld im Frontend noch nicht benutzt.

#### Image\_url

Eine Url zu einem Bild, das diesem Zitat entspricht. Dies kann ein ästhetisches Bild sein, es kann aber auch ein Bild sein, wo das Zitat bereits drauf steht. Es hinterliegt nicht immer ein Bild.

#### Quote

Das tatsächliche Zitat als String gespeichert.

#### Quote\_url

Eine url zu dem gegebenen Zitat. Diese ist häufig invalid und ein Überbleibsel des Datensatzes und sollte daher nicht benutzt werden.

### Users

Die `users` collection beinhaltet alle Nutzer und deren wichtige Daten. 

Ein Element dieser collection kann nur von dem Nutzer, dessen `uuid` mit der id des Elementes übereinstimmt betrachtet oder bearbeitet werden.

Ein Nutzerelement ist wie folgt aufgebaut:

```
uuid
- admin
- favorites
	- id
	- ...
- last_quotes
	- 0
		- date
		- id
	...
- name
```

#### Admin

Dieses Feld ist optional und enthält einen Boolean, ob dieser Nutzer über Adminsitratorrechte verfügt.

**Wichtig:**  
Da dieses Feld wichtig für die Sicherheit ist, kann es nur von Administratoren gesetzt werden und darf beim Erstellen nicht gesetzt werden.

#### Favorites

Eine Liste mit den IDs der Zitaten, die der Nutzer als Favoriten markiert hat.

#### Last\_quotes

Ein Array mit den letzten Zitaten, die dem Nutzer zugewiesen wurden.

Das Feld `date` ist vom Datentyp *date* und beschreibt das Datum des Zitates.

Das Feld `id` ist die ID des entsprechenden Zitates.

#### Name

Der Name, den sich der Nutzer selbst vergeben hat.

# Storage

Die Storage Datenbank sieht wie folgt aus:
```
- profile_images
```

## Profile\_images

Hier werden alle Profilbilder gespeichert. Diese werden als PNG unter dem Namen der ID des Nutzers gespeichert. Anders hat der Nutzer keinen Schreib- oder Lesezugriff.
