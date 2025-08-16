"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateLanguage = void 0;
const translateLanguage = (req, res) => {
    const translation = req.t?.('greeting');
    res.json(translation);
};
exports.translateLanguage = translateLanguage;
