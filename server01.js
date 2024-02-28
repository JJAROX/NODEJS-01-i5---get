import { createServer } from "http";
const PORT = 3000;
const server = createServer((req, res) => {
  console.log("request");
  res.end("response")
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});
