
# Edge Blank Tab

**Edge Blank Tab** is a minimalist extension for Microsoft Edge that replaces the new tab page with a clean, blank screen. It aims to reduce distractions, enhance privacy, and "de-Microsoft" the browsing experience by removing all default clutter from Edge's new tab.

---

## Table of Contents

- [What it does](#what-it-does)
- [How it works](#how-it-works)
- [Language detection](#language-detection)
- [Privacy-first design](#privacy-first-design)
- [Installation](#installation)
- [Permissions](#permissions)

---

## What it does

This extension simply opens a local HTML file when you create a new tab. There's no internet access, no tracking, and no communication with any external servers. Everything happens locally on your machine.

---

## How it works

The HTML file used is very simple:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" sizes="32x32" href="Images/window-maximize-dark.ico" media="(prefers-color-scheme: dark)">
    <link rel="icon" type="image/x-icon" sizes="32x32" href="Images/window-maximize.ico" media="(prefers-color-scheme: light)">
    <title>Nova guia</title>
  </head>
  <body style="background-color: #242424">
    <style>
      body {
        margin: 0;
        background-color: #ffffff; /* fallback */
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: #242424;
        }
      }

      @media (prefers-color-scheme: light) {
        body {
          background-color: #ffffff;
        }
      }
    </style>
  </body>
</html>
```

### What this HTML does:

- Sets a basic page with no margins and no content — just a background color.
- Uses media queries to match your system’s color scheme:
  - Dark mode: background becomes dark gray `#242424`.
  - Light mode: background becomes white `#ffffff`.
- Includes a matching icon (favicon) for both light and dark modes.
- Loads instantly, with no dependencies or tracking.

---

## Language detection

A tiny JavaScript snippet is also included to set the page title based on your system language:

```js
const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith('pt')) {
    document.title = 'Nova guia';
} else if (userLang.startsWith('en')) {
    document.title = 'New tab';
} else {
    document.title = 'New tab';
}
```

### What this script does:

- Detects the browser’s language setting (like `pt-BR` or `en-US`).
- If it starts with `pt`, it sets the page title to “Nova guia”.
- If it starts with `en`, or anything else, it defaults to “New tab”.

This makes the experience slightly more personal without relying on any external APIs or services.

---

## Privacy-first design

- No telemetry
- No analytics
- No ads
- No cloud services

Everything is rendered locally. Your data stays on your machine.

---

## Installation

To install manually:

1. Clone (`git clone https://github.com/horue/Edge-Blank-Tab`) or [download](https://github.com/horue/Edge-Blank-Tab/releases/tag/1.0) this repository.
2. Open Edge and go to `edge://extensions/`
3. Enable "Developer mode" (toggle on top-right).
4. Click "Load unpacked" and select the extension folder.
5. Done! Your new tabs are now blank and clean.

---

## Permissions

This extension does **not** request or require any permissions.


---

Thanks for using Edge Blank Tab!
