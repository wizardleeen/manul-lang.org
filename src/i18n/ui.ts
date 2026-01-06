export const languages = {
    en: 'English',
    zh: '简体中文',
}

export const defaultLang = 'en'

const ui = {
    en: {
        'kiwi.lang': 'Kiwi Programming Language',
        'hero.title': 'The Language of Persistent Objects',
        'hero.subtitle': 'Zero-config infrastructure. Native consistency. Just code.',
        'get.started': 'Get Started',
        'menu.install': 'Install',
        'menu.blog': 'Blog',
        'menu.intro': 'Introduction',
        'menu.doc': 'Documentaion',
        'copy.to.clipboard': 'Copy to clipboard',
        'copied': 'Copied!',
        'why.kiwi': "Why Kiwi?",
        'no.database.title': 'No Database Interaction',
        'no.database.content': 'Access data as if it\'s in memory',
        'try.kiwi': 'Try Kiwi',
        'feature1.title': 'Seamless Data Persistence',
        'feature1.content': 'Kiwi abstracts the data layer entirely. Applications interact with data as if it were in memory, while the language runtime secures data persistence automatically.',
        'feature2.title': 'Concurrency Made Simple',
        "feature2.content": 'Eliminate race conditions and consistency errors. By offloading complexity to the Kiwi runtime, developers can write straightforward code that remains robust under load.',
        'feature3.title': 'Streamlined Data Migration',
        'feature3.content': 'Data evolution shouldn\'t be a burden. Kiwi allows developers to handle schema changes through simple migration functions, complete with rollback capabilities for total peace of mind.',
        'example.save': 'Save product',
        'example.retrieve': 'Retrieve product',
        'example.invoke': 'Reduce stock',
        'http.response.placeholder': 'Send request to view response',
        'http.send': 'Send',
        'apachev2.license': 'Apache License v2.0',
        'theme.system': 'System',
        'theme.dark': 'Dark',
        'theme.light': 'Light',
    },
    zh: {
        'kiwi.lang': 'Kiwi 编程语言',
        'hero.title': '持久化对象语言',
        'hero.subtitle': '告别繁琐基建，拥抱原生一致性——你只需专注于代码创造。',
        'get.started': '快速开始',
        'menu.install': '安装',
        'menu.blog': '博客',
        'menu.intro': '介绍',
        'menu.doc': '文档',
        'copy.to.clipboard': '复制到剪切板',
        'copied': '复制成功！',
        'why.kiwi': '为什么选择Kiwi？',
        'no.database.title': '无需数据库',
        'no.database.content': 'Kiwi应用可以像访问内存一样访问持久化数据',
        'try.kiwi': "试试Kiwi",
        'feature1.title': '透明的数据持久层',
        'feature1.content': 'Kiwi 实现了数据存储层的完全抽象。开发者可以像操作内存对象一样处理业务数据，而底层运行时将自动、透明地管理数据的持久化存储，无需繁琐的数据库交互。',
        'feature2.title': '简化的并发模型',
        'feature2.content': '从根本上解决竞态条件与数据一致性难题。Kiwi 将并发复杂性封装于运行时内部，使开发者能够以符合直觉的线性逻辑，构建出能从容应对高负载的稳健系统。',
        'feature3.title': '敏捷的数据演进',
        'feature3.content': '模型升级不再是负担。Kiwi 提供了基于映射函数的轻量级迁移方案，并内置完善的可逆回滚机制，确保数据在迁移过程中始终安全可控。',
        'example.save': '保存商品',
        'example.retrieve': '查询商品',
        'example.invoke': '扣减库存',
        'http.response.placeholder': '发送请求以查看结果',
        'http.send': '发送',
        'apachev2.license': 'Apache 2.0 许可证',
        'theme.system': '系统',
        'theme.dark': '深色',
        'theme.light': '浅色',
    }
}

export type Lang = keyof typeof ui

export type Key = keyof typeof ui[typeof defaultLang]

export function useTranslations(lang: Lang) {
     return function(key: Key) {
        return ui[lang][key] || ui[defaultLang][key]
     }
}

export function getLangFromUrl(url: URL) {
    const [,lang] = url.pathname.split('/')
    if (lang in languages)
        return lang as Lang
    return defaultLang
}