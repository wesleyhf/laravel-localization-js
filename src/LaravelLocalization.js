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
}

const createLaravelLocalization = (localizations) => {
    const Localization = new LaravelLocalization(localizations);

    return Localization.trans.bind(Localization);
}

export {
    LaravelLocalization as default,
    createLaravelLocalization,
};
