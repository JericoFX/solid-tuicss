import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';
  
  return {
    plugins: [solidPlugin()],
    build: isLib ? {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'SolidTuiCSS',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'esm.js' : 'js'}`
      },
      rollupOptions: {
        external: ['solid-js'],
        output: {
          globals: {
            'solid-js': 'SolidJS'
          }
        }
      }
    } : {
      // Development/playground build
      outDir: 'dist-playground'
    },
    server: {
      port: 3000
    }
  };
});