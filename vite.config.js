import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        properties: resolve(__dirname, 'properties.html'),
        resort: resolve(__dirname, 'resort.html'),
        whyUs: resolve(__dirname, 'why-us.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
