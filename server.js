const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/format-meeting', async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY tidak ditemukan.');
    return res.status(500).json({ error: 'API key tidak tersedia di environment' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: userPrompt }],
        temperature: 0.5
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data.choices[0].message);
  } catch (err) {
    if (err.response) {
      // Error dari API OpenAI
      console.error('❌ OpenAI API Error:', err.response.status, err.response.data);
      res.status(500).json({ error: err.response.data });
    } else {
      // Error dari luar (misal jaringan)
      console.error('❌ Unexpected Error:', err.message);
      res.status(500).json({ error: err.message });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server berjalan di http://localhost:${PORT}`));
