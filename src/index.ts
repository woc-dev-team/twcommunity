import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import { Item } from "./entities/interface";

dotenv.config();

const app = express();

app.use(cors());
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
                'X-Naver-Client-Id': process.env.X_Naver_Client_Id,
                'X-Naver-Client-Secret': process.env.X_Naver_Client_Secret
            }
        });

        const reduceData = response.data.items.reduce((acc: Item[], item: Item) => {
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

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
