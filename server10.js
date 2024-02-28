import { createServer } from "http";
import { read, readFile } from "fs";
import path from "path";
const __dirname = path.resolve();
const PORT = 3000;
const server = createServer((req, res) => {
  if (req.url == "/index") {
    const mypath = path.join(__dirname, "static", "index.html")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.write(data);
      res.end();
    })
  }
  else if (req.url == "/second") {
    const mypath = path.join(__dirname, "static", "second.html")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.write(data);
      res.end();
    })
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("<h1>404 - brak takiej strony</h1>");
    res.end();

  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
