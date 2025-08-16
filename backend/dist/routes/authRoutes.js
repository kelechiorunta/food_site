"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controllers/authController");
const validatemiddleware_1 = require("../middleware/validatemiddleware");
const passport_2 = require("../config/passport");
const authRouter = express_1.default.Router();
(0, passport_2.configureLocalPassport)(passport_1.default);
const validationLoginSchema = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
// authRouter.get('/', RequestHandler = (req: Request, res: Response) => {
//   const translation = req.t?.('greeting');
//   res.json(translation);
// });
authRouter.post('/', validationLoginSchema, authController_1.signupController);
authRouter.post('/signin', validationLoginSchema, validatemiddleware_1.validateRequest, authController_1.signInController);
authRouter.get('/authenticated', (req, res) => {
    console.log(req.session.user);
});
exports.default = authRouter;
