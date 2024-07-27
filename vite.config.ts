import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import { injectedPreloadLinkTags } from './src/styles/font-preload';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '#/', replacement: '/src/' }],
    },
    plugins: [
        react(),
        createHtmlPlugin({
            inject: {
                tags: injectedPreloadLinkTags,
            },
        }),
    ],
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
