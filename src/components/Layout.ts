export const Layout = (content: string) => `
  <div class="min-h-screen bg-[#fcf8f2] text-stone-800 font-sans flex flex-col selection:bg-rose-200">
    <!-- Header/Navigation -->
    <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fcf8f2]/80 border-b border-stone-200/50">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold tracking-tighter hover:text-rose-600 transition-colors duration-300">
          Sandrine Lagacé
        </a>
        
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#/" class="hover:text-rose-600 transition-colors uppercase">Home</a>
          <a href="#/illustration" class="hover:text-rose-600 transition-colors uppercase">Illustration</a>
          <a href="#/graphic-design" class="hover:text-rose-600 transition-colors uppercase">Graphic Design</a>
          <a href="#/other" class="hover:text-rose-600 transition-colors uppercase">Other Work</a>
        </nav>
        
        <!-- Mobile menu button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="md:hidden hidden bg-[#fcf8f2] border-b border-stone-200/50 px-6 py-4 space-y-4 shadow-lg absolute w-full">
        <a href="#/" class="block text-lg font-medium hover:text-rose-600 transition-colors uppercase">Home</a>
        <a href="#/illustration" class="block text-lg font-medium hover:text-rose-600 transition-colors uppercase">Illustration</a>
        <a href="#/graphic-design" class="block text-lg font-medium hover:text-rose-600 transition-colors uppercase">Graphic Design</a>
        <a href="#/other" class="block text-lg font-medium hover:text-rose-600 transition-colors uppercase">Other Work</a>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col">
      ${content}
    </main>

    <!-- Footer -->
    <footer class="w-full bg-stone-900 text-stone-300 py-12 mt-auto">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="text-lg font-bold text-white mb-2 tracking-tight">Sandrine Lagacé</p>
          <p class="text-sm">Illustrator & Graphic Designer based in Moncton, NB</p>
        </div>
        
        <div class="flex items-center gap-6">
          <a href="mailto:sandrine.j.lagace@gmail.com" class="hover:text-white transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="https://instagram.com/sandrine.j.lagace" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
`;

// Helper to initialize interactive layout elements
export const initLayout = () => {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Active link highlighting
  const currentHash = window.location.hash || '#/';
  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('text-rose-600', 'font-bold');
      link.classList.remove('font-medium');
    }
  });
};
