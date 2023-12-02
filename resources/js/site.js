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
        try {
            window.navigator.clipboard.writeText(text)
        } catch {
            // Use unsecure workaround
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Unable to copy to clipboard', err);
            }
            document.body.removeChild(textArea);
        }
    }
})
