import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import ogPlugin from 'vite-plugin-open-graph';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '#/', replacement: '/src/' }],
    },
    plugins: [react(), svgr(), ogPlugin({
        basic: {
            title: '휴게소 먹거리 추천 서비스, 휴식맛쥬',
        }
    })],
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
