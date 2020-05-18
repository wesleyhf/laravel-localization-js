export default class LaravelLocalization {
    constructor(translations) {
        this.translations = translations;
    }

    trans(key, parameters = {}) {
        let translation = this.translations[key] || key;

        Object.entries(parameters)
            .forEach(([parameter, value]) => {
                translation = translation.replace(`:${parameter}`, value);
            });

        return translation;
    }
}

export function createLaravelLocalization(localizations) {
    const Localization = new LaravelLocalization(localizations);

    return Localization.trans.bind(Localization);
}
