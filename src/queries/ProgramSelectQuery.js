import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání seznamu studijních programů.
 * 
 * @returns {object} - JSON dotaz.
 */
export const ProgramSelectQueryJSON = () => ({
  "query":
    `query{
            programPage{
              id,
              name,
            type {
              id, 
              title{
                name
              }
            }
        }
        }`
})

/**
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * 
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const ProgramSelectQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(ProgramSelectQueryJSON()),
  })
