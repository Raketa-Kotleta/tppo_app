const INIT = {
    headers: {
        "Content-Type":"application/json;charset=utf-8",
    }
}
class RequestExecutor {
    #BASE_URI;
    constructor(BASE_URI){
        this.#BASE_URI = BASE_URI;
    }
    get(endpoint,code){
        return this.execute(
            endpoint+"/"+code,
            null,
            {...INIT,method:"GET"}
        ); 
    }
    post(endpoint, data){
        return this.execute(
            endpoint,
            data,
            {...INIT,method:"POST"}
        ); 
    }
    put(endpoint, code){
        return this.execute(
            endpoint+"/"+code,
            null,
            {...INIT,method:"PUT"}
        ); 
    }
    delete(endpoint, code){
        return this.execute(
            endpoint+"/"+code,
            null,
            {...INIT,method:"DELETE"}
        ); 
    }
    async execute(url,data, init){
        let resp = null;
        try{
            if (data)
            init = {
                ...init,
                body: JSON.stringify(data),
            }
            if (url[0] != '/') url = "/"+url
            let location = this.#BASE_URI + url;
            resp = await fetch(location,init);
            return await resp.json();
        }
       catch(e){
            console.log(e.message());
            throw new Error(e);
       }
    }
}