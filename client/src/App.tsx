import MainContainer from "./components/UI/Container/MainContainer";
import TollBar from "./components/UI/TollBar/TollBar";
import Nav from "./components/UI/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "./constants/ROUTES";
function App() {
  const navigate = useNavigate();
  const init = () => {
    const token = localStorage.getItem("token");
    if (!token) navigate(ROUTES.AUTH);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <MainContainer>
      <div className="w-full h-full flex">
        <TollBar />
        <div className="flex flex-col w-full h-full">
          <Nav />
        </div>
      </div>
    </MainContainer>
  );
}

export default App;
