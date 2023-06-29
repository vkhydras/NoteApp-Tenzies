import React from 'react';
import './App.css'
import Die from './components/Die';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti';

export default function App(){
  const [allDiesArray, setAllDiesArray] = React.useState(newDies())
  const [Tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=>{
    console.log ("dice changed")
    const allHeld = allDiesArray.every(die => die.isHeld )
    const firstValue = allDiesArray[0].value
    const allValues = allDiesArray.every(die=>die.value === firstValue)
    if(allHeld && allValues){
      setTenzies(true)
    }
  },[allDiesArray])

  function newDies(){
    const diesArray = []
    for (let i = 0; i < 10; i++){
      diesArray.push(helper())
      
    }
    return diesArray 
  }

  function rollDice(){
    if(!Tenzies){
      setAllDiesArray(prev=>prev.map(die =>{
        return die.isHeld ? die :
        helper()
      }))
    } else{
      setTenzies(false)
      setAllDiesArray(newDies)
    }
  }
  function helper(){
    return {
      value: Math.floor(Math.random()*6 +1),
      isHeld: false, 
      id: nanoid()
    }
  }

  function holdDice(id){
    setAllDiesArray(prev=>prev.map(die=>{
      return die.id ===id ? {...die,isHeld:!die.isHeld}:die
    }))
  }
 
  
 const diceEllements = allDiesArray.map(die=> <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return(
    <>
      <main>
        {Tenzies && <Confetti/> }
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className='container'>
        { diceEllements}
        </div>
        <button className='roll' onClick={rollDice}>{Tenzies?"New game":"Roll"}</button>
      </main>
    </>
  )
}


