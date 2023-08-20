import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@modules': '/src/modules',
      '@ioc': '/src/ioc',
      '@context': '/src/context',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@config': '/src/config',
      '@hooks': '/src/hooks',
    },
  },
});
