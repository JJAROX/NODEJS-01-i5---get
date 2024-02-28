import { createServer } from "http";
import tracer from "tracer"
const logger = tracer.colorConsole();
const PORT = 3000;
const server = createServer((req, res) => {
  console.log(decodeURI(req.url))
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
  res.end(`<h1>adres url żądania to: ${decodeURI(req.url)}</h1>`)

  switch (decodeURI(req.url).toLowerCase()) {
    case '/żółć':
      logger.warn(decodeURI(req.url).toLowerCase())
      break;
    case '/czerwień':
      logger.error(decodeURI(req.url).toLowerCase())
      break;
    case '/zieleń':
      logger.info(decodeURI(req.url).toLowerCase())
      break;
    default:
      logger.trace('hello')
      break;
  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
