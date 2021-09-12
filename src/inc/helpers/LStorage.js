export const LStorage = (method = "get", name ="", value=[] )=>{
    if(method === "remove"){
        localStorage.removeItem(name)
    }else if(method === "set"){
        localStorage.setItem(name, JSON.stringify(value))
    }else{
        return localStorage.getItem(name)
    }
}
