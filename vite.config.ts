import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '#/', replacement: '/src/' }],
    },
    plugins: [react()],
    server: {
        proxy: {
            '/tmap': {
                target: 'https://apis.openapi.sk.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
