import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání klasifikace podle uživatele.
 * @param {string} id - ID uživatele.
 * @returns {object} - JSON dotaz.
 */
export const ClassificationByUserQueryJSON = id => ({
  "query": `
  query {        
    result: userById(id: "${id}") {
      id
      name
      surname
      classifications {
        id
        lastchange
        semester {
          id
          order
          subject{
            id
            name
          }
        }
        level {
          id
          name
        }
        order
        date
      }
    }
  }`
});

/**
 * Realizuje dotaz na server pro získání klasifikace podle uživatele.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @param {string} id - ID uživatele.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const ClassificationByUserQuery = id => authorizedFetch('/gql', {
  body: JSON.stringify(ClassificationByUserQueryJSON(id))
});