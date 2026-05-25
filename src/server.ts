import http from "http";
import "./tgbot.js";

const PORT = Number(process.env.PORT) || 3000;

http
  .createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot is running ✅");
  })
  .listen(PORT, () => {
    console.log(`🌐 Keep-alive server listening on :${PORT}`);
  });
