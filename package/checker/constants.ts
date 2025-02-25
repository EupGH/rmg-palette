enum LanguageCode {
    Azerbaijani = 'az',
    Arabic = 'ar',
    Catalan = 'ca',
    Chinese = 'zh',
    ChineseCN = 'zh-CN',
    ChineseSimp = 'zh-Hans',
    ChineseTrad = 'zh-Hant',
    ChineseHK = 'zh-HK',
    ChineseTW = 'zh-TW',
    English = 'en',
    French = 'fr',
    Gaelic = 'ga',
    German = 'de',
    Greek = 'el',
    Hindi = 'hi',
    Hungarian = 'hu',
    Italian = 'it',
    Japanese = 'ja',
    Korean = 'ko',
    Malay = 'ms',
    Norwegian = 'no',
    Spanish = 'es',
    Persian = 'fa',
    Portuguese = 'pt',
    Romanian = 'ro',
    Russian = 'ru',
    Swedish = 'sv',
    Turkish = 'tr',
    Vietnamese = 'vn',
}

type Translation = { [l in LanguageCode]?: string };

export enum MonoColour {
    black = '#000',
    white = '#fff',
}

type ColourHex = `#${string}`;

export interface PaletteEntry {
    /**
     * ID of line.
     */
    id: string;
    /**
     * Key-value pairs of multi-lingual names of the line.
     */
    name: Translation;
    /**
     * Background colour (in #HEX).
     */
    colour: ColourHex;
    /**
     * Foreground colour. Mandatory field if foreground colour is black.
     */
    fg?: MonoColour;
    /**
     * Pantone colour. If defined, colour is converted with Pantone Color Finder (https://www.pantone.com/color-finder).
     */
    pantone?: string;
}

export interface CityEntry {
    /**
     * This should be CityCode.
     * But as its values may change at another push, change it to string and verify it at fly.
     */
    id: string; // replace me, builder!
    /**
     * ISO 3166-1 alpha-2 country code. (For cities in Britain, append BS 6879 subdivision code. )
     */
    country: string;
    flagEmoji?: string;
    flagSvg?: string;
    /**
     * Key-value pairs of multi-lingual names of the city.
     */
    name: Translation;
}
