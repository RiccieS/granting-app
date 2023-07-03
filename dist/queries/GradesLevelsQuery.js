import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Vytváří JSON dotaz pro získání úrovní známek.
 * @returns {object} - JSON dotaz.
 */
export const GradesLevelsQueryJSON = () => ({
  "query": `query {
        acclassificationPage {
            level {
              id
              name
            }
          }        
}`
});

/**
 * Realizuje dotaz na server pro získání úrovní známek.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const GradesLevelsQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(GradesLevelsQueryJSON())
});