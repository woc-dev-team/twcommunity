import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import { Item } from "./entities/interface";
import os from 'os';

dotenv.config();

const app = express();

app.use(cors({
    origin: ["http://172.30.1.12:5173", "woc-dev-team.github.io/twcommunity/"],
    methods: ['GET', 'POST'],
}));
app.use(express.json());

app.get('/search/blog', async (req: Request, res: Response): Promise<void> => {
    const query = req.query.query as string;
    if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
    }

    const apiUrl = `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}&display=100&sort=date`;

    const formatDate = (date: string) => `${date.slice(2, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': "55gNZJeKLjjxwPSWalkT",
                'X-Naver-Client-Secret': "QFPPpwL_jB"
            }
        });

        const reduceData = response.data.items.reduce((acc: Item[], item: Item) => {
            if (acc.length >= 10) return acc; 

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
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Error:', error.response?.status, error.response?.data);
            res.status(error.response?.status || 500).json({ error: 'Failed to fetch data' });
        } else {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }
});

const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
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
