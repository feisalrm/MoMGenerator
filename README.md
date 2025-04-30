# Meeting Cleaner Proxy

Sebuah proxy backend berbasis Node.js + Express untuk merapikan catatan meeting menggunakan OpenAI GPT API.

## Cara Menjalankan Secara Lokal

1. Install dependencies:
   ```
   npm install
   ```

2. Tambahkan file `.env` dan isi dengan:
   ```
   OPENAI_API_KEY=sk-xxxx...
   ```

3. Jalankan server:
   ```
   node server.js
   ```

4. Buka `index.html` di browser dan mulai gunakan.

## Deployment (Railway / Vercel / etc)
Deploy repo ini ke Railway atau platform lain. Tambahkan environment variable `OPENAI_API_KEY` di dashboard hosting.
