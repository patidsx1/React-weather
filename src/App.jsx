import { useState,useEffect } from 'react'
import './index.css'
import ListComponent from './list'

 function Square(props) {
  const [nextplayer,setnextplayer]=useState('X')
  const [usedbyX,setusedbyX]=useState([])
  const [usedbyO,setusedbyO]=useState([])
  const [gameStatus,setgameStatus]=useState('active')
  const [winner,setwinner]=useState('')
  const arr= Array.from({length:9},(_,indx)=>indx+1)
  const winningCombination=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]


  const squareSelected =(key)=>{
    if(usedbyO.concat(usedbyX).includes(key) || gameStatus==='won') 
      return;

    nextplayer==='X' ? setusedbyX([...usedbyX,key]) :  setusedbyO([...usedbyO,key])
    nextplayer==='X' ? setnextplayer('O'):setnextplayer('X')

  }

  useEffect(() => {
    if (usedbyO.concat(usedbyX).length >= 5) {
      checkGameStatus();
    }
  }, [nextplayer]);

  const checkGameStatus=()=>{
    let arr;
    nextplayer ==='X' ? arr=usedbyO : arr=usedbyX;

     for(let i=0;i<winningCombination.length;i++){  
      let won=true;
      for(let k=0;k<=2;k++)
      {     
        if(!arr.includes(winningCombination[i][k]))
            won=false;       
      }
      if(won)
      {
          setgameStatus('won')
          nextplayer==='X' ?setwinner('O'):setwinner('X')
          break;
      }

     }
    
  }

  const squareFunc=()=>{
    props.playAgain()
  }



  return (
  <>
      <p style={{margin:0}}>{ gameStatus==='won' ? `Winner : ${winner}`:   `Next Player : ${nextplayer}` } </p>
      <div className='flex'>
        <div  className='main'>
          {
            arr.map(Key=>  <button key={Key} onClick={()=>squareSelected(Key)}  className="square">{usedbyX.includes(Key) ? 'X':usedbyO.includes(Key)?'O':''}</button>)
          }
        </div> 
        <div>
          <ListComponent callParentFunc={squareFunc}/>
        </div>
      </div>
  </>
  )
}


const ParentFunc =()=>{
  const[index,setindex]=useState(1)
   return  <Square key={index}  playAgain={()=>setindex(index+1)} />
  }


  export default ParentFunc;
