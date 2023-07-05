import { useState } from 'react';
import './App.css';
import { DisplayDisfficulty } from './Components/DisplayDifficulty/DisplayDifficulty';
import { MenuList } from './Components/MenuList/MenuList';
import style from "./style.module.css";

function App() {

  const [currentDifficulty, setCurrentDifficulty] = useState("")

  const onMenuListItemClick = (difficulty) =>
  {
    setCurrentDifficulty(difficulty)
  };

  return (
    <>
    <h1> Set Your Difficulty</h1>
      <div className={style.workspace} >
        <MenuList difficulty = {currentDifficulty} onItemClick = {onMenuListItemClick} />
        <DisplayDisfficulty difficulty = {currentDifficulty} />
      </div>
    </>
  );
}

export default App;
