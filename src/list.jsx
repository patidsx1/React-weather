import { useState } from "react"


const ListComponent =(props)=>{
    const [liArr,liArrSet]= useState(['Go to game start'])
 

   const  handleListClick=()=>{
    props.callParentFunc()
   }

    return(
         <ol>
            {liArr.map((val)=><li key={val}><button onClick={handleListClick}>{val}</button></li>)}
         </ol>
    )
}


export default ListComponent