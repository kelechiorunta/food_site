"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const languagemiddleware_1 = require("../middleware/languagemiddleware");
const languageController_1 = require("../controllers/languageController");
const langRouter = express_1.default.Router();
langRouter.get('/', languagemiddleware_1.changeLanguage, languageController_1.translateLanguage);
exports.default = langRouter;
