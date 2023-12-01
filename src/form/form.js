import { useRef } from "react";
import Input from "./input";

export default function Form() {
    
    const id = useRef()
    const name = useRef()

    async function handlerSubmit(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const data = {
            id: Number(id.current.value),
            name: name.current.value,
        }
        //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        //https://developer.mozilla.org/es/docs/Web/API/Fetch_API
        //https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
        //https://www.youtube.com/watch?v=8aGhZQkoFbQ

        const response = await fetch("http://localhost:8080/pizzas",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const pizza = await response.json();
        console.log(pizza)
    }
    return (<form onSubmit={handlerSubmit}>
        <Input id="id" label="introduzca el id" ref={id}/>        
        <Input id="name" label="introduzca el name" ref={name}/>        
        <button type="submit">Enviar datos</button>
    </form>)
}