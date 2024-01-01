import { createContext, useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Platform } from 'react-native';

interface Context {
  socket: Socket;
  setUsername: Function;
  messages?: { message: string; username: string; time: string }[];
  setMessages: Function;
}

const serverUrl = 'https://real-chat-23pq.onrender.com';
const socket = io(serverUrl);

export const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
});

function SocketProvider(props: any) {
  const [messages, setMessages] = useState<[]>([]);

  return <SocketContext.Provider value={{ socket, messages, setMessages }} {...props} />;
}

export const useSockets = () => useContext(SocketContext);

export default SocketProvider;
