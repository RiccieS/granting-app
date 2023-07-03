import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání seznamu studentů.
 * @returns {object} - JSON dotaz.
 */
export const StudentsQueryJSON = () => ({
  "query": `query {
            userPage {
              id
              name
              surname    
              membership {
                id
                group {
                  name
                  id
                }
              }
            }
}`
});

/**
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const StudentsQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(StudentsQueryJSON())
});