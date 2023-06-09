import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

const manifest: Partial<ManifestOptions> = {
  name: 'Auleca',
  short_name: 'Auleca',
  description: 'La WebApp de los profesores de Bolivia.',
  lang: 'es',
  start_url: '/',
  display: 'standalone',
  theme_color: '#0894b3',
  icons: [
    {
      src: 'windows11/SmallTile.scale-100.png',
      sizes: '71x71',
    },
    {
      src: 'windows11/SmallTile.scale-125.png',
      sizes: '89x89',
    },
    {
      src: 'windows11/SmallTile.scale-150.png',
      sizes: '107x107',
    },
    {
      src: 'windows11/SmallTile.scale-200.png',
      sizes: '142x142',
    },
    {
      src: 'windows11/SmallTile.scale-400.png',
      sizes: '284x284',
    },
    {
      src: 'windows11/Square150x150Logo.scale-100.png',
      sizes: '150x150',
    },
    {
      src: 'windows11/Square150x150Logo.scale-125.png',
      sizes: '188x188',
    },
    {
      src: 'windows11/Square150x150Logo.scale-150.png',
      sizes: '225x225',
    },
    {
      src: 'windows11/Square150x150Logo.scale-200.png',
      sizes: '300x300',
    },
    {
      src: 'windows11/Square150x150Logo.scale-400.png',
      sizes: '600x600',
    },
    {
      src: 'windows11/Wide310x150Logo.scale-100.png',
      sizes: '310x150',
    },
    {
      src: 'windows11/Wide310x150Logo.scale-125.png',
      sizes: '388x188',
    },
    {
      src: 'windows11/Wide310x150Logo.scale-150.png',
      sizes: '465x225',
    },
    {
      src: 'windows11/Wide310x150Logo.scale-200.png',
      sizes: '620x300',
    },
    {
      src: 'windows11/Wide310x150Logo.scale-400.png',
      sizes: '1240x600',
    },
    {
      src: 'windows11/LargeTile.scale-100.png',
      sizes: '310x310',
    },
    {
      src: 'windows11/LargeTile.scale-125.png',
      sizes: '388x388',
    },
    {
      src: 'windows11/LargeTile.scale-150.png',
      sizes: '465x465',
    },
    {
      src: 'windows11/LargeTile.scale-200.png',
      sizes: '620x620',
    },
    {
      src: 'windows11/LargeTile.scale-400.png',
      sizes: '1240x1240',
    },
    {
      src: 'windows11/Square44x44Logo.scale-100.png',
      sizes: '44x44',
    },
    {
      src: 'windows11/Square44x44Logo.scale-125.png',
      sizes: '55x55',
    },
    {
      src: 'windows11/Square44x44Logo.scale-150.png',
      sizes: '66x66',
    },
    {
      src: 'windows11/Square44x44Logo.scale-200.png',
      sizes: '88x88',
    },
    {
      src: 'windows11/Square44x44Logo.scale-400.png',
      sizes: '176x176',
    },
    {
      src: 'windows11/StoreLogo.scale-100.png',
      sizes: '50x50',
    },
    {
      src: 'windows11/StoreLogo.scale-125.png',
      sizes: '63x63',
    },
    {
      src: 'windows11/StoreLogo.scale-150.png',
      sizes: '75x75',
    },
    {
      src: 'windows11/StoreLogo.scale-200.png',
      sizes: '100x100',
    },
    {
      src: 'windows11/StoreLogo.scale-400.png',
      sizes: '200x200',
    },
    {
      src: 'windows11/SplashScreen.scale-100.png',
      sizes: '620x300',
    },
    {
      src: 'windows11/SplashScreen.scale-125.png',
      sizes: '775x375',
    },
    {
      src: 'windows11/SplashScreen.scale-150.png',
      sizes: '930x450',
    },
    {
      src: 'windows11/SplashScreen.scale-200.png',
      sizes: '1240x600',
    },
    {
      src: 'windows11/SplashScreen.scale-400.png',
      sizes: '2480x1200',
    },
    {
      src: 'windows11/Square44x44Logo.targetsize-64.png',
      sizes: '64x64',
    },
    {
      src: 'windows11/Square44x44Logo.targetsize-72.png',
      sizes: '72x72',
    },
    {
      src: 'windows11/Square44x44Logo.targetsize-80.png',
      sizes: '80x80',
    },
    {
      src: 'windows11/Square44x44Logo.targetsize-96.png',
      sizes: '96x96',
    },
    {
      src: 'windows11/Square44x44Logo.targetsize-256.png',
      sizes: '256x256',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
      sizes: '48x48',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
      sizes: '60x60',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
      sizes: '64x64',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
      sizes: '72x72',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
      sizes: '80x80',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
      sizes: '96x96',
    },
    {
      src: 'windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
      sizes: '256x256',
    },
    {
      src: 'windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
      sizes: '64x64',
    },
    {
      src: 'windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
      sizes: '72x72',
    },
    {
      src: 'windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
      sizes: '80x80',
    },
    {
      src: 'windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
      sizes: '96x96',
    },
    {
      src: 'windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
      sizes: '256x256',
    },
    {
      src: 'android/android-launchericon-512-512.png',
      sizes: '512x512',
    },
    {
      src: 'android/android-launchericon-192-192.png',
      sizes: '192x192',
    },
    {
      src: 'android/android-launchericon-144-144.png',
      sizes: '144x144',
    },
    {
      src: 'android/android-launchericon-96-96.png',
      sizes: '96x96',
    },
    {
      src: 'android/android-launchericon-72-72.png',
      sizes: '72x72',
    },
    {
      src: 'android/android-launchericon-48-48.png',
      sizes: '48x48',
    },
    {
      src: 'ios/64.png',
      sizes: '64x64',
    },
    {
      src: 'ios/72.png',
      sizes: '72x72',
    },
    {
      src: 'ios/80.png',
      sizes: '80x80',
    },
    {
      src: 'ios/128.png',
      sizes: '128x128',
    },
    {
      src: 'ios/144.png',
      sizes: '144x144',
    },
    {
      src: 'ios/256.png',
      sizes: '256x256',
    },
    {
      src: 'ios/512.png',
      sizes: '512x512',
    },
    {
      src: 'ios/1024.png',
      sizes: '1024x1024',
    },
    {
      src: '/logo.png',
      sizes: '512x512',
    },
    {
      src: 'logo.png',
      sizes: '512x512',
    },
  ],
};

const pwaConfig = VitePWA({
  registerType: 'autoUpdate',
  strategies: 'generateSW',
  devOptions: {
    enabled: true,
    type: 'module',
  },
  manifest,
});

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
    },
  },
  plugins: [solidPlugin(), pwaConfig],
  server: {
    port: 3030,
  },
  build: {
    target: 'esnext',
  },
});
