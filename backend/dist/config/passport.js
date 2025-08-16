"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureLocalPassport = void 0;
const passport_local_1 = require("passport-local");
const User_1 = __importDefault(require("../models/User"));
// import { Strategy as LocalStrategy } from 'passport-local';
// import User from '../models/User'; // your User model
// export const configureLocalPassport = () => {
//   passport.use(
//     new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) return done(null, false, { message: 'Invalid credentials' });
//         const isMatch = await user.comparePassword(password); // implement comparePassword
//         if (!isMatch) return done(null, false, { message: 'Invalid credentials' });
//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     })
//   );
//   // 🔑 Store user.id in session
//   passport.serializeUser((user: any, done) => {
//     done(null, user.id);
//   });
//   // 🔑 Fetch user from DB on every request
//   passport.deserializeUser(async (id: string, done) => {
//     try {
//       const user = await User.findById(id);
//       done(null, user);
//     } catch (err) {
//       done(err);
//     }
//   });
// };
const configureLocalPassport = (passport) => {
    passport.use(new passport_local_1.Strategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, done) => {
        try {
            const user = await User_1.default.findOne({ username });
            if (!user) {
                return done(null, false, { message: 'No subscriber found' });
            }
            const isValid = await user.comparePassword(password);
            if (!isValid) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
        }
        catch (err) {
            return done(err);
        }
    }));
    passport.use(passport.serializeUser((user, done) => {
        done(null, user.id); // or user._id depending on your DB
        // console.log(user.id)
    }), passport.deserializeUser(async (id, done) => {
        try {
            const user = await User_1.default.findById(id); // or your user model
            done(null, user);
            // console.log("serialized", user)
        }
        catch (err) {
            done(err);
        }
    }));
};
exports.configureLocalPassport = configureLocalPassport;
