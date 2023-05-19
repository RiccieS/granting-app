import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const GroupsSelectQueryJSON = () => ({
    "query":
        `query {
            groupPage{
              name
            }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const GroupsSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })