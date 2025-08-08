import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

const repoName = 'solid-tuicss';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      'solid-tuicss': resolve(__dirname, '../src/index.ts')
    }
  },
  server: {
    port: 3001
  },
  assetsInclude: ['**/*.ttf', '**/*.png'],
  build: {
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
  }
});