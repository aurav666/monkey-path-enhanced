/**
 * Capacitor configuration (feature 10)
 *
 * Instructions:
 * 1. npm install
 * 2. npm run build (put built files into "dist" if you have a bundler)
 * 3. npx cap add android
 * 4. npx cap sync
 * 5. npx cap open android
 *
 * Then open Android Studio, build the APK.
 */

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ratheegorv.monkeypath',
  appName: 'Monkey Path',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
