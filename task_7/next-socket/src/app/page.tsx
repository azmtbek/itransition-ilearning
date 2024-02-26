'use client';
import { useEffect } from "react";
import { Socket, io } from "socket.io-client";

const PORT = 3000;

export function socketClient() {
  const socket = io(`:${PORT}`, { transports: ['websocket'], path: "/api/", addTrailingSlash: false });

  socket.on("connect", () => {
    console.log("Connected");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });

  socket.on("connect_error", async err => {
    console.log(`connect_error due to ${err.message}`);
    await fetch("/api/");
  });

  return socket;
}

let socket;

export default function Home() {

  useEffect(() => {
    socketInitializer();
  });
  async function socketInitializer() {
    await fetch('/api');
    socket = io();
  }
  // const socket = socketClient();
  return (
    <div>hello</div>
  );
}
