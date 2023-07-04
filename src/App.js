import './App.css';
import { DisplayDisfficulty } from './Components/DisplayDifficulty/DisplayDifficulty';
import { MenuList } from './Components/MenuList/MenuList';
import style from "./style.module.css";

function App() {
  return (
    <>
    <h1> Set Your Difficulty</h1>
      <div className={style.workspace}>
        <MenuList difficulty/>
        <DisplayDisfficulty/>
      </div>
    </>
  );
}

export default App;
