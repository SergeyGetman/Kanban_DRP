/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY_FIREBASE: string;
    readonly VITE_API_KEY_AUTH_DOMAIN: string;
    readonly VITE_API_KEY_PROJECT_ID: string;
    readonly VITE_API_KEY_STORAGE_BUCKET: string;
    readonly VITE_API_KEY_MESSAGE_IN_SENDERID: string;
    readonly VITE_API_KEY_APP_I_DATA_ID: string;
    readonly VITE_API_KEY_GOOGLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}