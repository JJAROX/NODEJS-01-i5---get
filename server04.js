import { createServer } from "http";
const PORT = 3000;
const server = createServer((req, res) => {
  console.log("nagłówki żądania:")
  console.log(JSON.stringify(req.rawHeaders, null, 5))
  console.log(JSON.stringify(req.headers, null, 5))
  const object = req.headers
  console.log(object["user-agent"])
  if (object["user-agent"].indexOf("Chrome") < 100 && object["user-agent"].indexOf("OPR") > 0) {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("<h1>To jest Opera</h1>")
  }
  else if (object["user-agent"].indexOf("Firefox") > 0) {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("<h1>To jest Firefox</h1>")
  }
  else if (object["user-agent"].indexOf("Chrome") < 100 && object["user-agent"].indexOf("Edg") > 0) {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("<h1>To jest Edge</h1>")
  } else if (object["user-agent"].indexOf("Chrome") > 0) {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("<h1>To jest Chrome</h1>")
  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
