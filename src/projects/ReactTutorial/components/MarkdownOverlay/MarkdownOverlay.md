
https://highlightjs.org/

### Markdown to HTML

Parsing markdown with [marked.js](https://marked.js.org/):

```html
<html>
  <head>
    <title>Markdown Overlay</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  </head>
  <body>
    <button onclick="openOverlay()">Markdown anzeigen</button>

    <div class="overlay" id="overlay">
      <div class="close-btn" onclick="closeOverlay()">×</div>
      <div class="content" id="markdown-content">Lade Inhalt...</div>
    </div>
  </body>
</html>
```

```js
async function openOverlay() {
  const response = await fetch('example.md'); // Pfad zur Markdown-Datei
  const text = await response.text();
  document.getElementById('markdown-content').innerHTML = marked.parse(text);
  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
```

```css
body {
  font-family: Arial, sans-serif;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  justify-content: center;
  align-items: center;
}

.content {
  background: white;
  padding: 20px;
  max-width: 600px;
  max-height: 80%;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
}
```