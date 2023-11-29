// Alpine.js handles the show/hide of the mobile nav
import Alpine from 'alpinejs'
import hljs from 'highlight.js'
import PHPLanguage from 'highlight.js/lib/languages/php'
import TypescriptLanguage from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/night-owl.min.css'

Alpine.start()

hljs.registerLanguage('php', PHPLanguage);
hljs.registerLanguage('typescript', TypescriptLanguage);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((el) => {
        const preElement = el.parentElement
        hljs.highlightElement(el);

        preElement.className = 'relative'
        const button = document.createElement('button')
        button.innerHTML = 'Copy'
        button.className = 'absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md'

        if (el) {
            button.onclick = () => {
                copyToClipboard(el.innerText)
                button.innerHTML = 'Copied!'

                setTimeout(() => {
                    button.innerHTML = 'Copy'
                }, 2000)
            }
        }

        preElement.appendChild(button)
    });

    function copyToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.textContent = text;
        document.body.appendChild(textarea);

        const selection = document.getSelection();
        const savedRanges = [];
        for (let i = 0; i < selection.rangeCount; i++) {
            savedRanges[i] = selection.getRangeAt(i).cloneRange();
        }
        selection.removeAllRanges();
        textarea.select();
        document.execCommand('copy');

        selection.removeAllRanges();
        for (let i = 0; i < savedRanges.length; i++) {
            selection.addRange(savedRanges[i]);
        }

        document.body.removeChild(textarea);
    }
})
