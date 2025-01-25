import morgan from "morgan";
import { Request, Response } from "express";
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Ottieni il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logStream = fs.createWriteStream(
  path.join(__dirname, "../../../../.log"),
  {
    flags: "a",
  }
);
// Funzione di formattazione personalizzata per il log in formato JSON
const formatLog = (tokens: any, req: Request, res: Response) => {
  return JSON.stringify({
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    responseTime: tokens["response-time"](req, res),
    date: new Date().toISOString(),
    remoteAddress: req.ip,
    userAgent: req.get("User-Agent"),
  });
};

// Configurazione del logger
const logger = morgan(formatLog, {
  stream: logStream,
  skip: (req, res) => res.statusCode < 400, // log solo gli errori (status >= 400)
});

export default logger;
