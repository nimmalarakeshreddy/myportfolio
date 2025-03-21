import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this to your repository name
  build: {
    outDir: 'dist',  // Ensures the build goes to the 'dist' folder
  },
});
