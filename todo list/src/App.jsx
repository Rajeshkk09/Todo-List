import { useState } from "react";
import Input from "./input";
import Dispaly from "./dispaly";
function App() {
  const[done,setdone]=useState(["hello","Task2","Task3","Task4"]);

  const inputdata =(data)=>{
    // console.log("app",data);
    if(data != ""){
      // mt bejna ke code
      setdone(
        [
          data,
          ...done
        ] 
      )
    }
    
  }

  const removeME = (index) =>{
    console.log("app",index);

    const newTask = done.filter(
      (t,i)=>{
        if(i== index)return false;
        else return true;
      }
    )
    setdone(newTask);

  }


  return (
    
      <div className="container border border-dark">
        <div className="row">

          <Input inputer={inputdata}/>
          <Dispaly done={done} removeIt={removeME}/>
          {/* <Dispaly done={done} removeIt={removeME}/> */}
    
        </div>
      </div>
  )
}

export default App;
