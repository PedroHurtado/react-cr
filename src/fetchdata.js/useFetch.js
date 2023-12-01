import { useEffect, useState } from "react";

export function useFetch(url){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    
    useEffect(()=>{
        async function getData(){
            try{
                //https://axios-http.com/es/docs/intro
                const response = await fetch(url)
                const status = response.status;
                const statusText = response.statusText;
                if (status>=200 && status <=399){
                    setData(await response.json())
                }
                else{
                    
                    throw new Error(`se ha producido el error ${status} (${statusText})` )
                }
            }
            catch(err){
                
                setError(err.message)
            }
            finally{                
                setLoading(false)
            }
        }
        getData();
    }, [url])

    return [
        data,error,loading
    ]
}