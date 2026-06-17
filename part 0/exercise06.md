sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes note and clicks Save in SPA

    Note right of browser: JS handles submit event and prevents full page reload
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (JSON note)
    activate server
    server-->>browser: 201 Created / OK (saved note in JSON)
    deactivate server

    Note right of browser: Browser updates local notes state
    Note right of browser: Browser re-renders notes list immediately (no reload)
