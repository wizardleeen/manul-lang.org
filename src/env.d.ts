/// <reference path="../.astro/types.d.ts"/>

interface ImportMetaEnv {
    readonly PUBLIC_MANUL_HOST: string
    readonly PUBLIC_MANUL_APP_ID: string
    readonly PUBLIC_DOCS_URL: string
    readonly PUBLIC_SLIDES_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}