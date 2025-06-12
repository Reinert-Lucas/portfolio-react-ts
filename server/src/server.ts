import express from "express";
import postgres from "postgres";
import cors from 'cors';
import dotenv from 'dotenv';
const corsOptions = {
    origin: 'http://localhost:5173', //https://reinert-lucas.netlify.app
    // methods: 'GET',
}
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/data', async (_req, res) => {
    const sql = postgres(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT * FROM projects`;
    res.status(200).json({ response });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});