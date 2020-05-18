import { createLaravelLocalization } from '../../src/LaravelLocalization';

// eslint-disable-next-line no-underscore-dangle
const __ = createLaravelLocalization({
    'My name is Wesley': 'Meu nome é Wesley',
    'My name is :name': 'Meu nome é :name',
    'Hello :firstName, I am :secondName': 'Olá :firstName, Eu sou o :secondName',
});

describe('LaravelLocalization', () => {
    test('should handle undefined lang key', () => {
        const text = __('Hello World');
        expect(text).toBe('Hello World');
    });

    test('should handle defined lang key', () => {
        const text = __('My name is Wesley');
        expect(text).toBe('Meu nome é Wesley');
    });

    test('should replace parameter on undefined lang key', () => {
        const text = __('I am :name', { name: 'Wesley' });
        expect(text).toBe('I am Wesley');
    });

    test('should replace parameter on defined lang key', () => {
        const text = __('My name is :name', { name: 'Wesley' });
        expect(text).toBe('Meu nome é Wesley');
    });

    test('should replace multiples parameters on defined lang key', () => {
        const text = __('Hello :firstName, I am :secondName', {
            firstName: 'Larissa',
            secondName: 'Wesley',
        });

        expect(text).toBe('Olá Larissa, Eu sou o Wesley');
    });
});
