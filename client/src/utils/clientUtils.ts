import fetch from 'node-fetch'

export async function callApi<T>(url:string): Promise<T>{
    const res=await fetch(url);
    const json=await res.json();    
    return json as T;
}

