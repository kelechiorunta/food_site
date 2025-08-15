"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const langController_1 = require("../controllers/langController");
const authRouter = express_1.default.Router();
const validationSchema = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
authRouter.get('/test', langController_1.changeLanguage, (req, res) => {
    //   const lang = req.query.lang; // access query here
    //   const greeting = req.query.greeting; // access query here
    const translation = req.t?.('greeting');
    res.json(translation);
});
authRouter.post('/lang', validationSchema, (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        let translations;
        // Set locale to Spanish
        if (typeof req.t === 'function') {
            req.t('es');
            translations = req.t('WELCOME_MESSAGE');
        }
        // Now get the translations from res.locals
        // const translations = req.t('es');
        console.log('Loaded translations:', translations);
        res.json({ email, password, translations });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = authRouter;
