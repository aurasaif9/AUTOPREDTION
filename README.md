# Telegram Bot — Render Deploy (Web Service)

## Render settings

- **Service type:** Web Service
- **Root Directory:** `bot`
- **Runtime:** Node
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Environment Variables:**
  - `TELEGRAM_BOT_TOKEN` = BotFather token (required)
  - `CONFIG_PATH` = `/tmp/bot-config.json` (Render filesystem ephemeral; Persistent Disk না থাকলে restart এ config হারাবে)
  - `PORT` — Render auto inject করে, hand-set করার দরকার নেই

> Web Service কে port bind করতেই হয় — `src/server.ts` একটা ছোট HTTP keep-alive server চালায় আর সাথে `tgbot.ts` import করে bot চালু করে।

> Free tier হলে inactivity তে sleep হবে → bot বন্ধ হবে। UptimeRobot দিয়ে `https://<your-app>.onrender.com/` ping করে জাগিয়ে রাখো, অথবা paid plan নাও।

## Local run

```bash
cd bot
npm install
export TELEGRAM_BOT_TOKEN=xxxxx
npm run dev
# or production:
npm run build && npm start
```
