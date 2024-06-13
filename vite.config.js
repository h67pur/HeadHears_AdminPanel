import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
    plugins: [
        vue({
            ...templateCompilerOptions
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/store.js',
                'resources/js/admin.js'],
            refresh: true,
        }),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        }),
    ],
});
