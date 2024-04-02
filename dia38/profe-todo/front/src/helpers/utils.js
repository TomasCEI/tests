
export const easyFetch = async ({
    url, method="GET", body =null, timeout=5000, callback=null
}) => {

    const controller = new AbortController();
    const abortTimeout = setTimeout( () => controller.abort(), timeout);

    const fetchOptions={
        method,
        headers: {
            'Content-Type':'application/json',
            // podemos agregar a futuro otros headers
        },
        signal: controller.signal
    }
    if(body){
        fetchOptions.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, fetchOptions);

        clearTimeout(abortTimeout);

        if(!response.ok){ throw new Error(response.statusText); }

        const data = await response.json();

        if(callback){
            callback(data);
        } else {
            return data;
        }

    } catch (error) {
        console.error("Error al realizar el request: ", error.message);
    }
}


export const limpiarStrings = () => {
    
}