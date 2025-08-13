"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const authRouter = express_1.default.Router();
const validationSchema = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
authRouter.post('/lang', validationSchema, async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        console.log(email, password);
        // return res.json({ email, password });
        // Force language change if needed
        req.setLocale?.('es');
        // This now contains your Spanish translations
        const translations = req.translation;
        console.log(translations);
        return res.json({ email, password, translations });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = authRouter;
