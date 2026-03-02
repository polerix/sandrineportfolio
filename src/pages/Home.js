export const HomePage = () => `
  <div class="flex flex-col md:flex-row gap-12 items-center justify-between">
    <div class="w-full md:w-1/2 space-y-6">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-stone-900">
        Hi, I'm <span class="text-rose-600 block mt-2">Sandrine.</span>
      </h1>
      <p class="text-2xl text-stone-600 font-medium tracking-wide">
        Illustrator and Graphic Designer based in Moncton, NB.
      </p>
      
      <div class="pt-8 space-y-8">
        <div>
          <h2 class="text-xl font-bold uppercase tracking-widest text-stone-900 border-b-2 border-rose-200 pb-2 mb-4 inline-block">About Me</h2>
          <ul class="space-y-3 text-stone-600 text-lg">
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              Acadien
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              Woman (she/her and they/them pronouns)
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              Born and raised in Moncton, New Brunswick
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              2005 baby
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              Very nerdy
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">✧</span> 
              Cat and dog lover
            </li>
          </ul>
        </div>
        
        <div>
          <h2 class="text-xl font-bold uppercase tracking-widest text-stone-900 border-b-2 border-rose-200 pb-2 mb-4 inline-block">Education</h2>
          <div class="space-y-6 text-stone-600">
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2023</p>
              <p>High school grad</p>
            </div>
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2024</p>
              <p>Completed the Foundation Visual Arts program at New Brunswick College of Craft and Design</p>
            </div>
            <div class="relative pl-6 border-l-2 border-stone-200">
              <div class="absolute w-3 h-3 bg-rose-400 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2024 - 2026</p>
              <p>Second year in Graphic Design at the New Brunswick College of Craft and Design</p>
            </div>
            <div class="relative pl-6 border-l-2 border-transparent">
              <div class="absolute w-3 h-3 bg-stone-300 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fcf8f2]"></div>
              <p class="font-bold text-stone-900">2026 - 2028 (Planned)</p>
              <p>Currently working on application to study at the University of New Brunswick to complete a Bachelor of Applied Arts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
      <!-- Image of Sandrine or a representative illustration -->
      <div class="relative group">
        <div class="absolute -inset-4 bg-rose-200 rounded-2xl rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
        <div class="absolute -inset-4 bg-stone-800 rounded-2xl -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>
        <div class="relative bg-[#fcf8f2] rounded-xl p-4 shadow-xl border border-stone-200 transform transition-transform duration-500 hover:scale-105 z-10 w-full max-w-sm aspect-[4/5] flex items-center justify-center overflow-hidden">
             <!-- Fallback if we don't have a profile photo -->
             <img src="/images/illustration_1.png" alt="Featured Art" class="w-full h-full object-cover rounded-lg" onerror="this.src='https://placehold.co/400x500/e7e5e4/a8a29e?text=Sandrine+Lagac%C3%A9'" />
        </div>
      </div>
    </div>
  </div>
`;
//# sourceMappingURL=Home.js.map