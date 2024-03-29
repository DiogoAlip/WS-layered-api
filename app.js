const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ inputAddress, inputMessage }) => {
    console.log(`${inputAddress} | ${inputMessage}`);
  });
});

//app.use(express.static(`${__dirname}/presentacion/index.html`));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Negocio")));
app.use(express.static(path.join(__dirname, "DAL")));
app.use(express.static(path.join(__dirname, "presentacion")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/presentacion/index.html`);
});

server.listen(3160, () => {
  console.log("servidor corriendo en el puerto http://localhost:3160");
});
