class LaravelLocalization {
    constructor(translations) {
        this.translations = translations;
    }

    trans(key, replaces = {}) {
        let translation = this.translations[key] || key;

        for (const key in replaces) {
            translation = translation.replace(`:${key}`, replaces[key]);
        }

        return translation;
    }

    __(...args) {
        return this.trans(...args);
    }
}

export default LaravelLocalization;
