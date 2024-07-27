import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HtmlTagDescriptor } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontsDirectory = resolve(__dirname, '../assets/fonts');
const fontFiles = readdirSync(fontsDirectory).filter((file) =>
    file.endsWith('.woff2'),
);

export const injectedPreloadLinkTags: HtmlTagDescriptor[] = fontFiles.map(
    (fontFile) => ({
        injectTo: 'head',
        tag: 'link',
        attrs: {
            rel: 'preload',
            href: `./assets/fonts/${fontFile}`,
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
        },
    }),
);
