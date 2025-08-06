import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  base: process.env.NODE_ENV === 'production' ? '/solid-tuicss/' : '/',
  resolve: {
    alias: {
      'solid-tuicss': resolve(__dirname, '../src/index.ts')
    }
  },
  server: {
    port: 3001,
    host: true,
    hmr: {
      overlay: false
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.png'],
  build: {
    target: 'esnext',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/ttf|woff|woff2|eot/i.test(extType)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  optimizeDeps: {
    include: ['solid-js', 'solid-js/web'],
    force: true
  },
  esbuild: {
    target: 'esnext',
    format: 'esm'
  }
});