import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the static directory path explicitly
const serveDir = path.join(__dirname, "build");

const server = http.createServer((req, res) => {
  let reqPath = req.url.split("?")[0]; // Remove query params
  let filePath = path.join(serveDir, reqPath === "/" ? "index.html" : reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(serveDir, "index.html"); // fallback for SPA routing
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error("Failed to read:", filePath, err);
        res.writeHead(500);
        res.end("Server error");
      } else {
        res.writeHead(200);
        res.end(content);
      }
    });
  });
});

server.listen(3000, () => console.log("Listening on : http://localhost:3000"));
