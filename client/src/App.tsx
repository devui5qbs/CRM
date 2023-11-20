import MainContainer from "./components/UI/Container/MainContainer";
import TollBar from "./components/UI/TollBar/TollBar";
import Nav from "./components/UI/Nav/Nav";
function App() {
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
