declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV: string | undefined;
    }
  }
}

export {};
