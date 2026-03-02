import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    root: 'src',
    base: '', // Empty string or './' makes generated URLs relative
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});
