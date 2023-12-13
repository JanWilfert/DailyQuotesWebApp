# Datenbank

Für die Datenbank wird [Firestore von Google Firebase](https://firebase.google.com/docs/firestore) verwendet. Die Datenbank ist NoSQL und auf sie wird vom Client direkt zugegriffen. Validierung erfolgt durch die [Security Rules](https://firebase.google.com/docs/firestore/security/get-started). Verschlüsselung erfolgt automatisch.

## Aufbau

- info
    - quotes
        - version (Long)
    - all_quotes - [more info](#info)
        - ids (Array\<Long\>)
- quotes
    - [id]
        - category (String)
        - image_url (String)
        - quote (String)
        - quote_url (String)
- users - [more info](#users)
    - [id]
        - name (String)
        - quote (String)

## Informationen

Hier sind einige Informationen, die zur Verwendung der Datenbank wichtig sind.

### Info

In der Info collection gibt es ein Element, dass *all_quotes* heißt und welches die IDs alles quotes beinhaltet. Dies lässt sich verwenden, um eine Random ID eines Zitates auszuwählen und dieses dann aus der *quotes* collection auszuwählen.  

**Wichtig:**  
Dies ist nur für den **Web-Client** beabsichtigt. Der Android Client speichert alle Zitate in einer lokalen Datenbank und wählt darüber zufällig ein Zitat aus.

### Users

Bei der erfolgreichen Registrierung eines Nutzers sollte dieser ein Element in der *users* collection erstellen. Dieses sollte die ID des Nutzers haben. Dort wird der Name des Nutzers eingetragen und mögliche zusätzliche Infos, sowie das tägliche Zitat (sobald es ermittelt ist).
