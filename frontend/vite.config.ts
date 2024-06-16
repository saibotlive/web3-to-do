import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
  };
});
