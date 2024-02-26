// import { PORT } from "@/config/app";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import { NextRequest, NextResponse } from 'next/server';
import type { Server as IOServer } from "socket.io";
import { Server } from "socket.io";


const PORT = 3000;
export const config = {
  api: {
    bodyParser: false,
  },
};

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

// interface NextApiResponseWithSocket extends NextResponse {
//   socket: SocketWithIO;
// }
export async function GET(_req: NextRequest, res: NextResponse) {
  // if (res.socket.server.io) {
  //   res.status(200).json({ success: true, message: "Socket is already running", socket: `:${PORT}` });
  //   return;
  // }

  // console.log("Starting Socket.IO server on port:", PORT);
  // const io = new Server({ path: "/api", addTrailingSlash: false, cors: { origin: "*" } }).listen(PORT);

  // io.on("connect", socket => {
  //   const _socket = socket;
  //   console.log("socket connect", socket.id);
  //   _socket.broadcast.emit("welcome", `Welcome ${_socket.id}`);
  //   socket.on("disconnect", async () => {
  //     console.log("socket disconnect");
  //   });
  // });

  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  return new Response("");
  // res.socket.server.io = io;
  // res.status(201).json({ success: true, message: "Socket is started", socket: `:${PORT}` });
}
