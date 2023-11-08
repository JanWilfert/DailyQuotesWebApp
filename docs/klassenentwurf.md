# CRC Cards

## Class Account

**Responsibilities:**  

Represent a user with a username, email and all other valuable information.

**Collaborators:**

[Remote Database](#class-remote-database)

## Class Quote

**Responsibilities:**

Represent a quote with the quote text, a link to an image, a link to the source and category.

**Collaborators:**

[Local Database](#class-local-database)  
[Remote Database](#class-remote-database)

## Class Local Database

**Responsibilities:**  

Save all the quotes from the remote to the local device to minimize network traffic.

**Collaborators:**

[Quote](#class-quote)  
[Remote Database](#class-remote-database)

## Class Remote Database

**Responsibilities:**  

Store everything like quotes, accounts, saved quotes, etc.

**Collaborators:**

[Quote](#class-quote)  
[Account](#class-account)

## Class Frontend

**Responsibilities:**  

Show everything to the user in a nice looking manner.

**Collaborators:**

[Quote](#class-quote)
[Account](#class-account)
[Local Database](#class-local-database)
[Settings](#class-settings)

## Class Settings

**Responsibilities:**  

Give the user the option to change certain aspects of the app's behavior.

**Collaborators:**

[Frontend](#class-frontend)