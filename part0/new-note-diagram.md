```mermaid
sequenceDiagram

participant browser
participant server

Note right of browser: User types a note and clicks the "Save" button

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
Note right of server: Server processes the form data (note content)
server-->>browser: HTTP 302 redirect response
deactivate server

Note right of browser: Browser receives redirect to /notes

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: the css file
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: the JavaScript file
deactivate server

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
deactivate server

Note right of browser: The browser executes the callback function that renders the updated list of notes
```
