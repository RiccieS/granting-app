import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání seznamu skupin.
 * 
 * @returns {object} - JSON dotaz.
 */
export const GroupsSelectQueryJSON = () => ({
  "query": `query {
            groupPage{
              id
              name
            }
        }`
});

/**
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * 
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const GroupsSelectQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(GroupsSelectQueryJSON())
});