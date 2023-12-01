import { useSearchParams } from "react-router-dom"

export default function Pagina2(){
    //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    let [searchParams] = useSearchParams()
    console.log(searchParams)
    return <div>Página2</div>
}