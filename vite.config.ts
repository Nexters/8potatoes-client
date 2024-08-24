import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import ogPlugin from 'vite-plugin-open-graph';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '#/', replacement: '/src/' }],
    },
    plugins: [
        react(),
        svgr(),
        ogPlugin({
            basic: {
                title: '휴식맛쥬 - 휴게소 먹거리 추천 앱 서비스',
                type: 'website',
                image: {
                    url: 'https://hyusik-matju-bucket.s3.ap-northeast-2.amazonaws.com/assets/open-graph.png',
                },
                url: 'https://hyusik-matju.site',
                description:
                    '휴게소에서 무엇을 먹을지 고민되시나요? 휴식맛쥬에서 추천하는 최고의 먹거리를 만나보세요!',
                determiner: 'the',
                locale: 'ko_KR',
                siteName: '휴식맛쥬',
                video: '/path/to/your/video.mp4',
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
