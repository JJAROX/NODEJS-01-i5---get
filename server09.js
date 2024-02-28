import { createServer } from "http";
import { read, readFile } from "fs";
import path from "path";
const __dirname = path.resolve();
const PORT = 3000;
const server = createServer((req, res) => {
  if (decodeURI(req.url).toLowerCase() === '/wąż') {
    const mypath = path.join(__dirname, "static/gfx", "wąż.png")
    readFile(mypath, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write("<h1>błąd 404 - nie ma pliku!<h1>");
        res.end();
      }

      else {
        res.writeHead(200, { 'Content-Type': 'image/png;charset=utf-8' });
        res.write(data);
        res.end();
      }
    })
  } else if (decodeURI(req.url).toLowerCase() === '/mąż') {
    const mypath = path.join(__dirname, "static/gfx", "mąż.png")
    readFile(mypath, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write("<h1>błąd 404 - nie ma pliku!<h1>");
        res.end();
      }

      else {
        res.writeHead(200, { 'Content-Type': 'image/png;charset=utf-8' });
        res.write(data);
        res.end();
      }
    })
  }
  else if (decodeURI(req.url).toLowerCase() === '/książ') {
    const mypath = path.join(__dirname, "static/gfx", "książ.png")
    readFile(mypath, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write("<h1>błąd 404 - nie ma pliku!<h1>");
        res.end();
      }

      else {
        res.writeHead(200, { 'Content-Type': 'image/png;charset=utf-8' });
        res.write(data);
        res.end();
      }
    })
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('Bratku weź no jakiegoś urla wpisz (/wąż, /mąż, albo /książ)')
  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
