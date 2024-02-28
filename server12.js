import { log } from 'console'
import { createServer } from 'http'
import { parse } from 'url';
import { readFile } from 'fs';
import path from 'path';
const PORT = 3000
const __dirname = path.resolve()
const server = createServer((req, res) => {
  const obj = parse(req.url, true).query
  console.log(obj.a);
  if (req.url === '/oczko.png') {
    const mypath = path.join(__dirname, "static/gfx", "oczko.png")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'image/png;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    for (let i = 0; i < obj.a; i++) {
      res.write(`<img src='/oczko.png' alt='oczko' height="250", width='250'></img>`)
    }
    res.end()
  }
})
server.listen(PORT, () => {
  console.log(`Serwer startuje na porcie ${PORT}`);
})