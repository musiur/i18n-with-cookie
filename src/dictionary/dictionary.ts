import { cookies } from 'next/headers';
import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
    en: () => import('./dictionary.en.json').then((module) => module.default),
    bn: () => import('./dictionary.bn.json').then((module) => module.default),
};

export const getDictionary = async () => {
    const locale = cookies().get('locale')?.value;
    const dictionaryFn = dictionaries[`${locale ? locale : "en"}`];
    try {
        return await dictionaryFn();
    } catch (error) {
        throw new Error(`Error while loading dictionary for locale 'sw.js' not found!`);
    }
};