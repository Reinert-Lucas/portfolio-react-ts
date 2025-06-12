import express from "express";
import postgres from "postgres";
import cors from 'cors';
import dotenv from 'dotenv';
const corsOptions = {
    origin: 'http://localhost:3000', //https://reinert-lucas.netlify.app
}
const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();

app.get('/api/data', async (_req, res) => {
    const sql = postgres(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT * FROM projects`;
    res.status(200).json({ response });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Todo list
// ToDo - React TODO TODITO (Y el push de los cambios a github)