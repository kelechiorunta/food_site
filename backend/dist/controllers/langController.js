"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLanguage = void 0;
// export const changeLanguage = (req: Request, res: Response, next: Function) => {
//   const { lang } = req.query;
//   res.cookie('i18next', lang, { httpOnly: false }); // Set the new language in a cookie
//   next();
// };
const SUPPORTED_LANGS = ['en', 'es']; // must match i18n preload
const changeLanguage = (req, res, next) => {
    let { lang } = req.query;
    if (!lang || typeof lang !== 'string' || !SUPPORTED_LANGS.includes(lang)) {
        lang = 'en'; // fallback
    }
    // Switch language immediately for this request
    req.i18n?.changeLanguage(lang);
    // Save choice in cookie (for next requests)
    res.cookie('i18next', lang, { httpOnly: false });
    next();
};
exports.changeLanguage = changeLanguage;
