import './App.css';
import React , {useState,useEffect} from 'react'
function App() {
  const [currboard,setBoard] = useState(['','','','','','','','','']);
  const [turn,setTurn] = useState('X');
  const [end,setEnd] = useState(false)
  const [winner,setWinner] = useState('')
  const resumeGame = () => {
    setBoard(['','','','','','','','',''])
    setEnd(false)
  }
  const handleClick = (id) => {
      
      let temp = currboard
      if(temp[id] !== '') {
        return;
      }
      temp[id] = turn;
      setBoard(temp)
      console.log(currboard)
      turn === 'X' ? setTurn('O') : setTurn('X')
  }
  const a = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  useEffect(() =>{
    //alert("effect called")
    console.log('effect called')
    console.log(currboard)
     for(let i = 0 ; i < a.length ; i ++) {
       if(currboard[a[i][0]] === '' || currboard[a[i][1]] === '' || currboard[a[i][2]] === '') {
         continue
       }
       if((currboard[a[i][0]] === currboard[a[i][1]]) && 
       (currboard[a[i][1]] === currboard[a[i][2]])) {
         console.log(currboard[a[i][0]] + " " + currboard[a[i][1]] + " " + currboard[a[i][2]])
         setWinner(currboard[a[i][0]])
         setEnd(true)
         break
       }
     }
  })
  return (
    <div className="App">
      <div className="title">
        <h1 classname="header">Tic Tac Toe</h1>
      </div>
      <div className="board">
        {
          currboard.map((square,index) => {
            return (
              <div onClick={() => handleClick(index)} className="square">{square}</div>
            )
          })
        }
      </div>
      <div className="footer">
        {
          end && (
            <div>
            <h1 className="winner">{winner} won the game</h1>
            <button onClick={resumeGame} className="btn">Play again</button>
            </div>
          )
        }
        
      </div>
    </div>
  );
}

export default App;
