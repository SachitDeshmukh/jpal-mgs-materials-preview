# Every Child Counts — Class 1 Materials Library

A lightweight, static HTML/CSS/JS catalogue for the Class 1 classroom kit.

## File structure

```text
classroom-materials-library/
├── index.html
├── data/
│   └── materials.js     ← edit this file with your Google Drive IDs
├── assets/
│   ├── app.js
│   └── styles.css
└── README.md
```

## Add your Google Drive files

Open `data/materials.js`.

For a Drive URL like:

```text
https://drive.google.com/file/d/1AbCDefGHIjkLMnOP/view
```

set:

```js
driveId: "1AbCDefGHIjkLMnOP";
```

Only add IDs for public materials. Do not add answer keys.

For the embedded preview to work for your users, the Drive file must be accessible to them. "Anyone with the link" + Viewer is the simplest public setup, subject to your organisation's sharing policy.

## Run locally

You can simply open `index.html` in a browser. If your browser blocks local iframe behaviour, use a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Updating the catalogue

The design and code are separate from the content. In normal use, you should only need to edit:

`data/materials.js`

You can add or remove materials, change descriptions, and add Drive IDs without touching the HTML/CSS/JS.

## Notes on the manual

The public catalogue follows the material categories and quantities described in the supplied Class 1 manual. Answer-key sections are deliberately not represented in `materials.js`.
