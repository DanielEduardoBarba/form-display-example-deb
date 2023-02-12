import { useEffect,useState, useContext } from "react"
import { List } from "../App.js"
import Cards from "./Cards"
import "./Letters.css"
import { url } from "../CONNECTION.js"

export default function Letters(){
  
    const {letter,setLetter} = useContext(List)
   
    const[updateUI, setUpdateUI] = useState(0)
    const[outbound, setOutbound] = useState({})

  
    useEffect(()=>{
        fetch(url+"/getletters")
        .then(incoming => incoming.json())
        .then(data=>{
           // console.log([...data])
            setLetter([...data])
        })
        .catch(console.error)
    },[])



    return(
        <>
           <div className="letters-container">{
            letter
            ? letter.map(affirm => <Cards key={affirm._id} affirm={affirm}/>)
            : <p>no Cards</p>
            }</div>
        </>
    )
}