export const languages = {
    en: 'English',
    zh: '简体中文',
}

export const defaultLang = 'en'

const ui = {
    en: {
        'manul': 'Manul',
        'manul.lang': 'Manul Programming Language',
        'hero.title': 'Manul',
        'hero.subtitle': 'The programming language that turns the cloud into a giant computer',
        'get.started': 'Get Started',
        'menu.install': 'Install',
        'menu.blog': 'Blog',
        'menu.intro': 'Introduction',
        'menu.doc': 'Documentaion',
        'copy.to.clipboard': 'Copy to clipboard',
        'copied': 'Copied!',
        'why.manul': "Why Manul?",
        'no.database.title': 'No Database Interaction',
        'no.database.content': 'Access data as if it\'s in memory',
        'try.manul': 'Try Manul',
        'feature1.title': 'Seamless Data Access',
        'feature1.content': 'Manul abstracts the data layer entirely. Applications interact with data as if it were in memory, while the language runtime secures data persistence automatically.',
        'feature2.title': 'Streamlined Data Migration',
        'feature2.content': 'Data evolution shouldn\'t be a burden. Manul allows developers to handle schema changes through simple migration functions, equipped with rollback capabilities.',
        'feature3.title': 'Excellent Generated APIs',
        'feature3.content': 'Manul generate elegant, REST-compliant APIs from your code. The results are often cleaner than handwritten endpoints, achieved without writing a single line of boilerplate.',
        'feature4.title': 'Searchable by Default',
        'feature4.content': 'Managing data synchronizaiton between database and search engine is tedious and error-prone. With Manul, indexing is automatic—objects are searchable the moment they are created.',
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
        'manul': 'Manul',
        'manul.lang': 'Manul 编程语言',
        'hero.title': 'Manul',
        'hero.subtitle': '一个将云平台变成巨型计算机的编程语言',
        'get.started': '快速开始',
        'menu.install': '安装',
        'menu.blog': '博客',
        
        'menu.intro': '介绍',
        'menu.doc': '文档',
        'copy.to.clipboard': '复制到剪切板',
        'copied': '复制成功！',
        'why.manul': '为什么选择 Manul？',
        'no.database.title': '无需数据库',
        'no.database.content': 'Manul 应用可以像访问内存一样访问持久化数据',
        'try.manul': "试试 Manul",
        'feature1.title': '透明的数据持久层',
        'feature1.content': 'Manul 实现了数据存储层的完全抽象。开发者可以像操作内存对象一样处理业务数据，而底层运行时将自动、透明地管理数据的持久化存储，无需繁琐的数据库交互。',
        'feature2.title': '敏捷的数据演进',
        'feature2.content': '模型升级不再是负担。Manul 提供了基于映射函数的轻量级迁移方案，并内置完善的可逆回滚机制，确保数据在迁移过程中始终安全可控。',
        'feature3.title': '生成的 API 同样优雅',
        'feature3.content': 'Manul 能够基于业务代码，自动生成符合 REST 规范的 API。生成的端点往往比手写的更加整洁，且无需编写任何样板代码。',
        'feature4.title': '开箱即用的搜索能力',
        'feature4.content': '维护数据库与搜索引擎之间的数据同步既繁琐又容易出错。Manul 实现了自动数据同步，对象在创建的一刻起，索引便已建立，即刻能被搜索。',
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