
import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import BoardProvider from "./store/BoardProvider";
import ToolBoxProvider from "./store/ToolBoxProvider";
import ToolBox from "./components/ToolBox";
function App() {
  return (
    <BoardProvider>
      <ToolBoxProvider>
        <Board />
        <ToolBar />
        <ToolBox />
      </ToolBoxProvider>
    </BoardProvider>
  );
}

export default App;
