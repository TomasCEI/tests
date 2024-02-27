
  // inventamos un fetch más sencillo
  /*
  easyFetch({
    url: 'http://localhost:8080/api/v1/libros/'+id,
    method: 'PUT',
    body: formData,
    timeout: 3000,
    callback: (data) => {
      console.log('Datos enviados correctamente:', data)
    }
  });
  */
  export const easyFetch = async ({ url, method = 'GET', body = null, timeout = 5000, callback =null }) => {
    const controller = new AbortController();
    const abortTimeout = setTimeout(() => controller.abort(), timeout);
  
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // podemos agregar otros headers para auth, etc
      },
      signal: controller.signal
    };
  
    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, fetchOptions);
  
      clearTimeout(abortTimeout);
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
  
      if (callback) {
        callback(data);
      } else {
        return data;
      }
  
    } catch (error) {
      console.error('Error al realizar request:', error.message);
    }
  }