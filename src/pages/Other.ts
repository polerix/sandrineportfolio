export const OtherPage = async () => `
  <div class="space-y-12">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900">
        Other Fun Stuff
      </h1>
      <div class="w-24 h-1 bg-rose-500 mx-auto"></div>
      <p class="text-xl text-stone-600 leading-relaxed font-medium">
        There are other artistic mediums I enjoy outside of graphic design.
      </p>
      <p class="text-lg text-stone-600 leading-relaxed">
        I love to sew and I occasionally enjoy photography, mainly macro shots of plants.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pt-8 border-t border-stone-200">
      
      <!-- Photography 1 -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/plant_foliage_1.png" alt="Photography - Succulent" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-6 flex-1 bg-white relative z-10">
          <h3 class="text-xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Succulent Macro</h3>
          <p class="text-stone-500 mt-2 text-sm">Photography</p>
        </div>
      </div>

      <!-- Sewing / Character -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/elfsit.png" alt="Elf Character Design" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-6 flex-1 bg-white relative z-10">
          <h3 class="text-xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Character Sitting</h3>
          <p class="text-stone-500 mt-2 text-sm">Character Art</p>
        </div>
      </div>

      <!-- Photography 2 -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/plant_foliage_2.png" alt="Photography - Leaves" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-6 flex-1 bg-white relative z-10">
          <h3 class="text-xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Plant Macro 2</h3>
          <p class="text-stone-500 mt-2 text-sm">Photography</p>
        </div>
      </div>

      <!-- Packaging / Craft -->
      <div class="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img src="/images/earringbox.png" alt="Earring Box Mockup" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        </div>
        <div class="p-6 flex-1 bg-white relative z-10">
          <h3 class="text-xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">Earring Packaging</h3>
          <p class="text-stone-500 mt-2 text-sm">Craft & Design</p>
        </div>
      </div>
      
    </div>
  </div>
`;
