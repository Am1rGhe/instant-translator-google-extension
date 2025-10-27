# Instant Translator – Chrome Extension

**Instant Translator** is a simple Chrome extension that translates any selected text directly on a web page.  
The project is built in **three progressive stages** to gradually learn how to develop a full Chrome extension using **HTML, CSS, and Vanilla JavaScript**.

---

## Project Goal

Create a Chrome extension that instantly displays the translation of selected text — starting with a local dictionary and later integrating a real translation API.

---

## Development Stages

### Stage 1 – Local Prototype

- Set up the extension structure (`manifest.json`, `popup.html`, `background.js`, `content.js`).
- Design the **popup interface** and the **translation bubble** displayed on the page.
- Use a **local JavaScript dictionary** for basic translations.
  > Goal: understand communication between scripts (`content ↔ background`) and test the full workflow.

---

### 🥈 Stage 2 – API Integration

- Replace the local dictionary with a **free translation API**.
- Handle network requests through `background.js` using `fetch()`.
- Improve translation quality and support longer phrases.
  > Goal: connect the extension to external data sources securely.

---

### Stage 3 – Language Detection & Options

- Add a **language detection button** in the popup.
- Allow the user to know the **target language**.
- Save preferences using `chrome.storage`.
  > Goal: make the extension more interactive, customizable, and user-friendly.

---

## Technologies Used

- **HTML5** → popup interface
- **CSS3** → styling and layout
- **Vanilla JavaScript** → translation logic and inter-script communication
- **Chrome Extensions API (Manifest V3)** → manages background, content, and popup behavior

---
