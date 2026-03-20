export const IllustrationPage = async () => `
  <div class="space-y-12">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 lowercase">
        art stuff
      </h1>
      <div class="w-24 h-1 bg-rose-500 mx-auto"></div>
      <p class="text-xl text-stone-600 leading-relaxed font-medium">
        here is my illustration work from the past few years!
      </p>
      <p class="text-lg text-stone-600 leading-relaxed">
        Since starting college i've improved so fast and i've been able to try so many different styles and techniques. my favorite medium by far is digital art, i draw on <span class="font-bold text-stone-800 bg-rose-100 px-1">procreate</span> using my ipad with apple pencil and on <span class="font-bold text-stone-800 bg-rose-100 px-1">photoshop</span> using my wacom tablet. i love mixing medias together and am open to any of these mediums: acrylic paint, ink, coloured pencils, pencil and fineliner pens.
      </p>
    </div>

    <!-- Masonry-style Grid -->
    <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-16 pt-8 border-t border-stone-200">
      
      <!-- Reading Infographic -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration.png" alt="Reading Infographic" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Reading Infographic</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate, Photoshop, Illustrator</p>
        </div>
      </div>

      <!-- Editorial Article -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration_2.png" alt="Editorial Article" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Editorial Article</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Photoshop, Procreate</p>
        </div>
      </div>

      <!-- Alien Girl -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration_3.png" alt="Alien Girl" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Alien Girl</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Photoshop w/ tablet</p>
        </div>
      </div>

      <!-- Cat Island Game Case -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration_4.png" alt="Cat Island Game Case" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Cat Island Game Case</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate, Photoshop</p>
        </div>
      </div>
      
      <!-- Character Board -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration_5.png" alt="Character Board" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Character Board</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Motion Multi Pose -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/illustration_6.png" alt="Motion Multi Pose" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Motion Multi Pose</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Portrait of my boyfriend -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations.png" alt="Portrait" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Portrait</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Photoshop w/ tablet</p>
        </div>
      </div>

      <!-- Zelda Triforce Triptic -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations_1.png" alt="Zelda Triforce Hands Triptic" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Zelda Triforce Hands Triptic</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">India ink, G-nib dip pen, watercolour paper</p>
        </div>
      </div>

      <!-- Breakfast Style Study -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations_2.png" alt="Breakfast Style Study" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Breakfast Style Study</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Acrylic paint</p>
        </div>
      </div>
      
      <!-- Stickers -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations_3.png" alt="Stickers" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Various Stickers (Shark, Acorn)</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Monstera & Ivy -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/plant_foliage_3.png" alt="Leaf Study" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Leaf Studies & Stickers</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Kitchen Isometric -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations_4.png" alt="Kitchen Isometric Room" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Kitchen Isometric Room</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Castle Crab -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/castlecrab.png" alt="Castle Crab" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Castle Crab</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Smash TV -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/smashtv.png" alt="Smash TV" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Smash TV Fanart</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

      <!-- Cat Island PS4 -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/catislandps4.png" alt="Cat Island PS4 Case" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Cat Island PS4 Case</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Photoshop, Procreate</p>
        </div>
      </div>
      
      <!-- Outlines -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/karmaoutline.png" alt="Dog Outline" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Vector Outlines</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Illustrator</p>
        </div>
      </div>

      <!-- Political Cartoon / T-Shirts -->
      <div class="break-inside-avoid relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
        <img src="./images/art_illustrations_6.png" alt="T-Shirt / Overconsumption" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
          <h3 class="text-xl font-bold">Overconsumption / T-Shirt Designs</h3>
          <p class="text-sm text-rose-300 mt-1 uppercase tracking-wider font-semibold">Procreate</p>
        </div>
      </div>

    </div>
  </div>
`;
