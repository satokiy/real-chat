import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
import { Server } from "socket.io";
import { createToken } from "./token.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 4000;

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  io.on("connection", (socket) => {
    console.log("ユーザーが接続しました", socket.id)
    
    /**
     * ログイン処理
     */
    const token = createToken(socket.id);
    io.to(socket.id).emit("token", {token: token});
  
    /**
     * メッセージの受信 -> 送信
     */
    socket.on("my-post", (msg) => {
      io.emit("your-post", msg);
    });

    socket.on("disconnect", () => {
      console.log("ユーザーが切断しました", socket.id)
    })
  });

});
