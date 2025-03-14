import { marked } from 'marked';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
// import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/github.css";
// import "highlight.js/styles/monokai-sublime.css";
// import "highlight.js/styles/nord.css";
import "highlight.js/styles/atom-one-light.css";
// import "highlight.js/styles/github.css";

// Register Highlight.js languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

// Configure Marked to use Highlight.js for syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    try {
      // Check if the language is supported by Highlight.js, default to plaintext if not
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    } catch (error) {
      console.error(`Error highlighting code: ${error}`);
      return code; // Return the original code if highlighting fails
    }
  },
});

export default marked;
