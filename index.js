const http = require("http");

const server = http.createServer((requisicao, resposta) => {

  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (requisicao.method === "GET") {
    resposta.write("<h1>brasil</h1>");
  } else if (requisicao.method === "POST") {
    resposta.write("<h1>POST</h1>");
  } else if (requisicao.method === "PUT") {
    resposta.write("<h1>PUT</h1>");
  } else if (requisicao.method === "DELETE") {
    resposta.write("<h1>DELETE</h1>");
  }

  resposta.end();
});


server.listen(3000, console.log("Servidor rodando...."));