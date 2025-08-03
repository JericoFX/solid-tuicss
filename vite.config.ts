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
        external: ['solid-js', 'solid-js/web'],
        output: {
          globals: {
            'solid-js': 'SolidJS',
            'solid-js/web': 'SolidJSWeb'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') {
              return 'solid-tuicss.css';
            }
            return assetInfo.name;
          }
        }
      },
      target: 'esnext',
      minify: 'esbuild'
    } : {
      outDir: 'dist-playground',
      target: 'esnext'
    },
    server: {
      port: 3000,
      host: true,
      hmr: {
        overlay: false
      }
    },
    optimizeDeps: {
      include: ['solid-js', 'solid-js/web'],
      force: true
    },
    esbuild: {
      target: 'esnext',
      format: 'esm'
    }
  };
});