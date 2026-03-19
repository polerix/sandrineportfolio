export const GraphicDesignPage = async () => `
  <div class="space-y-12">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 lowercase">
        design stuff
      </h1>
      <div class="w-24 h-1 bg-rose-500 mx-auto"></div>
      <p class="text-xl text-stone-600 leading-relaxed font-medium">
        this is my graphic design work such as page layout, logos and typography.
      </p>
      <p class="text-lg text-stone-600 leading-relaxed">
        i use maineley <span class="font-bold text-stone-800 bg-rose-100 px-1">indesign</span>, <span class="font-bold text-stone-800 bg-rose-100 px-1">illustrator</span>, and <span class="font-bold text-stone-800 bg-rose-100 px-1">photoshop</span> to bring concepts to life.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-stone-200">
      
      <!-- The Secret Garden -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/document_printed_page.png" alt="The Secret Garden" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-2">
          <div>
            <h3 class="text-2xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">The Secret Garden</h3>
            <p class="text-stone-500 mt-2">Book cover & chapter layouts</p>
          </div>
          <p class="text-xs text-rose-500 mt-6 uppercase tracking-[0.2em] font-bold">InDesign, Photoshop, Drawing Tablet</p>
        </div>
      </div>

      <!-- Earrings Packaging -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/container_carton.png" alt="Earrings Packaging Design" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-2">
          <div>
            <h3 class="text-2xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Earrings Packaging</h3>
            <p class="text-stone-500 mt-2">Custom packaging structure and branding</p>
          </div>
          <p class="text-xs text-rose-500 mt-6 uppercase tracking-[0.2em] font-bold">Photoshop, InDesign, Illustrator</p>
        </div>
      </div>

      <!-- Brochures and Kits -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/document_printed_page_1.png" alt="Brochure and Kit" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-2">
          <div>
            <h3 class="text-2xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Branding Materials</h3>
            <p class="text-stone-500 mt-2">4-Panel Brochure, Logo Kit, Business Cards</p>
          </div>
          <p class="text-xs text-rose-500 mt-6 uppercase tracking-[0.2em] font-bold">InDesign, Illustrator, Photoshop</p>
        </div>
      </div>

      <!-- Posters & Album Covers -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/structure_sign.png" alt="Album and Posters" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-2">
          <div>
            <h3 class="text-2xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Music & Movie Posters</h3>
            <p class="text-stone-500 mt-2">Ghost Album Cover, Saw Movie Poster, MCR Lyric Poster, Persona 5 Soundtrack</p>
          </div>
          <p class="text-xs text-rose-500 mt-6 uppercase tracking-[0.2em] font-bold">Procreate, Photoshop, Illustrator, Markers</p>
        </div>
      </div>

      <!-- Typography -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full md:col-span-2 md:flex-row">
        <div class="md:w-1/2 aspect-[4/3] md:aspect-auto h-full overflow-hidden bg-stone-100">
          <img src="/images/document_printed_page_2.png" alt="Typography" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="md:w-1/2 p-8 flex flex-col justify-center bg-white relative z-10">
          <div>
            <h3 class="text-2xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Typography & Layout</h3>
            <p class="text-stone-500 mt-4 leading-relaxed">
              Explorations in text arrangement highlighting negative space, creative type, patchwork typography, poem posters, and editorial mastheads.
            </p>
          </div>
          <p class="text-xs text-rose-500 mt-8 uppercase tracking-[0.2em] font-bold">InDesign, Illustrator, Procreate</p>
        </div>
      </div>
      
    </div>
  </div>
`;
