"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: false, default: 'Anonymous User' },
    email: { type: String, required: false, validate: validator_1.default.isEmail },
    videoId: { type: mongoose_1.default.Schema.Types.ObjectId, required: false },
    backgroundImageId: { type: mongoose_1.default.Schema.Types.ObjectId, required: false },
    backgroundPlaceholderId: { type: mongoose_1.default.Schema.Types.ObjectId, required: false },
    password: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    picture: { type: String, required: false, default: '' },
    image: { type: String, required: false, default: '' },
    birthday: { type: String, required: false, default: '' },
    occupation: { type: String, required: false, default: '' },
    address: { type: String, required: false, default: '' },
    gender: { type: String, required: false, default: 'Male' },
    phone: { type: String, required: false, default: '' },
    lastMessage: { type: String, required: false, default: '' },
    lastMessageCount: { type: Number, required: false, default: 0 },
    backgroundImage: { type: String, required: false, default: '' },
    isOnline: { type: Boolean, required: false, default: null },
    unread: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UnreadMsg' }],
    token: { type: String, required: false },
    otp: {
        type: String,
        default: 'otp'
        // required: true,
    },
    expireAt: {
        type: Date,
        default: () => new Date(Date.now() + 300 * 1000) // Set to 5 minutes from now
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    google: {
        name: { type: String, required: false },
        email: { type: String, required: false, validate: validator_1.default.isEmail },
        accessToken: { type: String, required: false }
    }
});
// Pre-save hook to hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    this.password = await bcrypt_1.default.hash(this.password, 10);
    next();
});
// Method to check if entered password matches the hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt_1.default.compare(enteredPassword, this.password);
};
// Ensure unique email index
userSchema.index({ email: 1 }, { unique: true });
const User = mongoose_1.default.models.User || mongoose_1.default.model('User', userSchema);
exports.default = User;
