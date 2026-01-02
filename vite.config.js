
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // bind 0.0.0.0
    port: 3001,
    strictPort: true,
    allowedHosts: true,
    // If your site is https, use wss for HMR
    hmr: {
      protocol: 'wss',
      host: 'portfolio.sykou.site', // public hostname the browser uses
      port: 3001,
      clientPort: 443,              // HMR server port exposed by proxy
    },
    // If you need HTTPS directly from Vite (without proxy), uncomment:
    // https: {
    //   key: fs.readFileSync('path/to/privkey.pem'),
    //   cert: fs.readFileSync('path/to/fullchain.pem'),
    // },
  },
  preview: {
    host: true,
    port: 3001,
    strictPort: true,
    allowedHosts: true,
  },
});