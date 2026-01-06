/// <reference path="../.astro/types.d.ts"/>

interface ImportMetaEnv {
    readonly PUBLIC_KIWI_HOST: string
    readonly PUBLIC_KIWI_APP_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}