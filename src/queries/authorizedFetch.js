const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
};

/**
 * Zapouzdřující funkce pro fetch, vytváří mezivrstvu pro komunikaci se serverem.
 * @param {string} path - Cesta k API endpointu.
 * @param {object} params - Parametry pro fetch požadavek.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const authorizedFetch = (path, params) => {
    const newParams = { ...globalFetchParams, ...params }; // umožňuje přepsat výchozí parametry (globalFetchParams)
    const overridenPath = '/api/gql';
    return fetch(overridenPath, newParams); // params.header by mělo být rozšířeno o autorizační TOKEN
};
