import { Layout, initLayout } from './components/Layout.js';
import { HomePage } from './pages/Home.js';
import { IllustrationPage } from './pages/Illustration.js';
import { GraphicDesignPage } from './pages/GraphicDesign.js';
import { OtherPage } from './pages/Other.js';
import './index.css';
// Simple Router
const router = async () => {
    const path = window.location.pathname;
    const app = document.querySelector('#app');
    if (!app)
        return;
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
    }
    catch (error) {
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
    // Fade back in
    requestAnimationFrame(() => {
        app.classList.remove('opacity-0');
        app.classList.add('opacity-100');
    });
    // Handle SPA navigation links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        // Only hijack internal links, not mailto or external
        if (link.getAttribute('href')?.startsWith('/') && !link.getAttribute('target')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                const href = e.currentTarget.getAttribute('href');
                if (href) {
                    window.history.pushState(null, '', href);
                    router();
                }
            });
        }
    });
};
// Listen for back/forward browser navigation
window.addEventListener('popstate', router);
// Wait for DOM
document.addEventListener('DOMContentLoaded', router);
//# sourceMappingURL=main.js.map