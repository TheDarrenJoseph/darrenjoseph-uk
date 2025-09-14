import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/highlight.min.js';
import rust from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/rust.min.js';

hljs.registerLanguage('rust', rust);
hljs.highlightAll();