"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importStar(require("axios"));
const cors_1 = __importDefault(require("cors"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://172.30.1.12:5173", "woc-dev-team.github.io/twcommunity/"],
    methods: ['GET', 'POST'],
}));
app.use(express_1.default.json());
app.get('/search/blog', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const query = req.query.query;
    if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
    }
    const apiUrl = `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}&display=100&sort=date`;
    const formatDate = (date) => {
        const dateObj = new Date(date);
        return new Intl.DateTimeFormat('ko-KR').format(dateObj);
    };
    try {
        const response = yield axios_1.default.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': "55gNZJeKLjjxwPSWalkT",
                'X-Naver-Client-Secret': "QFPPpwL_jB"
            }
        });
        const reduceData = response.data.items.reduce((acc, item) => {
            if (acc.length >= 10)
                return acc;
            if (item.link.includes("thewordchurch__")) {
                acc.push({
                    title: item.title.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                    link: item.link.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                    description: item.description.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                    bloggername: item.bloggername.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                    postdate: formatDate(item.postdate)
                });
            }
            return acc;
        }, []);
        res.json(reduceData);
    }
    catch (error) {
        if (error instanceof axios_1.AxiosError) {
            const status = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : 500;
            const data = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) !== null && _d !== void 0 ? _d : 'No error data available';
            console.error('Axios Error:', status, data);
            res.status(status).json({ error: 'Failed to fetch data' });
        }
        else {
            console.error('Unknown Error:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }
}));
const getLocalIP = () => {
    const interfaces = os_1.default.networkInterfaces();
    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName] || []) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address; // 내부 IP 주소 반환
            }
        }
    }
    return '127.0.0.1'; // 기본값
};
app.listen(3000, () => {
    console.log(`Server running at ${getLocalIP()}:3000`);
});
