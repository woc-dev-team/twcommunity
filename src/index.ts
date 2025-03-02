import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/search/blog', async (req: Request, res: Response): Promise<void> => {
    const query = req.query.query as string;
    if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
    }

    const apiUrl = `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}&display=100`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': "55gNZJeKLjjxwPSWalkT",
                'X-Naver-Client-Secret': "QFPPpwL_jB"
            },
        });
        console.log(response.data);
        res.json(response.data);
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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
