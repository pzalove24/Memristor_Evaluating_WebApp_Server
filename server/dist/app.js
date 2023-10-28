"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const serialPortRoutes_1 = __importDefault(require("./routes/serialPortRoutes"));
// CONFIGURATION
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("combined"));
app.use((0, cors_1.default)());
// ROUTES
app.get("/", (req, res) => {
    res.send("HelloWorld");
});
app.use("/serialPort", serialPortRoutes_1.default);
// SERVER CONNECTION
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Port: ${PORT} CONNECTED`);
});
