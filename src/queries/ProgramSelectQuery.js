import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const ProgramSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProgramSelectQueryJSON()),
    })