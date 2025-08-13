"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const i18n_express_1 = __importDefault(require("i18n-express"));
const path_1 = __importDefault(require("path"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const DEV_PORT = 3110;
const PORT = process.env.PORT || DEV_PORT;
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100
});
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');
console.log(allowedOrigins);
const corsOption = {
    origin: (origin, callback) => {
        if (allowedOrigins?.includes(origin) || !origin) {
            return callback(null, true);
        }
        else {
            return callback(false, 'Domain not supported');
        }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const mongo_db_uri = process.env.MONGO_URI;
const store = new MongoDBStore({
    uri: mongo_db_uri,
    collection: 'sessions',
    expires: 1000 * 60 * 60 * 24 * 7
});
console.log('SECRET', process.env.SESSION_SECRET);
const sessionOptions = {
    name: 'secret_auth_session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store
};
const i18nOptions = {
    // translationsPath: path.join(process.cwd(), 'backend', 'src', 'i18n'),
    translationsPath: path_1.default.join(__dirname, 'i18n'), // path.resolve(__dirname, '../src/i18n'),
    siteLangs: ['en', 'es'],
    textsVarName: 'translation'
};
// Enable trust proxy/ reverse proxy for secure cookies in session during production
// through X-Forwarded-Proto header set to true/1
app.set('trust-proxy', 1);
const urlType = false;
app.use((0, cors_1.default)(corsOption));
app.use((0, express_session_1.default)(sessionOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded(urlType));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(limiter);
// app.use(helmet());
app.use((0, compression_1.default)());
app.use((0, i18n_express_1.default)(i18nOptions));
app.use('/auth', authRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
