import { useFetch } from "./useFetch";

export default function FetchData({id}){

    const [data,error,loading] = useFetch(`http://localhost:8080/pizzas/${id}`)


    if(loading){
        return(<div>Loading....</div>)
    }

    if(error){
        return(
            <div>{error}</div>
        )
    }

    return <div>{JSON.stringify(data)}</div>
}

/* 
1. crear un customHook ->params(url)
    useEffect
    useState
    debe de devoler o un dato o el error
    then->ok
    catch->error
    finally
*/
