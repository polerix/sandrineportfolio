export const HomePage = () => `
  <div class="flex flex-col md:flex-row gap-12 items-center justify-between">
    <div class="w-full md:w-1/2 space-y-6">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-stone-900">
        Hi, I'm <span class="text-rose-600 block mt-2">Sandrine.</span>
      </h1>
      <p class="text-2xl text-stone-600 font-medium tracking-wide">
        illustrator and graphic designer
      </p>
      
      <div class="pt-8 space-y-8">
        <div>
          <h2 class="text-xl font-bold uppercase tracking-widest text-stone-900 border-b-2 border-rose-200 pb-2 mb-4 inline-block lowercase">a bit about me ✨</h2>
          <ul class="space-y-3 text-stone-600 text-lg">
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              acadien
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              woman (uses she/her and they/them pronouns)
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              born and raised in moncton, new brunswick
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              2005 baby
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              very nerdy
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              cat and dog lover
            </li>
          </ul>
        </div>
        
        <div>
          <h2 class="text-xl font-bold uppercase tracking-widest text-stone-900 border-b-2 border-rose-200 pb-2 mb-4 inline-block lowercase">education</h2>
          <div class="space-y-6 text-stone-600">
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2023</p>
              <p>high school grad</p>
            </div>
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2024</p>
              <p>completed the foundation visual arts program at New Brunswick College of Craft and Design</p>
            </div>
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2024 - 2026</p>
              <p>second year in graphic design at the New Brunswick College of Craft and Design</p>
            </div>
            <div class="relative pl-6 border-l-2 border-transparent">
              <div class="absolute w-3 h-3 bg-stone-300 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900 lowercase">what comes next?</p>
              <p>i am currently working on my application to study at the University of New Brunswick to complete a bachelor of applied arts that would be done in 2028</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
      <!-- Pile of photos that can be clicked to cycle -->
      <div class="flex flex-col items-center">
        <div id="photo-pile" class="relative group w-full max-w-sm aspect-[4/5] cursor-pointer
          [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[#fcf8f2] [&>div]:rounded-2xl [&>div]:p-4 [&>div]:shadow-xl [&>div]:border [&>div]:border-stone-200 [&>div]:transition-all [&>div]:duration-500
          
          [&>div[data-layer='1']]:z-10 [&>div[data-layer='1']]:-rotate-6 [&>div[data-layer='1']]:origin-bottom-left [&>div[data-layer='1']]:scale-95
          
          [&>div[data-layer='2']]:z-20 [&>div[data-layer='2']]:rotate-3 [&>div[data-layer='2']]:origin-bottom [&>div[data-layer='2']]:scale-100
          
          [&>div[data-layer='3']]:z-30 [&>div[data-layer='3']]:-rotate-3 [&>div[data-layer='3']]:origin-bottom-right [&>div[data-layer='3']]:scale-105 hover:[&>div[data-layer='3']]:-translate-y-4 hover:[&>div[data-layer='3']]:rotate-0
        ">
          <!-- Photo 3 (Initially bottom) -->
          <div class="photo-card" data-layer="1">
               <img src="/images/slbebe.png" alt="Sandrine Baby" class="w-full h-full object-cover rounded-lg bg-stone-100" />
          </div>
          <!-- Photo 2 (Initially middle) -->
          <div class="photo-card" data-layer="2">
               <img src="/images/slgrad.png" alt="Sandrine Graduation" class="w-full h-full object-cover rounded-lg bg-stone-100" />
          </div>
          <!-- Photo 1 (Initially top) -->
          <div class="photo-card" data-layer="3">
               <img src="/images/slphoto.png" alt="Sandrine Photo" class="w-full h-full object-cover rounded-lg bg-stone-100" />
          </div>
        </div>
        <p class="text-stone-400 text-sm mt-12 animate-pulse font-medium tracking-wide uppercase">Click photos to cycle</p>
      </div>
    </div>
  </div>
`;

export const initHome = () => {
  const pile = document.getElementById('photo-pile');
  if (pile) {
    pile.addEventListener('click', () => {
      const cards = Array.from(pile.querySelectorAll('.photo-card')) as HTMLElement[];
      
      // Rotate layers: 3 -> 2, 2 -> 1, 1 -> 3
      cards.forEach(card => {
        const currentLayer = parseInt(card.getAttribute('data-layer') || '1');
        let nextLayer = currentLayer - 1;
        if (nextLayer < 1) nextLayer = 3;
        card.setAttribute('data-layer', nextLayer.toString());
      });
    });
  }
};
