import MainContainer from "./components/UI/Container/MainContainer";
import TollBar from "./components/UI/TollBar/TollBar";
import Nav from "./components/UI/Nav/Nav";
import { useEffect, useState } from "react";
import AuthButton from "./components/UI/Buttons/AuthButton/AuthButton";
import { Socket, io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./constants/ROUTES";
import axios from "axios";
import { API } from "./constants/API";
import { IUser } from "./interfaces/IUser";
import { UserStore } from "./zustand/User";
function App() {
  const [socket, setSocket] = useState<Socket>();
  const { setUser, user } = UserStore();
  const navigate = useNavigate();
  const getSokcet = async () => {
    const socket = io("http://localhost:3080");
    socket.on("connect", () => {
      setSocket(socket);
    });

    socket.on("message", (message: any) => {
      console.log(message);
    });
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (token === null) return navigate(ROUTES.AUTH);

    const body = {
      token,
    };
    const respone = await axios.post(`${API.URL}${API.TEST}`, body);
    const user: IUser = respone.data;
    console.log(user);
    
    setUser(user);
  };
  const init = async () => {
    await checkToken();
    await getSokcet();
  };
  useEffect(() => {
    init();
  }, []);

  const createChat = () => {
    if (socket) {
      console.log(user.id);

      const payload = {
        roomName: "testRoom",
        userId: user.id,
        username: user.username,
      };

      socket.emit("joinRoom", payload);
    }
  };
  const joinChat = () => {
    if (socket) {
      const room = "testRoom";
      const payload = {
        room,
        message: "Hello",
      };
      socket.emit("sendMessage", payload);
    }
  };
  return (
    <MainContainer>
      <div className="w-full h-full flex">
        <TollBar />
        <div className="flex flex-col w-full h-full">
          <Nav />
          <div>
            <AuthButton onClick={createChat}>Create Chat</AuthButton>
            <AuthButton onClick={joinChat}>Send message</AuthButton>
            <h1 className="text-white">{user.username}</h1>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default App;
