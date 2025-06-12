const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
// App Config
const corsOptions = {
  origin: ["https://reinert-lucas.netlify.app"],
}
require('dotenv').config();
app.use(cors(corsOptions));
app.use(express.json());

let cachedData = null;
let lastFetched = 0;
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 días

app.get('/api/datos', async (req, res) => {
  const gistId = process.env.GIST_ID;
  const tokenGist = process.env.GIST_TOKEN;

  const now = Date.now();

  if (cachedData && (now - lastFetched < CACHE_DURATION)) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `token ${tokenGist}`,
      },
    });

    const file = response.data.files["projects.json"];

    if (!file || !file.content) {
      return res.status(404).json({ error: "Archivo projects.json no encontrado en el gist." });
    }

    const data = JSON.parse(file.content);
    cachedData = data;
    lastFetched = now;
    res.json(data);

  } catch (error) {
    console.error('Error al obtener los datos del gist:', error.message);
    res.status(500).json({ error: "Error al obtener datos desde el Gist" });
  }
});

app.listen(3000, () => {
  console.log("Escuchando http://localhost:3000");
});
