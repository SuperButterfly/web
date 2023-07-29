import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server:{
        port:3000
    },
    esbuild: {
        loader: 'jsx', // O 'jsx'
        include: [
          // Agrega esto para el comportamiento habitual para archivos .jsx y .tsx
          'src/**/*.jsx',
          'src/**/*.tsx',
          'node_modules/**/*.jsx',
          'node_modules/**/*.tsx',
          // Agrega estos para permitir que todos los archivos .js contengan JSX
          'src/**/*',
          'node_modules/**/*',
        ],
      },
  };
});