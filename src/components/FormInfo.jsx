import react, {useEffect, useState} from "react"
import{Form, Button, Input,TextArea} from "antd"
import { url } from "../CONNECTION.js"
import "./FormInfo.css"

export default function FormInfo({info}){
    const [title, setTitle] =useState("")
    const [message, setMessage] =useState("")
    const [server, setSever] =useState("")




    const handleSubmit = e =>{

        // console.log("HandleSubmit")
        // console.log({title,message})
        // console.log(JSON.stringify({title,message}))

        e.preventDefault()

        fetch(url+"/addletter",
        {method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title,message})
        })
        .then(inbound => inbound.json())
        .then(incoming=>{
            //console.log("LOL",incoming.message,"LOL")
            setSever(incoming.message)
        })
        .catch(alert)

    }

    useEffect(()=>{
        fetch(url+"/getletters")
        .then(incoming => incoming.json())
        .then(data=>{
           // console.log([...data])
           // setLetter([...data])
        })
        .catch(console.error)
    },[server])

    return(
        <>
        <p>{server || "Send some encouragement!\n Like up ^above^!"}</p>
            <form className="form-submit">
                
                            <Form.Item label="title" name="title">
                                    <Input type="title" 
                                    placeholder="title" 
                                    onChange={e=>setTitle(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="message" name="message">
                                    <Input.TextArea crows={10}
                                    type="message"
                                    placeholder="max characters 200" maxLength={200}
                                    onChange={e=>setMessage(e.target.value)}
                                
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="submit-btn" onClick={handleSubmit} variant="primary" type="submit">SUBMIT</Button>
                                </Form.Item>
            </form>
        </>
    )
}