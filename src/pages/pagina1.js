import { useParams } from "react-router-dom"
import FetchData from "../fetchdata.js/fetcdata";

export default function Pagina1(){
    const {id} = useParams();
    
    return (
        <>
            <div>Pagina1</div>
            <FetchData id={id}/>
        </>
    )
        
}