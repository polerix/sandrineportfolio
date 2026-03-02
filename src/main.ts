import { Layout, initLayout } from './components/Layout.js';
import { HomePage, initHome } from './pages/Home.js';
import { IllustrationPage } from './pages/Illustration.js';
import { GraphicDesignPage } from './pages/GraphicDesign.js';
import { OtherPage } from './pages/Other.js';
import './index.css';

// Simple Router
const router = async () => {
    // Default to home if no hash or just '#'
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');
    const app = document.querySelector<HTMLDivElement>('#app');

    if (!app) return;

    // Add a fade transition class for smooth page loads
    app.classList.add('opacity-0', 'transition-opacity', 'duration-500');

    let pageContent = '';

    // Wait a tiny bit to allow the opacity-0 to take effect
    await new Promise(resolve => setTimeout(resolve, 50));

    try {
        switch (path) {
            case '/':
            case '/index.html':
                pageContent = HomePage();
                break;
            case '/illustration':
                pageContent = await IllustrationPage();
                break;
            case '/graphic-design':
                pageContent = await GraphicDesignPage();
                break;
            case '/other':
                pageContent = await OtherPage();
                break;
            default:
                pageContent = `
          <div class="flex flex-col items-center justify-center py-32 text-center">
            <h1 class="text-6xl font-black mb-4 text-rose-500">404</h1>
            <p class="text-xl mb-8 text-stone-500">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" class="px-6 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors">Go back home</a>
          </div>
        `;
        }
    } catch (error) {
        console.error("Error rendering page:", error);
        pageContent = `
      <div class="flex flex-col items-center justify-center py-32 text-center">
        <h1 class="text-4xl font-black mb-4 text-red-500">Error</h1>
        <p class="text-xl mb-8 text-stone-500">Something went wrong while loading this page.</p>
        <button onclick="window.location.reload()" class="px-6 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-700 transition-colors">Try again</button>
      </div>
    `;
    }

    app.innerHTML = Layout(pageContent);
    initLayout();
    if (path === '/' || path === '/index.html') {
        initHome();
    }

    // Fade back in
    requestAnimationFrame(() => {
        app.classList.remove('opacity-0');
        app.classList.add('opacity-100');
    });

    // We don't need to hijack links anymore since hash changes automatically trigger window 'hashchange' events
};

// Listen for browser navigation (hash changes)
window.addEventListener('hashchange', router);

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    // If we land on the root without a hash, redirect to #/
    if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = '#/';
    } else {
        router();
    }
});
