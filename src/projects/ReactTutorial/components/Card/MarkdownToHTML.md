# Parsing markdown files to HTML

- marked.js 
- highlight.js  

In einem **React-Projekt** solltest du diese Bibliotheken nicht direkt über `<script>`- oder `<link>`-Tags im `index.html` einbinden. Stattdessen installierst du sie als npm-Pakete und importierst sie direkt in deine Komponenten.

---

## **1️⃣ Installation der Bibliotheken**
Öffne dein Terminal im Projektverzeichnis und installiere die Pakete mit:

```sh
npm install marked highlight.js
```

---

## **2️⃣ Markdown-Renderer mit Syntax-Highlighting in React**
Hier ist eine **React-Komponente**, die Markdown mit Highlight.js rendert:

```jsx
import { useEffect } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // CSS für Syntax-Highlighting

const MarkdownRenderer = ({ markdown }) => {
  useEffect(() => {
    hljs.highlightAll(); // Syntax-Highlighting anwenden
  }, [markdown]);

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={renderMarkdown()} // Sicheres Rendern des HTML-Codes
    />
  );
};

export default MarkdownRenderer;
```

---

## **3️⃣ Verwendung der Komponente**
Du kannst diese Komponente in einer anderen Datei wie `App.jsx` verwenden:

```jsx
import { useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

const App = () => {
  const [markdown, setMarkdown] = useState(`
  # Beispiel Codeblock

  \`\`\`js
  function helloWorld() {
      console.log("Hello, World!");
  }
  \`\`\`

  \`\`\`python
  def hello():
      print("Hello, World!")
  \`\`\`
  `);

  return (
    <div>
      <h1>Markdown mit Syntax-Highlighting</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

export default App;
```

---

## **4️⃣ Erklärung**
✅ `marked(markdown)`: Wandelt Markdown in HTML um  
✅ `hljs.highlightAll()`: Wendet Syntax-Highlighting auf `<pre><code>`-Blöcke an  
✅ `"highlight.js/styles/github-dark.css"`: Fügt das Styling für Codeblöcke hinzu  
✅ `dangerouslySetInnerHTML`: Erlaubt das Rendern von HTML in React (Achtung: **kein** User-Input ohne Sanitisierung!)  

### **🔥 Ergebnis**
Sobald du dein React-Projekt startest (`npm start`), werden:
- **Markdown-Inhalte** korrekt gerendert  
- **Codeblöcke farblich hervorgehoben**  

Falls du einen anderen Stil möchtest, kannst du [hier](https://cdnjs.com/libraries/highlight.js) nach weiteren Highlight.js-Themes suchen.


---

> ich brauche das für eine Card Komponente, mit der mehrere Cards mit unterschiedlichem Inhalt gerendered werden. Das markdown kommt je Komponente aus separaten .md-Dateien und muss nur beim ersten Mal gerendered werden. Brauche ich dann useState überhaupt?  

Nein, du **brauchst `useState` nicht unbedingt**, wenn der Markdown-Inhalt nur einmal geladen und nicht mehr verändert wird. Stattdessen kannst du `useEffect` direkt verwenden, um die `.md`-Datei **beim ersten Rendern** zu laden.  

---

## **🚀 Optimierte Card-Komponente**
Falls jede Card ihren eigenen Markdown-Inhalt aus einer Datei lädt:

```jsx
import { useEffect, useState } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const MarkdownCard = ({ file }) => {
  const [content, setContent] = useState(""); // Zustand für das Markdown

  useEffect(() => {
    fetch(file) // Lade die .md-Datei
      .then((res) => res.text())
      .then((text) => setContent(marked(text)));

    hljs.highlightAll(); // Syntax-Highlighting nach dem ersten Render
  }, []); // Läuft nur einmal beim ersten Render

  return (
    <div className="card">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MarkdownCard;
```

---

## **🌟 Verwendung in `App.jsx`**
Falls du **mehrere Cards mit unterschiedlichen Markdown-Dateien** rendern willst:

```jsx
const App = () => {
  return (
    <div>
      <MarkdownCard file="/docs/tutorial.md" />
      <MarkdownCard file="/docs/example.md" />
    </div>
  );
};

export default App;
```

---

## **💡 Warum kein `useState` für `markdown`?**
- Der Inhalt kommt **direkt aus der `.md`-Datei** und **ändert sich nicht dynamisch**.  
- `setContent(marked(text))` reicht aus, um den HTML-Code **einmal** zu setzen.  
- `useEffect([], [])` sorgt dafür, dass das Laden und Syntax-Highlighting **nur einmal** passiert.  

👉 **Falls sich das Markdown nachträglich ändern kann (z. B. durch Benutzerinteraktion), wäre `useState` sinnvoll.** 🚀