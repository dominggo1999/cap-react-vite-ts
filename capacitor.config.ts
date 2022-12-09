import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'test-vite',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    buildOptions: {
      keystorePath: 'test-app.keystore',
      keystorePassword: 'password',
      keystoreAlias: 'your_key_alias',
      keystoreAliasPassword: 'password',
      releaseType: 'APK',
    },
  },
};

if (process.env.DEV) {
  config.server = {
    hostname: 'localhost',
    url: 'http://localhost:5173/',
    cleartext: true,
  };
}

export default config;
