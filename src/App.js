import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// Bring inn usedState Hook
import cardImages from './Models/cardimgs'
import symbols from './Models/symbols';
//Bring in Data
import Card from './components/Card';
import Button from './components/Button';
//Bring in our Components

function App() {

  //count
const [count, setCount] = useState(0)
//currentPic
const [currentPic, setCurrentPic] = useState(cardImages[count])

//Established state
const changeCount = ()=>{
  setCount(count + 1);
  console.log("Count is Currently:",count)
  setCurrentPic(cardImages[count]);
  console.log("Pic is Currently:",currentPic)
};
const reverseCount = ()=>{
  setCount(count - 1);
  console.log("Count is Currently:",count)
  setCurrentPic(cardImages[count]);
  console.log("Pic is Currently:",currentPic)
};


//create functions/methods


return (
  <div className="App">
    <Card currentCount={count} images={currentPic}/>

    <div className="btnContainer">
      <Button togglePic={reverseCount} icons={symbols.left} />
      <Button togglePic={changeCount} icons={symbols.right} />
    </div>
  </div>
);
}

export default App;
