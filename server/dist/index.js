var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import axios, { AxiosError } from 'axios';
import cors from 'cors';
import os from 'os';
const app = express();
const PORT = 8080;
const errorFunction = (error, res, path) => {
    var _a, _b, _c, _d;
    if (error instanceof AxiosError) {
        const status = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : 500;
        const data = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) !== null && _d !== void 0 ? _d : 'No error data available';
        console.error(`Axios Error on ${path}:`, status, data);
        res.status(status).json({ error: `Message: Failed to fetch data on ${path}`, reason: error });
    }
    else {
        console.error(`Unknown Error on ${path}:`, error);
        res.status(500).json({ error: `Message: Failed to fetch data on ${path}`, reason: error });
    }
};
app.use(cors({
    origin: ["https://woc-dev-team.github.io", "http://localhost:5173"],
    credentials: true,
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
}));
app.options(["https://woc-dev-team.github.io", "http://localhost:5173"], cors());
app.use(express.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json("Hello, God's Family");
    }
    catch (error) {
        errorFunction(error, res, '/');
    }
}));
app.get('/search/blog', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.query;
    if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
    }
    const apiUrl = `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}&display=100&sort=date`;
    const formatDate = (date) => `${date.slice(2, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
    try {
        const response = yield axios.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': "55gNZJeKLjjxwPSWalkT",
                'X-Naver-Client-Secret': "QFPPpwL_jB"
            }
        });
        const reduceData = response.data.items.reduce((acc, item) => {
            if (acc.length >= 20)
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
        errorFunction(error, res, '/search/blog');
    }
}));
app.get('/view/youtube', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search`;
    axios.get(apiUrl, {
        params: {
            part: 'snippet',
            channelId: 'UC0O_C_7ryuEUFbj3BhBgqRA',
            eventType: 'live',
            type: 'video',
            key: 'AIzaSyASpEDBc0Iu0f5K9QrdZfket4SJAYtxCbQ'
        }
    })
        .then(response => {
        if (response.data.items.length !== 0) {
            res.status(200).json(response.data.items);
        }
        else if (response.data.items.length === 0) {
            fetchRecentVideos(res, apiUrl);
        }
    })
        .catch(error => {
        errorFunction(error, res, '/view/youtube');
    });
}));
const fetchRecentVideos = (res, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(apiUrl, {
            params: {
                part: 'snippet',
                channelId: 'UC0O_C_7ryuEUFbj3BhBgqRA',
                order: 'date',
                type: 'video',
                maxResults: 1,
                key: 'AIzaSyASpEDBc0Iu0f5K9QrdZfket4SJAYtxCbQ'
            }
        });
        res.status(201).json(response.data.items);
    }
    catch (error) {
        errorFunction(error, res, '/view/youtube');
    }
});
const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName] || []) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
};
app.listen(PORT, () => {
    console.log(`Server running at http://${getLocalIP()}:${PORT}\nSSH to https://woc-dev-team.github.io`);
});
