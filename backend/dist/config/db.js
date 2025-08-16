"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// DATABASE CONNECTION
const connectDB = async (DB_URL) => {
    try {
        await mongoose_1.default.connect(DB_URL);
        console.log('Database connection successful');
    }
    catch (error) {
        console.error('Connection Failed', error);
        process.exit(1); //Close connection with failure
    }
};
exports.connectDB = connectDB;
