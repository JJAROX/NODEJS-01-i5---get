import { createServer } from "http";
import { read, readFile } from "fs";
import path from "path";
const __dirname = path.resolve();
const PORT = 3000;
const server = createServer((req, res) => {
  console.log(`żądany przez przeglądarkę adres: ${req.url}`)

  if (req.url === "/strona3.html") {
    const mypath = path.join(__dirname, "static", "strona3.html")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.write(data);
      res.end();
    })
  }
  else if (req.url === "/style.css") {
    const mypath = path.join(__dirname, "static", "style.css")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
      res.write(data);
      res.end();
    })
  }
  else if (req.url === "/script.js") {
    const mypath = path.join(__dirname, "static", "script.js")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'application/javascript;charset=utf-8' });
      res.write(data);
      res.end();
    })
  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
