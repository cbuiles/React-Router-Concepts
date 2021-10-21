export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    // En caso del servidor de la peticion esté caido , esto nos permite abortar la petición
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";

    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    // El metodo delete de los objetos permite borrar propiedades
    if (!options.body) delete options.body;

    // console.log(options);
    // Activar el controller abort en caso de no tener respuesta de la peticiones
    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
