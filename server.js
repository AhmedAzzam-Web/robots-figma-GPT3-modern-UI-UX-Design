import http from "http";
import fs from "fs";
import path from "path";

const serveDir = path.resolve("build");

const server = http.createServer((req, res) => {
  let filePath = path.join(serveDir, req.url === "/" ? "/index.html" : req.url);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(serveDir, "index.html");
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server error");
    } else {
      res.writeHead(200);
      res.end(content);
    }
  });
});

server.listen(3000, () => console.log("Listening on : http://localhost:3000"));
