import { log } from 'console'
import { createServer } from 'http'
import { parse } from 'url';
import { readFile } from 'fs';
import path from 'path';
const PORT = 3000
const __dirname = path.resolve()
const server = createServer((req, res) => {
  let array = decodeURI(req.url).trim().toLowerCase().split('.')
  if (array[1] === 'png') {
    console.log(array[0]);
  }
  console.log(decodeURI(req.url).trim().toLowerCase());
  if (req.url === '/index.html') {
    const mypath = path.join(__dirname, "static", "index.html")
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  }
  else if (array[1] === 'png' && decodeURI(req.url).trim().toLowerCase() === `${array[0]}.png`) {
    const mypath = path.join(__dirname, "static/gfx", `${array[0]}.png`)
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'image/png;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  } else if (array[1] === 'css' && decodeURI(req.url).trim().toLowerCase() === `${array[0]}.css`) {
    const mypath = path.join(__dirname, "static/gfx", `${array[0]}.css`)
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  }
  else if (array[1] === 'jpg' && decodeURI(req.url).trim().toLowerCase() === `${array[0]}.jpg`) {
    const mypath = path.join(__dirname, "static/gfx", `${array[0]}.jpg`)
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'image/jpg;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  }
  else if (array[1] === 'js' && decodeURI(req.url).trim().toLowerCase() === `${array[0]}.js`) {
    const mypath = path.join(__dirname, "static/gfx", `${array[0]}.js`)
    readFile(mypath, (error, data) => {
      res.writeHead(200, { 'Content-Type': 'application/js;charset=utf-8' });
      res.write(data);
      res.end();
    }

    )
  } else {

  }


})
server.listen(PORT, () => {
  console.log(`Serwer startuje na porcie ${PORT}`);
})