"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = exports.signupController = void 0;
const express_validator_1 = require("express-validator");
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("../models/User"));
// export const signupController = async (req: Request, res: Response) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, password } = req.body;
//     let translations: any;
//     // Translate the greeting to the selected language from the the query string in the middleware
//     if (typeof req.t === 'function') {
//       translations = req.t('greeting');
//     }
//     console.log('Loaded translations:', translations);
//     res.json({ email, password, translations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
const signupController = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password, email } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({ error: 'All fields are required!' });
        }
        const existingUser = await User_1.default.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists!' });
        }
        const newUser = new User_1.default({ username, password, email });
        await newUser.save();
        // Optionally log them in immediately:
        req.login(newUser, (err) => {
            if (err)
                return res.status(500).json({ error: 'Auto-login failed after signup' });
            return res.status(201).json({ message: 'Signup successful', user: newUser });
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error during signup' });
    }
};
exports.signupController = signupController;
const signInController = (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ error: info?.message || 'Unauthorized' });
        }
        req.logIn(user, (err) => {
            if (err)
                return res.status(500).json({ error: 'Login error' });
            req.session.user = user;
            req.session.authenticated = true;
            next();
            //return res.json({ message: 'Login successful', user: req.user });
        });
    })(req, res, next);
};
exports.signInController = signInController;
